<script setup>
import ProductCard from '@/components/common/ProductCard.vue';
import { ref } from 'vue';

const currentSelect = ref('keyboard')

const keyboard = [
        {
            img: require('@/assets/images/gadget/1.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Keyboard"
        },
        {
            img: require('@/assets/images/gadget/2.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Keyboard"
        },
        {
            img: require('@/assets/images/gadget/3.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Keyboard"
        },
        {
            img: require('@/assets/images/gadget/4.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Keyboard"
        },
        {
            img: require('@/assets/images/gadget/5.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Keyboard"
        },
    ]

const powerbank = [
        {
            img: require('@/assets/images/gadget/6.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Powerbank"
        },
        {
            img: require('@/assets/images/gadget/7.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Powerbank"
        },
        {
            img: require('@/assets/images/gadget/8.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Powerbank"
        },
        {
            img: require('@/assets/images/gadget/2.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Powerbank"
        },
        {
            img: require('@/assets/images/gadget/1.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Powerbank"
        },
    ]

const webcam = [
        {
            img: require('@/assets/images/gadget/1.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "JBL"
        },
        {
            img: require('@/assets/images/gadget/2.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "JBL"
        },
        {
            img: require('@/assets/images/gadget/3.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "JBL"
        },
        {
            img: require('@/assets/images/gadget/4.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "JBL"
        },
        {
            img: require('@/assets/images/gadget/5.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "JBL"
        },
    ]

</script>

<template>
    <section class="mt-10 py-10">
        <Container>
            <SectionHeader title="Tech Gadgets Selection" link_name="View All" link="/" description="All available tech gadgets" />

            <div class="flex justify-center items-center gap-5 mt-8">
                <button @click="currentSelect = 'keyboard'" :class="`border ${currentSelect === 'keyboard' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Keyboard</button>
                <button @click="currentSelect = 'powerbank'" :class="`border ${currentSelect === 'powerbank' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Powerbank</button>
                <button @click="currentSelect = 'webcam'" :class="`border ${currentSelect === 'webcam' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Webcam</button>
            </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in keyboard" :key="index" v-if="currentSelect === 'keyboard'">
                       <ProductCard :product="product" />
                    </div>

                    <div class="col-span-1" v-for="(product, index) in powerbank" :key="index" v-if="currentSelect === 'powerbank'">
                        <ProductCard :product="product" />
                     </div>

                     <div class="col-span-1" v-for="(product, index) in webcam" :key="index" v-if="currentSelect === 'webcam'">
                        <ProductCard :product="product" />
                     </div>
                </div>
            </div>
        </Container>
    </section>

</template>