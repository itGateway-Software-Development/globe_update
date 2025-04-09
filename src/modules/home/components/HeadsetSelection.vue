<script setup>
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import { ref } from 'vue';

const currentSelect = ref('headsets')

const headsets = [
        {
            img: require('@/assets/images/headsets/1.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Headsets"
        },
        {
            img: require('@/assets/images/headsets/2.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Headsets"
        },
        {
            img: require('@/assets/images/headsets/3.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Headsets"
        },
        {
            img: require('@/assets/images/headsets/4.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Headsets"
        },
        {
            img: require('@/assets/images/headsets/5.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Headsets"
        },
    ]

const earbuds = [
        {
            img: require('@/assets/images/headsets/6.png'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Earbuds"
        },
        {
            img: require('@/assets/images/headsets/7.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Earbuds"
        },
        {
            img: require('@/assets/images/headsets/8.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Earbuds"
        },
        {
            img: require('@/assets/images/headsets/2.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Earbuds"
        },
        {
            img: require('@/assets/images/headsets/1.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Earbuds"
        },
    ]

const headphones = [
        {
            img: require('@/assets/images/headsets/1.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Headphones"
        },
        {
            img: require('@/assets/images/headsets/2.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Headphones"
        },
        {
            img: require('@/assets/images/headsets/3.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Headphones"
        },
        {
            img: require('@/assets/images/headsets/4.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Headphones"
        },
        {
            img: require('@/assets/images/headsets/5.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Headphones"
        },
    ]




</script>

<template>
    <section class="mt-10 py-10">
        <Container>
            <SectionHeader title="HeadSet Selection" link_name="View All" link="/" description="All available headsets" />

            <div class="flex justify-center items-center gap-5 mt-8">
                <button @click="currentSelect = 'headsets'" :class="`border ${currentSelect === 'headsets' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Headsets</button>
                <button @click="currentSelect = 'ear_buds'" :class="`border ${currentSelect === 'ear_buds' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Earbuds</button>
                <button @click="currentSelect = 'headphones'" :class="`border ${currentSelect === 'headphones' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Headphones</button>
            </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in headsets" :key="index" v-if="currentSelect === 'headsets'">
                       <ProductCardTemp :product="product" />
                    </div>

                    <div class="col-span-1" v-for="(product, index) in earbuds" :key="index" v-if="currentSelect === 'ear_buds'">
                        <ProductCardTemp :product="product" />
                     </div>

                     <div class="col-span-1" v-for="(product, index) in headphones" :key="index" v-if="currentSelect === 'headphones'">
                        <ProductCardTemp :product="product" />
                     </div>
                </div>
            </div>
        </Container>
    </section>

</template>