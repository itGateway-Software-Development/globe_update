<script setup>
import { toastSuccess, warning } from '@/utils/sweetalert';
import { ref } from 'vue';
import { register } from '../services/authService';
import LocalStorage from '@/utils/localstorage';
import { useRouter } from 'vue-router';

    const formValue = ref({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const router = useRouter();

    const checkValidation = () => {
        if(formValue.value.name == "" || formValue.value.phone == "" || formValue.value.password == "") {
            return false;
        }  else {
            return true;
        }
    }

    const handleSubmit = async() => {
        if(checkValidation()) {

             // Email format check using regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (formValue.value.email && !emailRegex.test(formValue.value.email)) {
                warning("Incorrect email format")
                return;
            }

            const phoneRegex = /^\d{8,15}$/;
            if (!phoneRegex.test(formValue.value.phone)) {
                warning("Incorrect phone number format")
                return;
            }


            let response = await register(formValue.value);
            console.log(response);

            if(response?.data?.ok) {
                LocalStorage.store('token', response.data.token);
                LocalStorage.store('user', response.data.user);
                toastSuccess('Registration successful');
                router.push('/profile');
                return;
            }

            if(!response.ok) {
                warning(response.message)
                return;
            } 

        } else {
            warning('Please fill all the fields', 'Error');
        }
    }
</script>

<template>
    <Container>
        <div class="max-w-lg mx-auto my-10">
            <h3 class="text-2xl text-slate-700 font-bold text-center">Register</h3>

            <div class="mt-8 flex flex-col gap-5">
                <div class="flex flex-col gap-1">
                    <label for="" class="text-base text-slate-600 font-bold">Name <span class="text-red-600">*</span></label>
                    <input v-model="formValue.name" type="text" class="bg-slate-50 border border-slate-600 rounded-full text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]" >
                </div>
                <div class="flex flex-col gap-1">
                    <label for="" class="text-base text-slate-600 font-bold">Email</label>
                    <input v-model="formValue.email" type="email" class="bg-slate-50 border border-slate-600 rounded-full text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]" >
                </div>
                <div class="flex flex-col gap-1">
                    <label for="" class="text-base text-slate-600 font-bold">Phone <span class="text-red-600">*</span></label>
                    <input v-model="formValue.phone" type="text" class="bg-slate-50 border border-slate-600 rounded-full text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]" >
                </div>
                <div class="flex flex-col gap-1">
                    <label for="" class="text-base text-slate-600 font-bold">Password <span class="text-red-600">*</span></label>
                    <input @blur="formValue.password.length < 6 ? warning('Password must be at least 6 characters', 'Error') : ''" v-model="formValue.password" type="password" min="6" class="bg-slate-50 border border-slate-600 rounded-full text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]" >
                </div>
                <div class="flex flex-col gap-4">
                    <p class="text-center">Already have an account? <RouterLink to="/login" class="text-[#1162ad] font-bold">Login</RouterLink></p>
                    <button @click="handleSubmit" class="bg-[#1162ad] text-center text-lg font-bold text-white w-full rounded-full py-3">Register</button>
                </div>
            </div>
        </div>
    </Container>
</template>