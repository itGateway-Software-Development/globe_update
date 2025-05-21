<script setup>
import { Paperclip } from 'lucide-vue-next';
import { ref } from 'vue';

    const props = defineProps({
        formData: Object,
        accounts: Array
    })

    const selectedAccount = ref(null)

    const handlePaymentSlipChange = (event) => {
        props.formData.payment_slip = event.target.files[0];
    }

    const handleBankAccountChange = (account) => {
        selectedAccount.value = account
    }
</script>

<template>
    <div>
        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-slate-300 rounded-lg sm:flex ">
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                <div :class="`flex items-center ps-3 ${props.formData.payment_method == 'cod' ? 'bg-slate-300' : ''}`">
                    <input 
                        v-model="formData.payment_method" 
                        id="horizontal-list-radio-license" 
                        type="radio" 
                        value="cod" 
                        name="list-radio" 
                        class="w-4 h-4 text-amber-600 bg-gray-200 border-gray-300 focus:ring-amber-500 focus:ring-2"
                    >
                    <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">COD </label>
                </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                <div :class="`flex items-center ps-3 ${props.formData.payment_method == 'bank_pay' ? 'bg-slate-300' : ''}`">
                    <input v-model="formData.payment_method" id="horizontal-list-radio-id" type="radio" value="bank_pay" name="list-radio" class="w-4 h-4 text-amber-600 bg-gray-200 border-gray-300 focus:ring-amber-500   focus:ring-2 ">
                    <label for="horizontal-list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">Banking (or) Pay </label>
                </div>
            </li>
        
        </ul>

        <div class="mt-2 border border-slate-300 rounded-lg p-3" v-if="formData.payment_method == 'cod'">
            <p class="text-sm mb-3">ရန်ကုန်၊ မန္တလေးမြို့များမှပစ္စည်း မှာယူပါက Cash on Delivery ဖြင့်မှာယူနိုင်ပါမည်။ </p>
            <p class="text-sm mb-3">အခြားသော နယ်မြို့များမှမှာယူပါက ပစ္စည်းတန်ဖိုးကြိုတင်ငွေရှင်းပေးရပါမည်။ </p>
            <p class="text-sm mb-3">
                မှာယူသော Orders များနှင့်ပတ်သက်ပြီး သတ်မှတ်ထားသော Delivery Fees ပေးဆောင်ရပါမည်။သတ်မှတ် Delivery Fees နှုန်းထားများ သိရှိလိုပါက 09-880441216 သို့ဆက်သွယ်မေးမြန်းနိုင်ပါတယ်။ပို့ဆောင်ခမှာ မြို့နယ်အလိုက် အနည်းငယ် ကွာခြားပါသည်။
            </p>
            <p class="text-sm mb-3">
                Order Process များပိုမိုမြန်ဆန်အောင် ယခုပါဖုန်းနံပတ်များကို ဆက်သွယ်စုံစမ်းမေးမြန်းနိုင်ပါသည်။
                09 880441216
            </p>
        </div>
        <div class="mt-2 border border-slate-300 rounded-lg " v-if="formData.payment_method == 'bank_pay'">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="col-span-1 bg-slate-200 p-3">
                    <div class="`flex items-center ps-3 mb-2 `" v-for="(account, index) in accounts" :key="index">
                        <input 
                            :id="`horizontal-list-radio-${account.slug}`" 
                            @input="handleBankAccountChange(account)"
                            v-model="formData.bank_account_id"
                            type="radio" :value="account.id" name="bank_accounts" 
                            class="w-4 h-4 text-amber-600 bg-gray-200 border-gray-300 focus:ring-amber-500 focus:ring-2 "
                        >
                        <label :for="`horizontal-list-radio-${account.slug}`" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">{{account.name}}</label>
                    </div>
                    
                </div>
                <div class="col-span-1 flex flex-col justify-center py-5 pe-3 gap-10">
                    <div v-if="selectedAccount">
                        <div class="mb-10">
                            <p class="text-sm mb-3">Account No - <span class="font-bold text-base">{{selectedAccount?.account_no}}</span></p>
                            <p class="text-sm">Name - <span class="font-bold text-base">{{selectedAccount?.account_holder_name}}</span></p>
                        </div>
                        <div class="relative flex flex-col gap-1">
                            <input 
                                type="file" 
                                class="border border-slate-300 rounded-lg w-full py-1 z-20"
                                @change="handlePaymentSlipChange" 
                            >
                            <Paperclip class="absolute top-2 left-2 h-6 w-6 text-slate-600 z-10 pointer-events-none" />
                            <span class="text-sm text-rose-500">Please upload bank_pay slip.</span>
                        </div>
                    </div>
                    <div v-else>
                        <span class="text-sm text-rose-500 font-bold">Please select an account.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>