<script setup>
    import useCart from '@/composables/useCart';
    import { DollarSign, X } from 'lucide-vue-next';

    const {cartItems, removeCartItem} = useCart();

    const removeFromCart = (id, sku) => {
        removeCartItem(id, sku);
    }
</script>

<template>
    <div class="flex justify-between items-center">
        <p>{{ cartItems.length }} items</p>
        <RouterLink data-drawer-hide="cart-drawer" aria-controls="cart-drawer" to="/cart" class="text-amber-700 text-sm underline">View Cart</RouterLink>
    </div>

    <div class="flex flex-col gap-3 mt-5">
        <div v-for="item in cartItems" :key="item.id" class="flex items-center gap-4 border border-slate-300 rounded-lg p-3 relative">
            <div @click="removeFromCart(item.id, item.is_attribute ? item.variations.sku : item.sku)" class="absolute top-0 right-0 rounded-lg cursor-pointer bg-slate-300">
                <X :size="20" />
            </div>
            <img class="w-16 h-16 object-cover" :src="item.preview_images[0]?.image_url" alt="">
            <div class="flex flex-col gap-1">
                <p class="text-base font-semibold">{{ item.name }}</p>
                <p class="text-sm text-slate-600">Quantity: {{ item.quantity }}</p>
                <div v-if="!item.is_attribute">
                    <span class="text-amber-700 text-lg font-bold" v-if="item.price_us == 0">{{item.price_mmk}} MMK</span>
                    <span class="text-amber-700 text-lg font-bold flex items-center gap-1" v-else>{{item.price_us}} <DollarSign class="text-green-700" :size="20" /></span>
                </div>
                <div v-else>
                    <span class="text-amber-700 text-lg font-bold" v-if="item.currency == 'MMK'">{{item.variations.price_mmk}} MMK</span>
                    <span class="text-amber-700 text-lg font-bold flex items-center gap-1" v-else>{{item.variations.price_us}} <DollarSign class="text-green-700" :size="20" /></span>
                </div>
            </div>
        </div>
    </div>
    
</template>