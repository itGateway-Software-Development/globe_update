<script setup>
    const props = defineProps({
        user: Object,
        formData: Object,
        formError: Object
    })
</script>

<template>
    <div class="flex flex-col gap-4">
        <input 
            type="email" 
            :class="`${user ? 'bg-slate-100' : 'bg-white'} border border-slate-300 rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-slate-500 placeholder:text-base px-5 py-[10px]`" 
            v-model="formData.email"
            placeholder="Enter Email (optional)"
            :readonly="user?.email ? true : false"
        >

        <input 
            type="text" 
            :class="`bg-white border ${formError.name ? 'border-red-500' : 'border-slate-300'} rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]`" 
            placeholder="Enter Full Name"
            v-model="formData.name"
        >

        <div class="flex items-center ">
            <div class="bg-slate-100 border border-slate-300 rounded-s-lg text-slate-700 focus:outline-none placeholder:italic placeholder:text-base px-5 py-[10px] font-bold">
                +959
            </div>
            <input 
                type="number" 
                min="0"
                :class="`bg-white border ${formError.phone ? 'border-red-500' : 'border-slate-300'} rounded-r-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]`" 
                placeholder="Enter Phone Number"
                v-model="formData.phone"
            >
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
           
        </div>
        
        <textarea 
            name="" 
            :class="`border ${formError.address ? 'border-red-500' : 'border-slate-300'} bg-white rounded-lg bg-transparent placeholder:text-sm placeholder:italic placeholder:text-slate-500 w-full`" placeholder="Enter your address" 
            v-model="formData.address"
            id=""
        ></textarea>
    </div>
</template>