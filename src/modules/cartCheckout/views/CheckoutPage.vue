<script setup>
    import LocalStorage from '@/utils/localstorage';
    import AddressForm from '../components/AddressForm.vue';
    import PaymentForm from '../components/PaymentForm.vue';
    import { computed, onMounted, ref } from 'vue';
    import CheckoutItemList from '../components/CheckoutItemList.vue';
    import ShippingMethod from '../components/ShippingMethod.vue';
    import getDeliveryStates from '../composables/getDeliveryStates';
    import useCart from '@/composables/useCart';
    import getCurrencyRate from '@/composables/getCurrencyRate';
    import { submit } from '../composables/useOrder';
    import { askConfirmation, toastSuccess, warning } from '@/utils/sweetalert';
    import { useRouter } from 'vue-router';

    const user = LocalStorage.get('user')
    const { cartItems, clearCart } = useCart();
    const router = useRouter();

    const {states, error, load} = getDeliveryStates();
    const {usd_mmk_rate, error: currencyError, load: currencyLoad} = getCurrencyRate();

    const formData = ref({
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        city: user?.city,
        state: user?.state,
        zip_code: user?.zip_code,
        address: user?.address,
        state_id: '',
        city_id: '',
        shipping_fee: 0,
        payment_method: 'cod',
        kpay_slip: '',
        total_qty: 0,
        subtotal_mmk: 0,
        cart_items: cartItems,
        rate: usd_mmk_rate
    })

    const formError = ref({
        name: false,
        email: false,
        phone: false,
        city: false,
        state: false,
        address: false,
        state_id: false,
        city_id: false,
        payment_method: false,
        kpay_slip: false,
    })

    onMounted(async() => {
        await load();
        await currencyLoad();
        formData.value.state_id = states.value[0]?.id;

        formData.value.subtotal_mmk = cartItems.value.reduce((sum, item) => {
            const price_us = item.is_attribute ? item.variations.price_us : item.price_us;
            const price_mmk = item.is_attribute ? item.variations.price_mmk : item.price_mmk;

            if (price_us === 0) {
            return sum + price_mmk * item.quantity;
            } else {
            return sum + price_us * item.quantity * usd_mmk_rate.value;
            }
        }, 0);

        formData.value.total_qty = cartItems.value.reduce((sum, item) => {
            return sum + item.quantity
        },0)

    })

    const handleCityChange = (city) => {
        formData.value.city_id = city.id
        formData.value.shipping_fee = city.delivery_charges
    }

    const validateForm = (formData, formError) => {
        for (const key in formError) {
            formError[key] = false;
        }

        let hasError = false;

        const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state',  'state_id', 'city_id', 'payment_method'];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                formError[field] = true;
                hasError = true;
            }
        });

        // Conditional validation
        if (formData.payment_method === 'kpay' && !formData.kpay_slip) {
            formError.kpay_slip = true;
            hasError = true;
        }

        return !hasError;
    }

    const handleSubmit = async() => {
        const isValid = validateForm(formData.value, formError.value);

        if (!isValid) {
            warning('Please fill all fields')
            return;
        }

        askConfirmation('Are you sure to submit order?', 'Yes, Submit').then(async(result) => {
            if(result.isConfirmed) {
                let response = await submit(formData.value, user.id);
                if(response.data.ok) {
                    toastSuccess('Order submitted successfully');
                    clearCart();
                    router.push('/profile');
                } else {
                    warning(response.message)
                }
            }
        })
    }

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="col-span-1 pe-10 border-r-2 border-slate-300 py-10">
            <div class="max-w-[550px] ms-auto ">
                <h3 class="text-2xl font-bold text-slate-700">Checkout</h3>
                <div class="mb-10">
                    <h5 class="text-lg font-bold text-slate-500 mt-5 mb-3">Shipping Information</h5>
                    <AddressForm :user="user" :formData="formData" :formError="formError" />
                </div>
                <div class="mb-10">
                    <h5 class="text-lg font-bold text-slate-500 mt-5 mb-3">Delivery Option</h5>
                    <p v-if="formError.city_id" class="text-sm text-rose-500">Please select a delivery option</p>
                    <ShippingMethod 
                        :states="states" 
                        :formData="formData" 
                        @cityChange="handleCityChange"
                    />
                </div>
                <div class="mb-10">
                    <h5 class="text-lg font-bold text-slate-500 mt-5 mb-3">Payment Method</h5>
                    <p v-if="formData.payment_method == 'kpay' && formError.kpay_slip" class="text-sm text-rose-500">Please upload Kpay slip</p>
                    <PaymentForm :formData="formData" />
                </div>
            </div>
        </div>
        <div class="col-span-1 ps-10 py-10 bg-slate-200">
            <div class="sticky top-[160px] max-w-[550px] me-auto">
                <CheckoutItemList 
                    :cartItems="cartItems" 
                    :shippingFee="formData.shipping_fee" 
                    :subtotalMMK="formData.subtotal_mmk"
                    :totalQty="formData.total_qty"
                    :usd_mmk_rate="usd_mmk_rate"
                />

                <div class="mt-5">
                    <button 
                        @click="handleSubmit"
                        class="bg-[#1162ad] text-white py-2 px-10 rounded-full mt-3 border border-[#1162ad] hover:bg-transparent hover:text-slate-700 duration-200 w-full font-bold"
                    >
                        Submit Order
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>