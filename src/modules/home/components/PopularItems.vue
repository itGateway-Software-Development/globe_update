<script setup>
import getPopularProducts from '../composable/getPopularProducts';

    const {products, error, load} = getPopularProducts();
    load();

    const bgColors = ["#ebe2e1", "#807a79", "#949191", "#d5e0f2", "#dfd5f2", "#c8e8e5", "#ccba8f", "#c9a599"]
</script>

<template>
    <Container className="pt-28">
        <SectionHeader title="Popular Items" />

        <div class="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14">
            <div class="col-span-1" v-for="(item, index) in products.slice(0, 6)" :key="index">
                <RouterLink 
                    :to="`/${item.product_type == 'normal' ? 'product-detail': (item.product_type == 'xp_pen' ? 'xp-pen-detail': (item.product_type == 'solar_product' ? 'solar-product-detail': 'chuwi-product-detail'))}/${item.slug}`"
                >
                    <div :style="{ backgroundColor: bgColors[index] }" class="w-full h-[120px] xl:h-[200px] group flex items-center justify-center rounded-lg  shadow overflow-hidden">
                        <img class="group-hover:scale-110 duration-300 w-full h-full" :src="item.images[0]?.image_url" alt="">
                    </div>
                    <p class="text-center mt-2 text-base px-2">{{item.name}}</p>
                </RouterLink>
            </div>
        </div>
    </Container>
</template>