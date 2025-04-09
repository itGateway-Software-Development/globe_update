<script setup>
    import { Eye, ShoppingCart, ZoomIn } from 'lucide-vue-next';

    defineProps({
        product: {
            type: Object
        }
    })

</script>

<template>
    <div class="rounded-lg shadow-lg overflow-hidden border border-slate-300 hover:-translate-y-1 hover:border-sky-500 duration-200">
        <div class="bg-white p-4 h-[300px] flex justify-center items-center overflow-hidden relative group">
            <span class="absolute top-3 left-3 z-20 text-white text-xs font-semibold bg-sky-600 px-3 py-1 rounded-lg">{{ product.category }}</span>
            <div class="absolute hidden group-hover:flex top-3 right-3 items-center gap-3 z-20">
                <span class="cursor-pointer"><Eye :size="22" class="text-slate-600" /></span>
                <span class="cursor-pointer"><ZoomIn :size="22" class="text-slate-600" /></span>
            </div>
            <img class="w-full h-[250px] hover:scale-110 duration-300" :src="product.img"  alt="">
        </div>

        <div class="p-4">
            <h2 class="text-xl font-bold mb-3 line-clamp-1">{{ product.title }} </h2>
            <div class="flex items-center gap-1">
            <i class="fas fa-star text-amber-500"></i>
            <i class="fas fa-star text-amber-500"></i>
            <i class="fas fa-star text-amber-500"></i>
            <i class="fas fa-star text-amber-500"></i>
            <i class="fas fa-star text-slate-600"></i>
            </div>

            <div class="flex justify-between items-center mt-5">
                <span class="text-slate-700 text-lg font-bold">{{ product.price }}</span>
                <div class="flex justify-center items-center w-12 h-12 rounded-lg bg-sky-400 cursor-pointer overflow-hidden p-2 group">
                    <ShoppingCart class="text-white group-hover:scale-125 duration-200" :size="22" />
                </div>
            </div>
        </div>
   </div>
</template>