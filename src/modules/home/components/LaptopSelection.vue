<script setup>
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import { ref } from 'vue';

const currentSelect = ref('dell')

const dellLaptops = [
        {
            img: require('@/assets/images/laptop/1.png'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Dell"
        },
        {
            img: require('@/assets/images/laptop/2.png'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Dell"
        },
        {
            img: require('@/assets/images/laptop/3.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Dell"
        },
        {
            img: require('@/assets/images/laptop/4.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Dell"
        },
        {
            img: require('@/assets/images/laptop/5.png'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Dell"
        },
    ]

const lenovoLaptops = [
        {
            img: require('@/assets/images/laptop/6.png'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Lenovo"
        },
        {
            img: require('@/assets/images/laptop/7.png'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Lenovo"
        },
        {
            img: require('@/assets/images/laptop/8.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Lenovo"
        },
        {
            img: require('@/assets/images/laptop/2.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Lenovo"
        },
        {
            img: require('@/assets/images/laptop/1.png'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Lenovo"
        },
    ]

const acerLaptops = [
        {
            img: require('@/assets/images/laptop/7.png'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Acer"
        },
        {
            img: require('@/assets/images/laptop/2.png'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Acer"
        },
        {
            img: require('@/assets/images/laptop/3.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Acer"
        },
        {
            img: require('@/assets/images/laptop/4.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Acer"
        },
        {
            img: require('@/assets/images/laptop/5.png'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Acer"
        },
    ]



</script>

<template>
    <section class="mt-10 py-10">
        <Container>
            <SectionHeader title="Laptop Selection" link_name="View All" link="/" description="All available laptops" />

            <div class="flex justify-center items-center gap-5 mt-8">
                <button @click="currentSelect = 'dell'" :class="`border ${currentSelect === 'dell' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Dell</button>
                <button @click="currentSelect = 'lenovo'" :class="`border ${currentSelect === 'lenovo' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Lenove</button>
                <button @click="currentSelect = 'acer'" :class="`border ${currentSelect === 'acer' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Acer</button>
               
            </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in dellLaptops" :key="index" v-if="currentSelect === 'dell'">
                       <ProductCardTemp :product="product" />
                    </div>

                    <div class="col-span-1" v-for="(product, index) in lenovoLaptops" :key="index" v-if="currentSelect === 'lenovo'">
                        <ProductCardTemp :product="product" />
                     </div>

                     <div class="col-span-1" v-for="(product, index) in acerLaptops" :key="index" v-if="currentSelect === 'acer'">
                        <ProductCardTemp :product="product" />
                     </div>

                </div>
            </div>
        </Container>
    </section>

</template>