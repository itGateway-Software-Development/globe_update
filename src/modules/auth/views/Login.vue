<script setup>
import { toastSuccess, warning } from '@/utils/sweetalert';
import { ref } from 'vue';
import { login } from '../services/authService';
import LocalStorage from '@/utils/localstorage';
import { useRouter } from 'vue-router';

    const formValue = ref({
        email: "",
        password: "",
    });

    const router = useRouter();

    const currentMode = ref('email')

    const checkValidation = () => {
        if(formValue.value.email == "" ||  formValue.value.password == "") {
            return false;
        }  else {
            return true;
        }
    }

    const handleSubmit = async() => {
        if(checkValidation()) {

            if(currentMode.value == 'phone') {
                const phoneRegex = /^\d{8,15}$/;
                if (!phoneRegex.test(formValue.value.email)) {
                    warning("Incorrect phone number format")
                    return;
                }
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (formValue.value.email && !emailRegex.test(formValue.value.email)) {
                    warning("Incorrect email format")
                    return;
                }
            }

            let response = await login(formValue.value);
            

            if(response?.data?.ok) {
                LocalStorage.store('token', response.data.token);
                LocalStorage.store('user', response.data.user);
                toastSuccess('Login successful');
                // window.location.href = '/profile';
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
            <h3 class="text-2xl text-slate-700 font-bold text-center">Login</h3>


            <div class="mt-8 flex flex-col gap-5">
                <div class="flex flex-col gap-1" >
                    <label for="" class="text-base text-slate-600 font-bold"> {{ currentMode == 'email' ? 'Email' : 'Phone' }} </label>
                    <input v-model="formValue.email" type="text" class="bg-slate-50 border border-slate-600 rounded-full text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]" >
                </div>
                
                <div class="flex flex-col gap-1">
                    <label for="" class="text-base text-slate-600 font-bold">Password</label>
                    <input v-model="formValue.password" type="password" class="bg-slate-50 border border-slate-600 rounded-full text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]" >
                </div>
                <div class="flex flex-col gap-4">
                    <span v-if="currentMode == 'email'" @click="currentMode = 'phone'" class="text-base text-rose-500 cursor-pointer text-center underline">Login using phone</span>
                    <span v-if="currentMode == 'phone'" @click="currentMode = 'email'" class="text-base text-rose-500 cursor-pointer text-center underline">Login using email</span>

                    <p class="text-center">Don't have an account? <RouterLink to="/register" class="text-[#1162ad] font-bold">Register</RouterLink></p>
                    <button @click="handleSubmit" class="bg-[#1162ad] text-center text-lg font-bold text-white w-full rounded-full py-3">Login</button>
                </div>
            </div>
        </div>
    </Container>
</template>