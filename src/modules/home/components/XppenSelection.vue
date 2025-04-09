<script setup>
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import { ref } from 'vue';

const currentSelect = ref('drawing_tablets')

const drawingTables = [
        {
            img: require('@/assets/images/xppen/1.png'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Drawing Tablet"
        },
        {
            img: require('@/assets/images/xppen/2.png'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Drawing Tablet"
        },
        {
            img: require('@/assets/images/xppen/3.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Drawing Tablet"
        },
        {
            img: require('@/assets/images/xppen/4.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Drawing Tablet"
        },
        {
            img: require('@/assets/images/xppen/5.png'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Drawing Tablet"
        },
    ]

const drawingDisplays = [
        {
            img: require('@/assets/images/xppen/5.png'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
        {
            img: require('@/assets/images/xppen/4.png'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
        {
            img: require('@/assets/images/xppen/3.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
        {
            img: require('@/assets/images/xppen/2.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
        {
            img: require('@/assets/images/xppen/1.png'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
    ]

const accessories = [
        {
            img: require('@/assets/images/xppen/1.png'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Accessory"
        },
        {
            img: require('@/assets/images/xppen/2.png'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Accessory"
        },
        {
            img: require('@/assets/images/xppen/3.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Accessory"
        },
        {
            img: require('@/assets/images/xppen/4.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Accessory"
        },
        {
            img: require('@/assets/images/xppen/5.png'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Accessory"
        },
    ]

const androidTablets = [
        {
            img: require('@/assets/images/xppen/5.png'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
        {
            img: require('@/assets/images/xppen/4.png'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
        {
            img: require('@/assets/images/xppen/3.png'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
        {
            img: require('@/assets/images/xppen/2.png'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
        {
            img: require('@/assets/images/xppen/1.png'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Drawing Display"
        },
    ]


</script>

<template>
    <section class="bg-slate-200 mt-20 py-20">
        <Container>
            <SectionHeader title="XP Pen Selection" link_name="View All" link="/" description="All available laptops" />

            <div class="flex justify-center items-center gap-5 mt-8">
                <button @click="currentSelect = 'drawing_tablets'" :class="`border ${currentSelect === 'drawing_tablets' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Drawing Tablets</button>
                <button @click="currentSelect = 'drawing_display'" :class="`border ${currentSelect === 'drawing_display' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Drawing Display</button>
                <button @click="currentSelect = 'accessories'" :class="`border ${currentSelect === 'accessories' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Accessories</button>
                <button @click="currentSelect = 'android_tablet'" :class="`border ${currentSelect === 'android_tablet' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Android Tablet</button>
            </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in drawingTables" :key="index" v-if="currentSelect === 'drawing_tablets'">
                       <ProductCardTemp :product="product" />
                    </div>

                    <div class="col-span-1" v-for="(product, index) in drawingDisplays" :key="index" v-if="currentSelect === 'drawing_display'">
                        <ProductCardTemp :product="product" />
                     </div>

                     <div class="col-span-1" v-for="(product, index) in accessories" :key="index" v-if="currentSelect === 'accessories'">
                        <ProductCardTemp :product="product" />
                     </div>

                     <div class="col-span-1" v-for="(product, index) in androidTablets" :key="index" v-if="currentSelect === 'android_tablet'">
                        <ProductCardTemp :product="product" />
                     </div>
                </div>
            </div>
        </Container>
    </section>

</template>