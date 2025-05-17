<script setup>
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import getXpPenCategory from '@/composables/getXpPenCategory';
import getProducts from '@/modules/xppen/composables/getProducts';
import { computed, watch } from 'vue';
import { onMounted, ref } from 'vue';
import ProductCard from '@/components/common/ProductCard.vue';
import { useRouter } from 'vue-router';


const currentSelect = ref('')
const router = useRouter();

const {xp_pens_category, error: xpPenErrors, load: xpPenLoad} = getXpPenCategory();
const { xppen_products, error, load: loadProducts } = getProducts();

onMounted(async() => {
    await xpPenLoad();
    if (xp_pens_category.value.length > 0) {
        currentSelect.value = xp_pens_category.value[0].slug;
        await loadProducts(currentSelect.value);
    }
})

// Watch currentSelect and reload products when category changes
watch(currentSelect, async (newCategory) => {
  await loadProducts(newCategory);
});

const goDetail = (slug) => {
        router.push('/xp-pen-detail/'+slug)
    }


</script>

<template>
    <section class="bg-slate-200 mt-20 py-20">
        <Container>
            <SectionHeader title="XP Pen Selection" link_name="View All" :link="`/xp-pen/${currentSelect}`" description="All available laptops" />

            <div class="flex justify-center items-center flex-wrap gap-5 mt-8">
                <button v-for="(category, index) in xp_pens_category" :key="index" @click="currentSelect = category.slug" :class="`border ${currentSelect === category.slug ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">{{category.name}}</button>
            
            </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in xppen_products" :key="index">
                        <ProductCard v-if="index < 6" :item="product" :goDetail="goDetail"/>
                    </div>
                </div>
            </div>
        </Container>
    </section>

</template>