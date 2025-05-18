<script setup>
import { ArrowUpRight } from 'lucide-vue-next';

    const props = defineProps({
        title: {
            type: String,
            default: "Section Header"
        },
        description: {
            type: String,
            default: ""
        },
        link_name: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        }
    })
</script>
<template>
    <div class="flex flex-col md:flex-row gap-3 md:gap-0 justify-center relative items-center">
        <div class="relative">
            <h2 class="text-3xl text-center font-bold mb-2">{{props.title}}</h2>
            <p class="text-center text-slate-700">{{description}}</p>
        </div>
        <div class="md:absolute top-2 right-0 flex gap-1 me-5 underline underline-offset-4 text-sky-600 font-bold hover:text-slate-700" v-if="link_name">
            <RouterLink class=""  :to="link">{{link_name}}</RouterLink>
            <ArrowUpRight class="" />
        </div>

    </div>
</template>