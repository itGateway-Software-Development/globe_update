<script setup>
    import { Paperclip } from 'lucide-vue-next';
    import { spiral } from 'ldrs'
import { onMounted } from 'vue';

    const props = defineProps({
        formData: Object,
        formError: Object,
        isLoading: Boolean
    })

    const emits = defineEmits(['submitForm'])

    const handleProfileChange = (event) => {
        props.formData.profile_image = event.target.files[0];
    }

    onMounted(() => {
        spiral.register()
    })
</script>

<template>
    <div class="border shadow p-10">
        <div class="flex flex-col gap-4 max-w-[550px] ">
            <div class="relative flex flex-col gap-1">
                <input 
                    type="file" 
                    class="border border-slate-300 rounded-lg w-full py-2  bg-slate-200 z-0"
                    @change="handleProfileChange" 
                >
                <Paperclip class="absolute top-2 left-2 h-6 w-6 text-slate-600 z-10 pointer-events-none" />
            </div>
            <input 
                type="email" 
                :class="`bg-white border ${formError.email ? 'border-red-500' : 'border-slate-300'} rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-base px-5 py-[10px]`" 
                v-model="formData.email"
            >
    
            <input 
                type="text" 
                :class="`bg-white border ${formError.name ? 'border-red-500' : 'border-slate-300'} rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]`" 
                placeholder="Enter Full Name"
                v-model="formData.name"
            >
    
            <div class="flex items-center ">
                <input 
                    type="number" 
                    min="0"
                    :class="`bg-white border ${formError.phone ? 'border-red-500' : 'border-slate-300'} rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]`" 
                    placeholder="Enter Phone Number"
                    v-model="formData.phone"
                >
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
                <input 
                    type="text" 
                    :class="`col-span-1 bg-white border ${formError.city ? 'border-red-500' : 'border-slate-300'} rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]`" 
                    placeholder="City"
                    v-model="formData.city"
                >
                <input 
                    type="text" 
                    :class="`col-span-1 bg-white border ${formError.state ? 'border-red-500' : 'border-slate-300'} rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]`" 
                    placeholder="State"
                    v-model="formData.state"
                >
                <input 
                    type="text" 
                    :class="`col-span-1 bg-white border ${formError.zip_code ? 'border-red-500' : 'border-slate-300'} rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]`" 
                    placeholder="Zip Code (optional)"
                    v-model="formData.zip_code"
                >
            </div>
            
            <textarea 
                name="" 
                :class="`border ${formError.address ? 'border-red-500' : 'border-slate-300'} bg-white rounded-lg bg-transparent placeholder:text-sm placeholder:italic placeholder:text-slate-500 w-full`" placeholder="Enter your address" 
                v-model="formData.address"
                id=""
            ></textarea>
    
            <button v-if="!isLoading" @click="emits('submitForm')" class="border border-[#1162ad] bg-[#1162ad] hover:bg-transparent hover:text-slate-700 text-center text-lg font-bold text-white w-full rounded-full py-2 flex items-center justify-center gap-4">
                Update Profile
            </button>
            
            <button v-else class="border border-[#1162adcb] bg-[#1162adcb] text-center text-lg font-bold text-white w-full rounded-full py-2 flex items-center justify-center gap-4">
                Updating
                <l-spiral
                    size="25"
                    speed="0.9" 
                    color="white" 
                ></l-spiral>
            </button>
        </div>
    </div>
    
</template>