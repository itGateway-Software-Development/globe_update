<script setup>
    import getPromotions from '@/modules/home/composable/getPromotions';
import { onMounted } from 'vue';


    const { promotions, error, load } = getPromotions();

    onMounted(async() => {
        await load()
        window.scrollTo(0,0)
    })
</script>

<template>
    <Container className="py-10 md:pt-24" >
        <SectionHeader title="Promotion"  />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14 mt-8" v-if="promotions.length > 0">
            <div class="col-span-1 overflow-hidden rounded-lg" v-for="(item, index) in promotions" :key="index">
                <RouterLink to="/" class="flex flex-col items-center gap-5"> 
                    <img class="w-full h-[300px] object-cover rounded-lg hover:scale-110 duration-300" :src="item.image" alt="" />
                    <p class="text-center text-slate-700 text-base 2xl:text-lg font-semibold">
                        {{item.description}}
                    </p>
                </RouterLink>
            </div>
        </div>

        <div v-else>
            <h3 class="text-2xl font-bold text-rose-700 text-center mt-20">No Promotion Today</h3>
        </div>
    </Container>
</template>