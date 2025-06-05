<script setup>
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import getAdreamerCategoryList from '@/composables/getAdreamerCategoryList';
import getProducts from '@/modules/adreamer/composables/getProducts';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ProductCard from '@/components/common/ProductCard.vue';


    const currentSelect = ref('')
    const router = useRouter();

    const {category_lists: adreamer_category_lists, errors: adreamerErrors, load: adreamerCategoryLoad} = getAdreamerCategoryList();

    const {products,  attributes, errors, load} = getProducts();

    onMounted(async() => {
      await adreamerCategoryLoad();

      if (adreamer_category_lists.value.length > 0) {
        currentSelect.value = adreamer_category_lists.value[0].slug;
        await load(currentSelect.value);
        }
    })

    watch(currentSelect, async (newCategory) => {
        await load(newCategory);
    });

    const goDetail = (slug) => {
        router.push('/chuwi-product-detail/'+slug)
    }
</script>

<template>
    <section class="bg-slate-200 mt-10 py-10" v-if="products.length > 0">
        <Container>
            <SectionHeader title="CHUWI Solution Selection" link_name="View All" :link="`/chuwi/${currentSelect}`" description="Top available products" />

            <div class="flex justify-center items-center gap-5 mt-8">
                <div class="flex justify-center items-center flex-wrap gap-5 mt-8">
                    <button v-for="(category, index) in adreamer_category_lists" :key="index" @click="currentSelect = category.slug" :class="`border ${currentSelect === category.slug ? 'border-sky-500 bg-sky-500 text-white' : 'border-slate-500'} shadow px-3 py-2 rounded-lg`">{{category.name}}</button>
                
                </div>
              </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 lg:gap-5">
                    <div class="col-span-1" v-for="(product, index) in products" :key="index" >
                        <ProductCard v-if="index < 5" :item="product" :goDetail="goDetail"/>
                    </div>


                </div>
            </div>
        </Container>
    </section>

</template>