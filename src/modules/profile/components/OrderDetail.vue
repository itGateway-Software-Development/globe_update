<script setup>
    const props = defineProps({
        order: Object
    })

    console.log(props.order)
</script>

<template>
    <div>
        <table class="w-full table-auto">
            <thead>
                <tr class="w-full bg-slate-300">
                    <th class="w-[40%] py-2">Product</th>
                    <th class="w-[10%] py-2">Quantity</th>
                    <th class="w-[20%] py-2">Price</th>
                    <th class="w-[10%] py-2">Rate</th>
                    <th class="w-[20%] py-2">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in order.item" :key="index" class="border-b border-slate-400">
                    <td class="py-4">
                        <div class="flex items-center">
                            <img :src="item.image_url" alt="Product" class="w-16 h-16 object-cover rounded mr-4">
                            <div>
                                <p class="font-semibold">{{item.name}}</p>
                                <div class="inline-flex px-3 rounded text-sm font-bold bg-cyan-400">
                                    <span v-for="(value, key) in item.variation_attributes" :key="key">
                                    {{ value }},
                                    </span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="py-4">
                        <p class="text-center">{{item.qty}}</p>
                    </td>
                    <td class="py-4">
                        <p class="text-center">{{item.price}}</p>
                    </td>
                    <td class="py-4">
                        <p class="text-center">{{item.rate}}</p>
                    </td>
                    <td class="py-4 pe-3">
                        <p class="text-end">{{item.total_price}}</p>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td class="py-3" colspan="4">
                        <p class="text-end font-bold">Total</p>
                    </td>
                    <td class="py-3 pe-3">
                        <p class="text-end font-bold"><span class="text-slate-500">Ks</span> {{order.sub_total?.toLocaleString()}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="py-3" colspan="4">
                        <p class="text-end font-bold">Shipping Fee</p>
                    </td>
                    <td class="py-3 pe-3">
                        <p class="text-end font-bold"><span class="text-slate-500">Ks</span> {{order.shipping_fee?.toLocaleString()}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="py-3" colspan="4">
                        <p class="text-end font-bold">Grand Total</p>
                    </td>
                    <td class="py-3 pe-3">
                        <p class="text-end font-bold"><span class="text-slate-500">Ks</span> {{order.total?.toLocaleString()}}</p>
                    </td>
                </tr>
                <tr>
                    <td class="py-3" colspan="4">
                        <p class="text-end font-bold">Payment Method</p>
                    </td>
                    <td class="py-3 pe-3">
                        <p class="text-end font-bold" v-if="order.delivery_option == 'delivery'">
                            {{order.payment_method?.toUpperCase()}} <br>
                            <span class="text-cyan-500 text-sm">({{order.bank_account?.toUpperCase()}})</span>
                        </p>
                        <p class="text-end font-bold" v-else>
                            Pickup in Store
                        </p>
                    </td>
                </tr>
                <tr v-if="order.payment_method == 'bank_pay'">
                    <td colspan="3"></td>
                    <td class="py-3 " colspan="2">
                        <img class="w-full" :src="order.slip" alt="">
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>