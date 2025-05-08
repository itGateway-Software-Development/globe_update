<script setup>
    import LocalStorage from '@/utils/localstorage';
    import AddressForm from '../components/AddressForm.vue';
    import PaymentForm from '../components/PaymentForm.vue';
    import { ref } from 'vue';
    import CheckoutItemList from '../components/CheckoutItemList.vue';

    const user = LocalStorage.get('user')

    const formData = ref({
        payment_method: 'cod',
    })
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="col-span-1 pe-10 border-r-2 border-slate-300 py-10">
            <div class="max-w-[550px] ms-auto ">
                <h3 class="text-2xl font-bold text-slate-700">Checkout</h3>
                <div class="mb-10">
                    <h5 class="text-lg font-bold text-slate-500 mt-5 mb-3">Shipping Information</h5>
                    <AddressForm :user="user" />
                </div>
                <div class="mb-10">
                    <h5 class="text-lg font-bold text-slate-500 mt-5 mb-3">Payment Method</h5>
                    <PaymentForm :formData="formData" />
                </div>
            </div>
        </div>
        <div class="col-span-1 ps-10 py-10 bg-slate-200">
            <div class="sticky top-[160px] max-w-[550px] me-auto">
                <CheckoutItemList />
            </div>
        </div>
    </div>
</template>