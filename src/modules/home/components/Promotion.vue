<script setup>
    import { onMounted } from 'vue';
    import getPromotions from '../composable/getPromotions';


    const { promotions, error, load } = getPromotions();

    onMounted(async() => {
        await load(3)
    })
</script>

<template>
    <Container className="pt-10 md:pt-24" v-if="promotions.length > 0">
        <SectionHeader title="Promotion" link_name="View All" link="/promotions" description="Here are top promotions for you" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-8">
            <div class="col-span-1 overflow-hidden rounded-lg" v-for="(item, index) in promotions" :key="index">
                <RouterLink to="/" class="flex flex-col items-center gap-5"> 
                    <img class="w-full rounded-lg shadow-lg hover:scale-110 duration-300" :src="item.image" alt="" />
                    <p class="text-center text-slate-700 text-base 2xl:text-lg font-semibold">
                        {{item.description}}
                    </p>
                </RouterLink>
            </div>
        </div>
    </Container>
</template>