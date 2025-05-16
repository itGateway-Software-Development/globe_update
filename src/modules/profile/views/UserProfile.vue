<script setup>
    import LocalStorage from '@/utils/localstorage';
    import ProfileCard from '../components/ProfileCard.vue';
    import OrderLists from '../components/OrderLists.vue';
    import { onMounted, ref } from 'vue';
    import ProfileForm from '../components/ProfileForm.vue';
    import { askConfirmation, toastSuccess, warning } from '@/utils/sweetalert';
    import useUserService from '../services/useUserService';
import WishList from '../components/WishList.vue';


    let user = LocalStorage.get('user')
    const token = LocalStorage.get('token')
    const currentTab = ref('profile')
    const isLoading = ref(false)
    const orders = ref([])

    const formData = ref({
        name: user?.name,
        profile_image: null,
        email: user?.email,
        phone: user?.phone,
        city: user?.city,
        state: user?.state,
        zip_code: user?.zip_code,
        address: user?.address
    })

    const formError = ref({
        name: false,
        email: false,
        phone: false,
        city: false,
        state: false,
        address: false
    })

    const validateForm = (formData, formError) => {
        for (const key in formError) {
            formError[key] = false;
        }

        let hasError = false;

        const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', ];

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

        askConfirmation('Are you sure to update profile?', 'Yes, Update').then(async(result) => {
            if(result.isConfirmed) {
                isLoading.value = true
                let response = await useUserService.updateProfile(formData.value, user.id, token);
                console.log(response);
                if(response.data.ok) {
                    toastSuccess('Profile updated successfully');
                    isLoading.value = false
                    LocalStorage.store('user', response.data.user);
                    user = response.data.user
                } else {
                    isLoading.value = false
                    warning(response.message)
                }
            }
        })
    }

    const handleLogout = () => {
        LocalStorage.remove('token')
        LocalStorage.remove('user')
        window.location.href = '/'
    }

    onMounted(async() => {
        orders.value = await useUserService.getOrders(user.id, token)
    })

</script>

<template>
    <Container className="py-10">
        <div class="grid grid-cols-1 md:grid-cols-3  gap-10">
            <div class="col-span-1">
                <ProfileCard 
                    :user="user"
                    @logout="handleLogout"
                />
            </div>

            <div class="col-span-1 md:col-span-2">
                <div class="flex gap-1">
                    <button @click="currentTab = 'profile'" :class="`active:scale-75 duration-75 border border-sky-500 ${currentTab === 'profile' ? 'bg-sky-500 text-slate-50' : 'text-slate-700'} font-bold px-3 py-1 rounded-lg`">Profile</button>
                    <button @click="currentTab = 'order'" :class="`active:scale-75 duration-75 border border-sky-500 ${currentTab === 'order' ? 'bg-sky-500 text-slate-50' : 'text-slate-700'} font-bold px-3 py-1 rounded-lg`">My Orders</button>
                    <button @click="currentTab = 'wishlist'" :class="`active:scale-75 duration-75 border border-sky-500 ${currentTab === 'wishlist' ? 'bg-sky-500 text-slate-50' : 'text-slate-700'} font-bold px-3 py-1 rounded-lg`">Wish List</button>
                </div>
                <div class="mt-3 ">
                    <ProfileForm 
                        v-if="currentTab === 'profile'" 
                        :formData="formData" 
                        :formError="formError"
                        @submitForm="handleSubmit"
                        :isLoading="isLoading"
                    />

                    <OrderLists
                        v-if="currentTab === 'order'"
                        :orders="orders"
                    />

                    <WishList
                        v-if="currentTab === 'wishlist'"
                    />
                </div>
            </div>
        </div>
    </Container>
</template>