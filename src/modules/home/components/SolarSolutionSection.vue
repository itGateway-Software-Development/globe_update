<script setup>
import ProductCardTemp from '@/components/common/ProductCardTemp.vue';
import getSolarCategoryList from '@/composables/getSolarCategoryList';
import getProducts from '@/modules/solar/composables/getProducts';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ProductCard from '@/components/common/ProductCard.vue';


    const currentSelect = ref('')
    const router = useRouter();

    const {category_lists: solar_category_lists, errors: solarErrors, load: solarCategoryLoad} = getSolarCategoryList();
    const {products,  attributes, errors, load} = getProducts();

    onMounted(async() => {
      await solarCategoryLoad();

      if (solar_category_lists.value.length > 0) {
            const firstCategory = solar_category_lists.value[0];
            currentSelect.value = firstCategory.children.length > 0
            ? firstCategory.children[0].slug
            : firstCategory.slug;

            await load(currentSelect.value);
        }
    })

    watch(currentSelect, async (newCategory) => {
    await load(newCategory);
    });

    const goDetail = (slug) => {
        router.push('/solar-product-detail/'+slug)
    }
</script>

<template>
    <section class=" mt-10 py-10" v-if="products.length > 0">
        <Container>
            <SectionHeader title="Solar Solution Selection" link_name="View All" :link="`/solar/${currentSelect}`" description="All available solar solutions" />

            <div class="flex justify-center items-center gap-5 mt-8">
                <button
                  v-for="category in solar_category_lists"
                  :key="category.id"
                  @click="currentSelect = category.children.length > 0 ? category.children[0].slug : category.slug"
                  :class="`border ${
                    currentSelect === (category.children.length > 0 ? category.children[0].slug : category.slug)
                      ? 'border-sky-500 bg-sky-500 text-white'
                      : 'border-slate-500'
                  } shadow px-3 py-2 rounded-lg`"
                >
                  {{ category.children.length > 0 ? category.children[0].name : category.name }}
                </button>
              </div>
    
            <div class="mt-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    <div class="col-span-1" v-for="(product, index) in products" :key="index" >
                        <ProductCard v-if="index < 5" :item="product" :goDetail="goDetail"/>
                    </div>


                </div>
            </div>
        </Container>
    </section>

</template>