<script setup>
    import useCart from '@/composables/useCart';
import { DollarSign, Minus, Plus, Trash2 } from 'lucide-vue-next';

    const {cartItems, increaseQuantity, decreaseQuantity, removeCartItem} = useCart();
</script>

<template>
    <Container class="py-10">
        <div >
            <h3 class="text-2xl font-bold text-slate-700 text-center">Shopping Cart List</h3>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            <div class="col-span-1 md:col-span-2 lg:col-span-3">
                <div class="overflow-x-auto" v-if="cartItems.length > 0">
                    <table class="w-full table-auto">
                        <thead class="bg-slate-200 mb-2">
                          <tr class="text-left border-b">
                            <th class="py-3 ps-4 w-[45%]">Product</th>
                            <th class="py-3 text-center w-[12%]">Price</th>
                            <th class="py-3 text-center w-[15%]">Quantity</th>
                            <th class="py-3 text-center w-[12%]">Total</th>
                            <th class="py-3 text-center w-[10%]">Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b" v-for="(item,index) in cartItems" :key="index">
                            <td class="p-4">
                              <div class="flex items-center">
                                <img :src="item.preview_images[0]?.image_url" alt="Product" class="w-16 h-16 object-cover rounded mr-4">
                                <div>
                                  <p class="font-semibold">{{item.name}}</p>
                                  <p class="text-gray-500 text-sm" v-if="item.is_attribute">{{ Object.values(item.variations.attributes).join(', ') }}</p>
                                </div>
                              </div>
                            </td>
                            <td class="py-4 text-center">
                              <div class="flex justify-center" v-if="!item.is_attribute">
                                <span class="text-amber-700 text-lg font-bold" v-if="item.price_us == 0">{{item.price_mmk}} MMK</span>
                                <span class="text-amber-700 text-lg font-bold flex items-center gap-1" v-else>{{item.price_us}} <DollarSign class="text-green-700" :size="20" /></span>
                              </div>
                              <div class="flex justify-center" v-else>
                                <span class="text-amber-700 text-lg font-bold" v-if="item.variations.price_us == 0">{{item.price_mmk}} MMK</span>
                                <span class="text-amber-700 text-lg font-bold flex items-center gap-1" v-else>{{item.variations.price_us}} <DollarSign class="text-green-700" :size="20" /></span>
                              </div>
                            </td>
                            <td class="py-4 text-center">
                              <div class="inline-flex justify-center items-center gap-4 border-2 px-2 py-1 rounded-3xl">
                                <div @click="decreaseQuantity(item.id, item.is_attribute ? item.variations.sku : item.sku)" @mousedown.prevent.stop class="bg-lime-600 rounded-full p-1 inline-block cursor-pointer active:scale-75">
                                    <Minus :size="19" class="text-slate-50" />
                                </div>
                                <span class="w-5">{{item.quantity}}</span>
                                <div @click="increaseQuantity(item.id, item.is_attribute ? item.variations.sku : item.sku)" @mousedown.prevent.stop class="bg-lime-600 rounded-full p-1 inline-block cursor-pointer active:scale-75">
                                    <Plus :size="19"  class="text-slate-50"/>
                                </div>
                              </div>
                            </td>
                            <td class="py-4 text-center">
                                <div class="flex justify-center" v-if="!item.is_attribute">
                                  <span class="text-amber-700 text-lg font-bold" v-if="item.price_us == 0">
                                    {{ (item.price_mmk * item.quantity).toLocaleString() }} MMK
                                  </span>
                                  <span class="text-amber-700 text-lg font-bold flex items-center gap-1" v-else>
                                    {{ (item.price_us * item.quantity).toFixed(2) }} 
                                    <DollarSign class="text-green-700" :size="20" />
                                  </span>
                                </div>
                              
                                <div class="flex justify-center" v-else>
                                  <span class="text-amber-700 text-lg font-bold" v-if="item.variations.price_us == 0">
                                    {{ (item.price_mmk * item.quantity).toLocaleString() }} MMK
                                  </span>
                                  <span class="text-amber-700 text-lg font-bold flex items-center gap-1" v-else>
                                    {{ (item.variations.price_us * item.quantity).toFixed(2) }}
                                    <DollarSign class="text-green-700" :size="20" />
                                  </span>
                                </div>
                              </td>
                              
            
                            <td class="py-4 text-center">
                              <button class="text-slate-700 hover:text-red-700" @click="removeCartItem(item.id, item.is_attribute ? item.variations.sku : item.sku)">
                                <Trash2 :size="20" />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>

                <div v-else class="flex flex-col items-center justify-center gap-8 w-full mt-10">
                    <h3 class="text-xl text-slate-700 font-bold">Cart is empty. <RouterLink to="/category/laptops" class="text-amber-700 underline">Go Shopping</RouterLink></h3>
                </div>
            </div>

            <div class="col-span-1">
                <h3 class="font-bold text-xl text-center">Order Summary</h3>
                <div class="w-full h-[2px] bg-slate-500 my-3"></div>
                <div class="flex flex-col gap-2">
                    <div class="flex justify-between">
                        <p>Subtotal</p>
                        <p>{{ cartTotal }} MMK</p>
                    </div>
                    <div class="flex justify-between">
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-bold">Total</p>
                        <p class="font-bold">{{ cartTotal }} MMK</p>
                    </div>
                </div>
            </div>

        </div>
          
    </Container>
</template>