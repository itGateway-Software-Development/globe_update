<script setup>
import { ArrowLeft, Eye } from 'lucide-vue-next';
import { ref } from 'vue';
import OrderDetail from './OrderDetail.vue';

    const props = defineProps({
        orders: Array
    })

    const isShowDetail = ref(false)
    const selectedOrder = ref({})

    const showDetail = (order) => {
        selectedOrder.value = order
        isShowDetail.value = true
    }

</script>

<template>
    <div>
        <div :class="`border shadow p-10 ${!isShowDetail ? 'translate-x-0' : 'translate-x-[1500px] hidden'} transition-transform`" v-if="orders.length > 0">
            <div v-for="(order, index) in orders" :key="index" class="grid grid-cols-6 gap-2 mb-7 border-b">
                <div class="col-span-2">
                    <p class="font-bold">{{ order.order_code }}</p>
                </div>
                <div class="col-span-1">
                    <p 
                        :class="`${order.status == 'pending' ? 'bg-cyan-300' : (order.status == 'confirmed' ? 'bg-green-700 text-white' : 'bg-rose-700')} inline-block text-sm px-3 py-[2px] rounded-full`"
                    >
                        {{ order.status }}
                    </p>
                </div>
                <div class="col-span-1">
                    <p><span class="font-bold">{{ order.total_item_qty }}</span> items</p>
                </div>
                <div class="col-span-1 text-end">
                    <p class="font-bold"><span class="text-slate-700 text-sm ">Ks</span> {{ order.total.toLocaleString() }}</p>
                </div>
                <div class="col-span-1 flex justify-end">
                    <Eye class="hover:text-cyan-500 cursor-pointer" @click="showDetail(order)"/>
                </div>
            </div>
            
        </div>
        <div v-else>
            <h3 class="text-2xl font-bold text-slate-700 text-center">You Have No Order</h3>
        </div>
        <div :class="`${isShowDetail ? 'translate-x-0' : 'translate-x-[1500px]'} transition-transform`">
            <div class="bg-slate-200 h-full p-3 rounded">
                <div class="inline-flex gap-2 bg-slate-200 cursor-pointer hover:text-rose-500" @click="isShowDetail = !isShowDetail">
                    <ArrowLeft />
                    Back
                </div>
                <div class="mt-5">
                    <OrderDetail :order="selectedOrder" />
                </div>
            </div>
        </div>
    </div>
</template>