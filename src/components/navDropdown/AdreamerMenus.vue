<script setup>
    const props = defineProps({
        category_lists: {
            type: Array
        }
    })
</script>

<template>
    <ul class="absolute top-[35px] bg-sky-200  backdrop-blur-3xl shadow-lg p-4 rounded-lg -ml-10 min-w-[330px] flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
        <RouterLink :to="'/chuwi/' + item.slug" v-for="(item,i) in category_lists" :key="i">
            <li class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white">{{item.name}}</li>
        </RouterLink>
    </ul>
</template>