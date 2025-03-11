<script setup>
import { ExternalLink } from 'lucide-vue-next';


    const navigate = (route) => {
        window.open(route, "_blank");
    }
</script>

<template>
    <ul class="absolute top-[35px] bg-[#fff]/30 border border-t-default-400 backdrop-blur-3xl shadow-lg p-4 rounded-lg -ml-10 min-w-[300px] flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
        <li @click="navigate('https://greenitmm.com/')" class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white flex justify-between items-center">GreenIT Myanmar <ExternalLink :size="19" /></li>
        <li @click="navigate('https://www.greenit-sg.com/')" class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white flex justify-between items-center">GreenIT Singapore <ExternalLink :size="19" /></li>
    </ul>
</template>