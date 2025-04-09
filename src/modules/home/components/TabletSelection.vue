<script setup>
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import { ref } from 'vue';

const currentSelect = ref('lenovo')

const lenovo = [
        {
            img: require('@/assets/images/tablet/1.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Lenovo"
        },
        {
            img: require('@/assets/images/tablet/2.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Lenovo"
        },
        {
            img: require('@/assets/images/tablet/3.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Lenovo"
        },
        {
            img: require('@/assets/images/tablet/4.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Lenovo"
        },
        {
            img: require('@/assets/images/tablet/5.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Lenovo"
        },
    ]

const samsung = [
        {
            img: require('@/assets/images/tablet/6.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Samsung"
        },
        {
            img: require('@/assets/images/tablet/7.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Samsung"
        },
        {
            img: require('@/assets/images/tablet/5.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Samsung"
        },
        {
            img: require('@/assets/images/tablet/2.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Samsung"
        },
        {
            img: require('@/assets/images/tablet/1.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Samsung"
        },
    ]

const microsoft = [
        {
            img: require('@/assets/images/tablet/3.jpg'),
            title: "Deco Pro Small",
            price: "22,000 MMK",
            category: "Microsoft"
        },
        {
            img: require('@/assets/images/tablet/1.jpg'),
            title: "Deco 03",
            price: "22,000 MMK",
            category: "Microsoft"
        },
        {
            img: require('@/assets/images/tablet/7.jpg'),
            title: "Deco L",
            price: "22,000 MMK",
            category: "Microsoft"
        },
        {
            img: require('@/assets/images/tablet/4.jpg'),
            title: "Star G430",
            price: "22,000 MMK",
            category: "Microsoft"
        },
        {
            img: require('@/assets/images/tablet/5.jpg'),
            title: "Star R430",
            price: "22,000 MMK",
            category: "Microsoft"
        },
    ]


</script>

<template>
    <section class="bg-slate-200 mt-10 py-10">
        <Container>
            <SectionHeader title="Tablet Selection" link_name="View All" link="/" description="All available tablets" />

            <div class="flex justify-center items-center gap-5 mt-8">
                <button @click="currentSelect = 'lenovo'" :class="`border ${currentSelect === 'lenovo' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Lenovo</button>
                <button @click="currentSelect = 'samsung'" :class="`border ${currentSelect === 'samsung' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Samsung</button>
                <button @click="currentSelect = 'microsoft'" :class="`border ${currentSelect === 'microsoft' ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">Microsoft</button>
            </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in lenovo" :key="index" v-if="currentSelect === 'lenovo'">
                       <ProductCardTemp :product="product" />
                    </div>

                    <div class="col-span-1" v-for="(product, index) in samsung" :key="index" v-if="currentSelect === 'samsung'">
                        <ProductCardTemp :product="product" />
                     </div>

                     <div class="col-span-1" v-for="(product, index) in microsoft" :key="index" v-if="currentSelect === 'microsoft'">
                        <ProductCardTemp :product="product" />
                     </div>

                    
                </div>
            </div>
        </Container>
    </section>

</template>