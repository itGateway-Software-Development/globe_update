<script setup>
    const props = defineProps({
        user: Object,
    })
</script>

<template>
    <div class="flex flex-col gap-4">
        <input 
            type="email" 
            class="bg-slate-100 border border-slate-300 rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-base px-5 py-[10px]" 
            :value="user?.email"
            readonly
        >

        <input 
            type="text" 
            class="bg-white border border-slate-300 rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]" 
            placeholder="Enter Full Name"
        >

        <div class="flex items-center ">
            <div class="bg-slate-100 border border-slate-300 rounded-s-lg text-slate-700 focus:outline-none placeholder:italic placeholder:text-base px-5 py-[10px] font-bold">
                +959
            </div>
            <input 
                type="number" 
                min="0"
                class="bg-white border border-slate-300 rounded-r-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]" 
                placeholder="Enter Phone Number"
            >
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            <input 
                type="text" 
                class="col-span-1 bg-white border border-slate-300 rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]" 
                placeholder="City"
            >
            <input 
                type="text" 
                class="col-span-1 bg-white border border-slate-300 rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]" 
                placeholder="State"
            >
            <input 
                type="text" 
                class="col-span-1 bg-white border border-slate-300 rounded-lg text-slate-700 w-full focus:outline-none placeholder:italic placeholder:text-sm placeholder:text-slate-500 px-5 py-[10px]" 
                placeholder="Zip Code (optional)"
            >
        </div>
        
        <textarea name="" class="border border-slate-300 bg-white rounded-lg bg-transparent placeholder:text-sm placeholder:italic placeholder:text-slate-500 w-full" placeholder="Enter your address" id=""></textarea>
    </div>
</template>