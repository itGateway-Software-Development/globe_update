<script setup>
import ProductCard from '@/components/common/ProductCard.vue';
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import getProducts from '@/modules/category/composables/getProducts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    const router = useRouter();

    const {products, brands, attributes, errors, load} = getProducts();
    load('speaker')

    const goDetail = (slug) => {
        router.push('/product-detail/'+slug)
    }
</script>

<template>
    <section class="mt-10 py-10" v-if="products.length > 0">
        <Container>
            <SectionHeader title="Speaker Selection" link_name="View All" link="/category/speaker" description="Top available speaker" />
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in products" :key="index">
                        <ProductCard v-if="index < 5" :item="product" :goDetail="goDetail"/>
                    </div>

                </div>
            </div>
        </Container>
    </section>

</template>