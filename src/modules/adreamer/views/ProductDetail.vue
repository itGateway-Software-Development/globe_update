<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import getProduct from '../composables/getProduct';
import PButton from '@/components/common/PButton.vue';
import { DollarSign, Layers2, Heart, ChevronRight } from 'lucide-vue-next';
import ProductCard from '@/components/common/ProductCard.vue';
import useCart from '@/composables/useCart';
import { toastSuccess } from '@/utils/sweetalert';
import { useWishListStore } from '@/store/useWishListStore';
import wishList from '@/utils/wishList';
import { storeToRefs } from 'pinia';

const route = useRoute();
const slug = ref(route.params.slug);
const {existsInCart, addProduct} = useCart()
const currentImage = ref();
const router = useRouter()
const variation_price = ref(0)
const current_variation_id = ref(0)
const selectVariation = ref()
const wishListStore = useWishListStore();

const { product,relatedProducts, errors, load } = getProduct();
const {wishLists} = storeToRefs(wishListStore)

// Watch for changes in the route and update slug
watch(() => route.params.slug, async (newSlug) => {
    slug.value = newSlug;
    await load(slug.value);
    currentImage.value = product?.value?.images[0]?.image_url;
    variation_price.value = product.value?.is_attribute ? (product.value?.variations[0].price_us == 0 ? product.value?.variations[0]?.price_mmk : product.value?.variations[0]?.price_us) : 0
    current_variation_id.value = product.value?.is_attribute ? product.value?.variations[0]?.id : 0
    selectVariation.value = product.value?.is_attribute ? product.value?.variations[0] : null
    window.scrollTo(0,0)

}, { immediate: true }); // Run immediately on mount

const handleActiveVariaton = (id) => {
      selectVariation.value = product.value.variations.find(variation => variation.id == id);
      variation_price.value = selectVariation.value.price_us == 0 ? selectVariation.value.price_mmk : selectVariation.value.price_us
      current_variation_id.value = id
    }


const isMagnifierVisible = ref(false);
const magnifierSize = 200;
const zoomLevel = 2;
const magnifier = ref(null);

const currentTab = ref('desc');


const showMagnifier = () => {
  isMagnifierVisible.value = true;
};

const hideMagnifier = () => {
  isMagnifierVisible.value = false;
};

const moveMagnifier = (e) => {
  if (!magnifier.value) return;
  
  const img = e.target;
  const imgRect = img.getBoundingClientRect();
  const mouseX = e.clientX - imgRect.left;
  const mouseY = e.clientY - imgRect.top;

  if (mouseX < 0 || mouseY < 0 || mouseX > imgRect.width || mouseY > imgRect.height) {
    hideMagnifier();
    return;
  }

  const backgroundX = (mouseX / imgRect.width) * 100;
  const backgroundY = (mouseY / imgRect.height) * 100;

  magnifier.value.style.backgroundImage = `url(${currentImage.value})`;
  magnifier.value.style.backgroundSize = `${imgRect.width * zoomLevel}px ${imgRect.height * zoomLevel}px`;
  magnifier.value.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;

  const magnifierX = mouseX - magnifierSize / 2;
  const magnifierY = mouseY - magnifierSize / 2;

  magnifier.value.style.left = `${magnifierX}px`;
  magnifier.value.style.top = `${magnifierY}px`;
};

const goDetail = (slug) => {
        router.push('/chuwi-product-detail/'+slug)
  }

  onMounted(() => {
    window.scrollTo(0,0)
  })

  const handleAddCart = (product) => {
    const result = addProduct(product, current_variation_id.value);

    if(!result.ok && result.message == 'unauthenticated') {
        router.push('/login');
    } else {
        toastSuccess('Product added to cart');
    }
}

const handleAddWish = async(product) => {
  if(isAlreadyWishList.value) {
      toastSuccess('Product already added to wishlist');
      return
    }
    
    const payload = {product_id: product.id, product_type: product.product_type}

    const response = await wishList.storeWishList(payload);
    console.log(response)

    if(response.ok) {
        toastSuccess('Product added to wishlist');
    }
}

const isAlreadyWishList = computed(() => {
  return wishLists.value.some(item => item.id == product.value?.id && item.sku == product.value?.sku)
})

</script>


<template>
  <Container class="py-5 px-0 lg:px-28">
    <div class="flex gap-2 items-center my-3">
        <h3 class="text-slate-500">Adreamer</h3>
        <ChevronRight :size="20" class="text-slate-500" />
        <h3 class="text-slate-500">Product Detail</h3>
        <ChevronRight :size="20" class="text-slate-500" />
        <h3 class="text-slate-500">{{product?.name}}</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5" v-if="product && currentImage">
      <div class="col-span-1 ">
        <div class="border border-3 rounded-lg shadow-lg overflow-hidden flex justify-center max-w-[700px] relative">
          <img 
            :src="currentImage" 
            alt="" 
            class="w-full object-cover" 
            @mousemove="moveMagnifier"
            @mouseover="showMagnifier"
            @mouseout="hideMagnifier"
          />
          <div 
            ref="magnifier"
            v-show="isMagnifierVisible"
            class="absolute border border-gray-500 rounded-full pointer-events-none"
            :style="{
              width: `${magnifierSize}px`,
              height: `${magnifierSize}px`,
              position: 'absolute',
              backgroundRepeat: 'no-repeat',
              border: '2px solid #fff',
              borderRadius: '50%',
            }"
          ></div>
        </div>
        <div class="flex mt-3 gap-3">
          <div 
            v-for="(image, i) in product.images" 
            :key="i" 
            @click="currentImage = image.image_url"
            :class="`border border-3 p-3 cursor-pointer shadow-lg ${
              image.image_url == currentImage ? 'border-green-400' : 'border-slate-400'
            } rounded-lg overflow-hidden`"
          >
            <img class="w-16" :src="image?.image_url" alt="" />
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <h3 class="font-bold text-2xl mb-3">{{ product.name }}</h3>
        <h4 class="bg-emerald-400 py-1 px-3 rounded-lg text-slate-600 mb-5 inline-flex items-center gap-2">
          <Layers2 class="text-slate-700" :size="20" />{{ product.category }}
        </h4>
        <!-- <div v-html="product.specification" class="line-clamp-2 flex flex-col gap-2 text-slate-700 ps-2 mb-7"></div> -->
         <p class="text-slate-600 leading-9 ps-2">{{product.description}}</p>

         <p class="my-7" v-if="(product.is_attribute ? selectVariation.qty : product.qty) > 0">Stock - <span :class="`bg-lime-300 py-1 px-2 rounded-lg text-sm`">{{product.is_attribute ? selectVariation.qty : product.qty}}</span></p>

         <p v-else class="text-rose-700 font-bold text-sm">Out of stock</p>

        <div class="mb-10" v-if="!product.is_attribute">
          <span class="text-amber-700 text-2xl font-bold" v-if="product.price_us == 0">{{product.price_mmk}} MMK</span>
          <span class="text-amber-700 text-2xl font-bold flex items-center gap-2" v-else>{{product.price_us}} <DollarSign class="text-green-700" :size="20" /></span>
        </div>

        <div class="mb-10" v-else>
          <span class="text-amber-700 text-2xl font-bold" v-if="product.currency == 'MMK'">{{variation_price}} MMK</span>
          <span class="text-amber-700 text-2xl font-bold flex items-center gap-2" v-else>{{variation_price}} <DollarSign class="text-green-700" :size="20" /></span>

          <div class="mt-3 flex flex-wrap gap-2">
            <div @click="handleActiveVariaton(variation.id)" :class="`border ${current_variation_id == variation.id ? 'bg-green-200 border-green-300 text-slate-700 shadow-lg' : 'bg-slate-200  border-slate-400 text-slate-600'} cursor-pointer py-1 px-2 rounded-lg`" v-for="(variation, i) in product.variations" :key="i">
              <span class="text-sm ">{{ Object.values(variation.attributes).join(', ') }}</span>
            </div>
          </div>
        </div>

        <hr />
        <div class="flex items-center gap-5 my-3 ">
          <div v-if="!product.is_attribute">
              <PButton v-if="!existsInCart(product.id, product.sku)" :onClick="() => handleAddCart(product)"  text="Add To Cart" class="cursor-pointer" :cartbtn="true" :isAddable="product.qty > 0" />
              <PButton v-else text="Already In Cart" class="bg-green-700" :alreadyAdded="true"  />
          </div>
          <div v-else>
            <PButton v-if="!existsInCart(product.id, selectVariation?.sku)" :onClick="() => handleAddCart(product)"  text="Add To Cart" class="cursor-pointer" :cartbtn="true" :isAddable="product.qty > 0" />
            <PButton v-else text="Already In Cart" class="bg-green-700" :alreadyAdded="true"  />
          </div>
          <Heart @click="handleAddWish(product)" :fill="isAlreadyWishList ? 'red' : 'white'" :size="24" :class="`text-red-500 cursor-pointer hover:scale-110 duration-200`" />
        </div>
        <hr />
      </div>
    </div>

    <div class="mt-28">
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
            <li class="me-2">
              <button @click="currentTab = 'desc'" :class="`inline-block p-4  ${currentTab == 'desc' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`" aria-current="page">Description</button>
            </li>
            <li class="me-2">
                <button @click="currentTab = 'spec'" :class="`inline-block p-4  rounded-t-lg ${currentTab == 'spec' ? 'text-blue-600 border-b-2 border-blue-600' : ''} `" aria-current="page">Specification</button>
            </li>
        </ul>
      </div>

      <div class="mt-5">
        <p v-if="currentTab == 'desc'">{{product?.description}}</p>
        <div class="flex flex-col gap-3" v-if="currentTab == 'spec'" v-html="product?.specification"></div>
      </div>
    </div>

    <div class="mt-24 mb-20">
      <h3 class="font-semibold text-2xl">Related Products</h3>
      <hr>
      <div class="mt-5">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <div class="col-span-1" v-for="(item, index) in relatedProducts" :key="index">
                  <ProductCard :item="item" :goDetail="goDetail" />
              </div>
          </div>
      </div>
    </div>
  </Container>
</template>
