<script setup>
    import { ChevronRight } from 'lucide-vue-next';
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const navigate = (slug, go) => {
        if(go) {
            router.push(`/solar/${slug}`);
        }
    }

    const props = defineProps({
        solar_category_lists: {
            type: Array
        }
    })

</script>
<template>
    <ul class="absolute top-[35px] bg-sky-200  backdrop-blur-3xl shadow-lg p-4 rounded-lg -ml-10 min-w-[270px] flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-10">
        <li @click="navigate(item.slug, !item.children.length > 0)" v-for="(item, index) in solar_category_lists" :key="index" class="group/submenu relative font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white flex justify-between items-center">
            {{item.name}}
            <ChevronRight v-if="item.children.length > 0" :size="19" />
            <ul v-if="item.children.length > 0" class="absolute top-0 left-full bg-sky-200 border border-sky-400 backdrop-blur-3xl shadow-lg p-4 rounded-lg min-w-[270px] flex flex-col gap-1 opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:translate-y-0 z-10">
                <li @click="navigate(child.slug, true)" v-for="(child, i) in item.children" :key="i" class="font-semibold text-[17px] px-3 py-[6px] rounded text-slate-700 hover:bg-slate-400 hover:text-white">{{child.name}}</li>
            </ul>
        </li>
    </ul>
</template>