<script setup>
    import { DollarSign, Layers2 } from 'lucide-vue-next';
    import { defineProps, defineEmits, ref, watch } from 'vue';
    import PButton from './PButton.vue';
    import useCart from '@/composables/useCart';
    import { toastSuccess } from '@/utils/sweetalert';
import { useRouter } from 'vue-router';


    const props = defineProps({
        isOpen: Boolean,
        item: Object,
    });

    const {addProduct, existsInCart} = useCart();
    const router = useRouter();

    const currentImage = ref(props.item.images[0])
    const variation_price = ref(props.item.is_attribute ? (props.item.variations[0].price_us == 0 ? props.item.variations[0]?.price_mmk : props.item.variations[0]?.price_us) : 0)
    const current_variation_id = ref(props.item.is_attribute ? props.item.variations[0]?.id : 0)
    const selectVariation = ref(props.item.is_attribute ? props.item.variations[0] : null)

    const emit = defineEmits(["close"]);

    const closeModal = () => {
        emit("close");
    };

    // prevent scroll when modal is shown
    watch(() => props.isOpen, (newValue) => {
        if (newValue) {
            document.body.style.overflow = 'hidden'; 
            currentImage.value = props.item.images[0]
        } else {
            document.body.style.overflow = '';  
        }
    });

    const handleActiveVariaton = (id) => {
      selectVariation.value = props.item.variations.find(variation => variation.id == id);
      variation_price.value = selectVariation.value.price_us == 0 ? selectVariation.value.price_mmk : selectVariation.value.price_us
      current_variation_id.value = id
    }

    const handleAddCart = (product) => {
        const result = addProduct(product, current_variation_id.value);

        if(!result.ok && result.message == 'unauthenticated') {
            router.push('/login');
        } else {
            toastSuccess('Product added to cart');
        }
    }

</script>

<template>
    <transition name="fade-down">
      <div 
        v-if="isOpen"
        class="fixed top-0 left-0 right-0 z-[999] w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
      >
        <div class="relative p-4 w-full max-w-6xl bg-white rounded-lg shadow-sm">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-2 md:p-2 border-b border-gray-200 rounded-t">
            <h3 class="text-xl font-semibold text-gray-900">
              Product Detail
            </h3>
            <button 
              type="button"
              class="text-gray-400 bg-gray-300 hover:bg-gray-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              @click="closeModal"
            >
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="col-span-1">
                    <div class="border border-3 rounded-lg shadow-lg overflow-hidden flex justify-center max-w-[500px] ">
                        <img :src="currentImage.image_url" alt="" class="w-full object-cover">
                    </div>
                    <div class="flex mt-3 gap-3">
                        <div @click="currentImage = image" :class="`border border-3 p-3 cursor-pointer shadow-lg ${image.image_url == currentImage.image_url ? 'border-green-400' : 'border-slate-400'} rounded-lg overflow-hidden`" v-for="(image, i) in item.images" :key="i">
                            <img class="w-16" :src="image.image_url" alt="">
                        </div>
                    
                    </div>
                </div>
                <div class="col-span-1">
                    <h3 class="font-bold text-2xl mb-3">{{item.name}}</h3>
                    <h4 class="bg-emerald-400 py-1 px-3 rounded-lg text-slate-600 mb-5 inline-flex items-center gap-2"><Layers2 class="text-slate-700" :size="20" />{{item.category}}</h4>
                    <!-- <p class="line-clamp-6"  v-html="item.specification" ></p> -->
                     <p class="text-slate-600 leading-9">{{item.description}}</p>

                    <p class="my-7">Stock - <span :class="`${item.qty > 0 ? 'bg-lime-300' : 'bg-rose-600'} py-1 px-2 rounded-lg text-sm`">{{item.qty}}</span></p>

                    <div class="mb-10" v-if="!item.is_attribute">
                      <span class="text-amber-700 text-2xl font-bold" v-if="item.price_us == 0">{{item.price_mmk}} MMK</span>
                      <span class="text-amber-700 text-2xl font-bold flex items-center gap-2" v-else>{{item.price_us}} <DollarSign class="text-green-700" :size="20" /></span>
                    </div>

                    <div class="mb-10" v-else>
                      <span class="text-amber-700 text-2xl font-bold" v-if="item.currency == 'MMK'">{{variation_price}} MMK</span>
                      <span class="text-amber-700 text-2xl font-bold flex items-center gap-2" v-else>{{variation_price}} <DollarSign class="text-green-700" :size="20" /></span>

                      <div class="mt-3 flex flex-wrap gap-2">
                        <div @click="handleActiveVariaton(variation.id)" :class="`border ${current_variation_id == variation.id ? 'bg-green-200 border-slate-300 text-slate-700 ' : 'bg-transparent  border-slate-400 text-slate-600'} cursor-pointer py-1 px-2 rounded-lg`" v-for="(variation, i) in item.variations" :key="i">
                          <span class="text-sm ">{{ Object.values(variation.attributes).join(', ') }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="flex items-center gap-5 my-3 ">
                      <div v-if="!item.is_attribute">
                          <PButton v-if="!existsInCart(item.id, item.sku)" :onClick="() => handleAddCart(item)"  text="Add To Cart" class="cursor-pointer" :cartbtn="true" :isAddable="item.qty > 0 ? true : false" />
                          <PButton v-else text="Already In Cart" class="bg-green-700" :alreadyAdded="true"  />
                      </div>
                      <div v-else>
                        <PButton v-if="!existsInCart(item.id, selectVariation?.sku)" :onClick="() => handleAddCart(item)"  text="Add To Cart" class="cursor-pointer" :cartbtn="true" :isAddable="item.qty > 0 ? true : false" />
                        <PButton v-else text="Already In Cart" class="bg-green-700" :alreadyAdded="true"  />
                      </div>
                      <RouterLink to='/cart'><PButton text="View Cart" className="bg-red-500"  /></RouterLink>
                    </div>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  

  
  <style>
  .fade-down-enter-active,
  .fade-down-leave-active {
    transition: all 0.3s ease;
  }
  .fade-down-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }
  .fade-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  </style>
  