<script setup>
import ProductCard from '@/components/common/ProductCard.vue';
import { ref } from 'vue';

const currentSelect = ref('marshall')

const marshall = [
        {
            img: require('@/assets/images/speakers/1.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Marshell"
        },
        {
            img: require('@/assets/images/speakers/2.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Marshell"
        },
        {
            img: require('@/assets/images/speakers/3.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Marshell"
        },
        {
            img: require('@/assets/images/speakers/4.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Marshell"
        },
        {
            img: require('@/assets/images/speakers/5.jpeg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Marshell"
        },
    ]

const harman = [
        {
            img: require('@/assets/images/speakers/6.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Harman"
        },
        {
            img: require('@/assets/images/speakers/7.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Harman"
        },
        {
            img: require('@/assets/images/speakers/8.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Harman"
        },
        {
            img: require('@/assets/images/speakers/2.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Harman"
        },
        {
            img: require('@/assets/images/speakers/1.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Harman"
        },
    ]

const jbl = [
        {
            img: require('@/assets/images/speakers/1.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "JBL"
        },
        {
            img: require('@/assets/images/speakers/2.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "JBL"
        },
        {
            img: require('@/assets/images/speakers/3.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "JBL"
        },
        {
            img: require('@/assets/images/speakers/4.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "JBL"
        },
        {
            img: require('@/assets/images/speakers/5.jpeg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "JBL"
        },
    ]




</script>

<template>
    <section class="bg-slate-200 mt-10 py-10">
        <Container>
            <SectionHeader title="Speaker Selection" link_name="View All" link="/" description="All available speakers" />

            <div class="flex justify-center items-center gap-5 mt-8">
                <button @click="currentSelect = 'marshall'" :class="`border ${currentSelect === 'marshall' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Marshall</button>
                <button @click="currentSelect = 'harman'" :class="`border ${currentSelect === 'harman' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Harman</button>
                <button @click="currentSelect = 'jbl'" :class="`border ${currentSelect === 'jbl' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">JBL</button>
            </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in marshall" :key="index" v-if="currentSelect === 'marshall'">
                       <ProductCard :product="product" />
                    </div>

                    <div class="col-span-1" v-for="(product, index) in harman" :key="index" v-if="currentSelect === 'harman'">
                        <ProductCard :product="product" />
                     </div>

                     <div class="col-span-1" v-for="(product, index) in jbl" :key="index" v-if="currentSelect === 'jbl'">
                        <ProductCard :product="product" />
                     </div>
                </div>
            </div>
        </Container>
    </section>

</template>