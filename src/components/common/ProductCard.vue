<script setup>
import Modal from '@/components/common/Modal.vue';
import { Eye, ShoppingCart, ZoomIn, DollarSign, Check, Heart } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toastSuccess, warning } from '@/utils/sweetalert';
import useCart from '@/composables/useCart';

const props  = defineProps({
    item: {
        type: Object
    },
    goDetail: {
        type: Function
    },
})

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

    const result = addProduct(product);


    if(!result.ok && result.message == 'unauthenticated') {
        router.push('/login');
    } else {
        toastSuccess('Product added to cart');
    }
}
</script>

<template>
    <div class="flex flex-col gap-2 shadow-xl border border-slate-300 rounded-lg overflow-hidden">
        <div class="bg-slate-200 relative group h-[270px]">
            <span class="absolute top-3 left-3 z-20 text-white text-xs font-semibold bg-sky-600 px-3 py-1 rounded-lg">{{ item.category }}</span>
            <div class="absolute hidden group-hover:flex top-3 right-3 items-center gap-2 z-20">
                <span class="cursor-pointer bg-slate-300 rounded-full group/icon p-2" ><Heart :size="20" class="text-slate-700 group-hover/icon:text-rose-800" /></span>
                <span class="cursor-pointer bg-slate-300 rounded-full group/icon p-2" @click="goDetail(item.slug)"><Eye :size="20" class="text-slate-700 group-hover/icon:text-rose-800" /></span>
                <span class="cursor-pointer bg-slate-300 rounded-full group/icon p-2" @click="openModal"><ZoomIn :size="20" class="text-slate-700 group-hover/icon:text-rose-800" /></span>
            </div>

            <Modal :item="item"  :isOpen="isModalOpen" @close="isModalOpen = false"  />
            
            <img @click="goDetail(item.slug)" :class="`cursor-pointer w-full h-[270px] object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${item.preview_images.length > 1 ? 'group-hover:opacity-0' : ''}`" :src="item.preview_images[0]?.image_url" alt="" />
        
            <img @click="goDetail(item.slug)" :class="`cursor-pointer w-full h-[270px] object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 ${item.preview_images.length > 1 ? 'group-hover:opacity-100' : ''}`" :src="item.preview_images[1]?.image_url" alt="" />
        </div>

        <div class="p-2">
            <h2 class="text-xl font-bold my-2 h-16">{{ item.name }}</h2>
            <div class="h-[100px] overflow-hidden">
                <p class="line-clamp-4" v-html="item.specification"></p>
            </div>

            <div class="flex justify-between flex-wrap mt-3">
                <div class="flex items-center gap-1">
                    <i class="fas fa-star text-amber-500"></i>
                    <i class="fas fa-star text-amber-500"></i>
                    <i class="fas fa-star text-amber-500"></i>
                    <i class="fas fa-star text-amber-500"></i>
                    <i class="fas fa-star text-slate-600"></i>
                </div>
                <div class="flex items-center gap-1 px-2">
                    <span class="text-slate-600 text-sm">{{ item.qty > 0 ? 'Stock' : 'Out of Stock' }}</span>
                    <span class="bg-green-300 px-1 rounded-md text-zinc-700">{{item.qty}}</span>
                </div>
            </div>

            <div class="flex justify-between items-center mt-5">
                <div v-if="!item.is_attribute">
                    <span class="text-amber-700 text-lg font-bold" v-if="item.price_us == 0">{{item.price_mmk}} MMK</span>
                    <span class="text-amber-700 text-lg font-bold flex items-center gap-2" v-else>{{item.price_us}} <DollarSign class="text-green-700" :size="20" /></span>
                </div>
                <div v-else>
                    <span class="text-amber-700 text-lg font-bold" v-if="item.currency == 'MMK'">{{item.price_range}} MMK</span>
                    <span class="text-amber-700 text-lg font-bold flex items-center gap-2" v-else>{{item.price_range}} <DollarSign class="text-green-700" :size="20" /></span>
                </div>
                <div v-if="!existsInCart(item.id, item.sku)" @click="handleAddCart(item)" class="flex justify-center items-center w-10 h-10 rounded-lg bg-sky-400 cursor-pointer overflow-hidden p-2 group">
                    <ShoppingCart class="text-white group-hover:scale-125 duration-200" :size="20" />
                </div>
                <div v-else @click="warning('Already added to cart')" class="flex justify-center items-center w-10 h-10 rounded-lg bg-green-700 cursor-pointer overflow-hidden p-2 group">
                    <Check class="text-white group-hover:scale-125 duration-200" :size="20" />
                </div>
            </div>
        </div>
    </div>
</template>
