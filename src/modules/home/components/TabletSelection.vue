<script setup>
import ProductCard from '@/components/common/ProductCard.vue';
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import getProducts from '@/modules/category/composables/getProducts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    const router = useRouter();

    const {products, brands, attributes, errors, load} = getProducts();
    load('tablets')

    const goDetail = (slug) => {
        router.push('/product-detail/'+slug)
    }
</script>

<template>
    <section class="mt-10 py-10" v-if="products.length > 0">
        <Container>
            <SectionHeader title="Tablet Selection" link_name="View All" link="/category/tablets" description="Top available tablets" />
    
            <div class="mt-10">
                <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 lg:gap-5">
                    <div class="col-span-1" v-for="(product, index) in products.slice(0, 5)" :key="index">
                        <ProductCard :item="product" :goDetail="goDetail"/>
                    </div>

                </div>
            </div>
        </Container>
    </section>

</template>