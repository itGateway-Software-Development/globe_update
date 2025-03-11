<script setup>
import { ChevronRight } from 'lucide-vue-next';


</script>
<template>
    <ul class="absolute top-[35px] bg-[#fff]/30 border border-t-default-400 backdrop-blur-3xl shadow-lg p-4 rounded-lg -ml-10 min-w-[270px] flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
        <li class="group/submenu relative font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white flex justify-between items-center">
            Power Master
            <ChevronRight :size="19" />
            <ul class="absolute top-0 left-full bg-[#fff]/80 border border-t-default-400 backdrop-blur-3xl shadow-lg p-4 rounded-lg min-w-[270px] flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-y-0 z-10">
                <li class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white">Solar</li>
                <li class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white">Inverter</li>
            </ul>
        </li>
        <li class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white">Sunboost</li>
        <li class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white">JA</li>
        <li class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white">Solar Solutions</li>
        <li class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white">Power Station</li>
    </ul>
</template>