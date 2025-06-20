<script setup>
    import Modal from '@/components/common/Modal.vue';
    import { Eye, ShoppingCart, ZoomIn, DollarSign, Check, Heart } from 'lucide-vue-next';
    import { computed, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { toastSuccess, warning } from '@/utils/sweetalert';
    import useCart from '@/composables/useCart';
    import wishList from '@/utils/wishList';
    import { storeToRefs } from 'pinia';
    import { useWishListStore } from '@/store/useWishListStore';


    const props  = defineProps({
        item: {
            type: Object
        },
        goDetail: {
            type: Function
        },
    })

    const wishListStore = useWishListStore();

    const {wishLists} = storeToRefs(wishListStore)

    const { existsInCart } = useCart();

    const isModalOpen = ref(false);
    const router = useRouter();
    const {addProduct} = useCart();

    const openModal = () => {
        isModalOpen.value = true
    }

    const handleAddCart = (product) => {
        if(product.is_attribute) {
            warning('Please select variation before adding to cart').then((result) => {
                if(result.isConfirmed) {
                    isModalOpen.value = true;
                    return;
                }
            });
            return;
        }

        if(!product.qty || product.qty == 0) {
            warning('Product out of stock')
            return
        }

        const result = addProduct(product);

        toastSuccess('Product added to cart');

        // if(!result.ok && result.message == 'unauthenticated') {
        //     router.push('/login');
        // } else {
        //     toastSuccess('Product added to cart');
        // }
    }

    const handleAddWish = async() => {
        if(isAlreadyWishList.value) {
            const response = await wishList.removeWishList(props.item.id, props.item.product_type);

            if(response.ok) {
                toastSuccess('Product is removed from wishlist');
                return
            }

            return;
        }
        const payload = {product_id: props.item.id, product_type: props.item.product_type}
        
        const response = await wishList.storeWishList(payload);

        console.log(response)

        if(response.ok) {
            toastSuccess('Product added to wishlist');
        }
    }

    const isAlreadyWishList = computed(() => {
    return wishLists.value.some(item => item.id == props.item?.id && item.sku == props.item?.sku)
    })

    let qty = computed(() => {
        if(props.item.is_attribute) {
            return props.item.variations.reduce((sum, item) => {
                return sum + item.qty
            }, 0)
        }
        return props.item.qty
    })

</script>

<template>
    <div class="flex flex-col gap-2 shadow-xl border border-slate-300 rounded-lg overflow-hidden">
        <div class="bg-slate-200 relative group">
            <div class="relative w-full">
              <img
                @click="goDetail(item.slug)"
                :class="`cursor-pointer w-full h-auto rounded-lg transition-opacity duration-500 ease-in-out ${item.preview_images.length > 1 ? 'group-hover:opacity-0' : ''}`"
                :src="item.preview_images[0]?.image_url"
                alt=""
              />
              <img
                @click="goDetail(item.slug)"
                :class="`cursor-pointer w-full h-auto rounded-lg transition-opacity duration-500 ease-in-out absolute top-0 left-0 opacity-0 ${item.preview_images.length > 1 ? 'group-hover:opacity-100' : ''}`"
                :src="item.preview_images[1]?.image_url"
                alt=""
              />
            </div>
          
            <!-- Action buttons -->
            <div class="absolute hidden group-hover:flex top-3 right-3 items-center gap-2 z-20">
                <span class="cursor-pointer bg-slate-300 rounded-full group/icon p-2" @click="handleAddWish"><Heart :size="20" :fill="isAlreadyWishList ? 'red' : 'transparent'" :class="`${isAlreadyWishList ? 'text-rose-800' : 'text-slate-700'} group-hover/icon:text-rose-800`" /></span>
                <span class="cursor-pointer bg-slate-300 rounded-full group/icon p-2" @click="goDetail(item.slug)"><Eye :size="20" class="text-slate-700 group-hover/icon:text-rose-800" /></span>
                <span class="cursor-pointer bg-slate-300 rounded-full group/icon p-2" @click="openModal"><ZoomIn :size="20" class="text-slate-700 group-hover/icon:text-rose-800" /></span>
            </div>
          
            <!-- Modal -->
            <Modal :item="item" :isOpen="isModalOpen" @close="isModalOpen = false" />
        </div>
        <div class="p-2">
            <h2 class="text-base md:text-lg lg:text-xl font-bold my-2 h-12 md:h-16 line-clamp-2">{{ item.name }}</h2>
            <div class="h-[80px] md:h-[100px] overflow-hidden">
                <p class="line-clamp-4 text-sm md:text-base " v-html="item.specification"></p>
            </div>

            <div class="flex justify-between flex-wrap mt-3">
               
                <div class="flex items-center gap-1 px-2">
                    <span v-if="item.qty > 0" class=" text-zinc-700 font-bold">Stock - <span class="bg-lime-300 text-slate-700 py-1 px-2 rounded-lg text-sm">{{qty}}</span></span>
                    <span v-else class="text-rose-600 font-bold text-sm">Out of stock</span>
                </div>
            </div>

            <div class="flex justify-between items-center mt-5">
                <div v-if="!item.is_attribute">
                    <span class="text-amber-700 text-sm md:text-base lg:text-lg font-bold" v-if="item.price_us == 0">{{item.price_mmk}} MMK</span>
                    <span class="text-amber-700 text-sm md:text-base lg:text-lg font-bold flex items-center gap-2" v-else>{{item.price_us}} <DollarSign class="text-green-700" :size="20" /></span>
                </div>
                <div v-else>
                    <span class="text-amber-700 text-sm md:text-base lg:text-lg font-bold" v-if="item.currency == 'MMK'">{{item.variations.length == 1 ? item.price_range.split('-')[0] : item.price_range}} MMK</span>
                    <span class="text-amber-700 text-sm md:text-base lg:text-lg font-bold flex items-center gap-2" v-else>{{item.variations.length == 1 ? item.price_range.split('-')[0] : item.price_range}} <DollarSign class="text-green-700" :size="20" /></span>
                </div>
                <div v-if="!existsInCart(item.id, item.sku)" @click="handleAddCart(item)" class="flex justify-center items-center w-8 md:w-10 h-8 md:h-10 rounded-lg bg-sky-400 cursor-pointer overflow-hidden p-2 group">
                    <ShoppingCart class="text-white group-hover:scale-125 duration-200" :size="20" />
                </div>
                <div v-else @click="warning('Already added to cart')" class="flex justify-center items-center w-8 md:w-10 h-8 md:h-10 rounded-lg bg-green-700 cursor-pointer overflow-hidden p-2 group">
                    <Check class="text-white group-hover:scale-125 duration-200" :size="20" />
                </div>
            </div>
        </div>
    </div>
</template>
