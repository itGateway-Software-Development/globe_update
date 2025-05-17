<script setup>
    import { useWishListStore } from '@/store/useWishListStore';
import { Eye, Trash2 } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';
import wishList from '@/utils/wishList';

    const wishListStore = useWishListStore();
    const {wishLists} = storeToRefs(wishListStore)

   const handleRemove = async (id,type) => {
    console.log(id,type)
       await wishList.removeWishList(id, type)
   }
</script>

<template>
    <div>
        <div class="border shadow p-10" v-if="wishLists.length > 0">
            <div v-for="(item, index) in wishLists" :key="index" class="grid grid-cols-6 gap-2 mb-7 border-b">
                <div class="col-span-1 flex gap-8">
                    <img class="w-24" :src="item.images[0]?.image_url" alt="">
                </div>
                <div class="col-span-2">
                    <p class="font-bold">{{item.name}}</p>
                </div>
                <div class="col-span-1">
                    <p class="font-bold">{{item.category}}</p>
                </div>
                <div class="col-span-1 flex justify-center">
                    <RouterLink :to="`/${item.product_type == 'normal' ? 'product-detail': (item.product_type == 'xp_pen' ? 'xp-pen-detail': (item.product_type == 'solar_product' ? 'solar-product-detail': 'chuwi-product-detail'))}/${item.slug}`">
                        <Eye class="hover:text-slate-700 cursor-pointer" />
                    </RouterLink>
                </div>
                <div class="col-span-1 flex justify-center">
                    <Trash2 @click="handleRemove(item.id, item.product_type)" class="hover:text-red-700 cursor-pointer" />
                </div>
            </div>
            
        </div>
        <div v-else>
            <h3 class="text-2xl font-bold text-slate-700 text-center">You Have No Wish Data</h3>
        </div>
        
    </div>
</template>