<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import getSeries from '../composables/getSeries';
    import { onMounted, computed, ref, watch } from 'vue';
    import getProducts from '../composables/getProducts';
    import { Atom, ChevronRight, ChevronsLeftRightEllipsis } from 'lucide-vue-next';
    import Divider from '@/components/common/Divider.vue';
    import { slugToCap } from '@/utils/textFormat';
    import ProductCard from '@/components/common/ProductCard.vue';

    const route = useRoute();
    const router = useRouter();
    const slug = ref(route.params.slug);
    const category_name = ref('');

    const { xppen_series, error: series_error, load: loadSeries } = getSeries();
    const { xppen_products, error, load: loadProducts } = getProducts();

    // Watch for changes in the route and update slug
    watch(() => route.params.slug, async (newSlug) => {
        slug.value = newSlug;
        await loadProducts(newSlug);
        category_name.value = ref(slugToCap(slug.value))
    }, { immediate: true }); // Run immediately on mount

   
    onMounted(async () => {
        window.scrollTo(0, 0);
        await loadSeries();
    });

    const filterData = ref({
        series_slugs: [],
        price: [0,2000000]
    })


    const apps_images = [
        require('@/assets/images/xppen/compatability/1.png'),
        require('@/assets/images/xppen/compatability/2.png'),
        require('@/assets/images/xppen/compatability/3.png'),
        require('@/assets/images/xppen/compatability/4.png'),
        require('@/assets/images/xppen/compatability/5.png'),
        require('@/assets/images/xppen/compatability/6.png'),
        require('@/assets/images/xppen/compatability/7.png'),
        require('@/assets/images/xppen/compatability/8.png'),
        require('@/assets/images/xppen/compatability/9.png'),
    ]

    const filteredProducts = computed(() => {
        return xppen_products.value.filter(product => {
            if (filterData.value.series_slugs.length > 0) {

                return filterData.value.series_slugs.includes(product.series_slug)
            } else {
                const isPriceInRange = (price) => parseInt(price) >= parseInt(filterData.value.price[0]) && parseInt(price) <= parseInt(filterData.value.price[1]);
                
                // Check price for MMK and USD
                const priceMatchesMMK = product.price_us == 0 && isPriceInRange(product.price_mmk);
                const priceMatchesUSD = product.price_us > 0 && isPriceInRange(product.price_us);

                return priceMatchesMMK || priceMatchesUSD;  // return true if either MMK or USD is within the range
            }
        })
    })

    const goDetail = (slug) => {
        router.push('/xp-pen-detail/'+slug)
    }

</script>


<template>
    <section>
        <div>
            <img class="mt-2" src="@/assets/images/xppen/banner.png" alt="">
        </div>
        <Container className="py-10">
            <div class="grid grid-cols-5 gap-16">
                <div class="col-span-1 ">
                    <div class="flex flex-col gap-10 sticky top-[160px] h-[calc(100vh-40px)] overflow-y-auto">
                        <div class="flex gap-2 items-center">
                            <h3 class="text-slate-500">XP Pen</h3>
                            <ChevronRight :size="20" class="text-slate-500" />
                            <h3 class="text-slate-500">{{category_name}}</h3>
                        </div>
    
                        <div>
                            <h3 class="text-xl text-slate-700 font-bold">Series</h3>
                            <Divider />
                            <div class="mt-3 ps-2 h-[200px] overflow-y-scroll">
                                <div class="flex items-center mb-1" v-for="(series, index) in xppen_series" :key="index">
                                    <input :id="`default-checkbox${index}`" type="checkbox" :value="series.slug" v-model="filterData.series_slugs" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded-sm focus:ring-transparent ">
                                    <label :for="`default-checkbox${index}`" class="ms-2 text-base font-medium text-slate-600 ">{{series.name}}</label>
                                </div>
                            </div>
                        </div>
    
                        <div>
                            <h3 class="text-xl text-slate-700 font-bold">Price</h3>
                            <Divider />
                            <div class="mt-3 px-5">
                                <div class="slider-demo-block">
                                    <el-slider v-model="filterData.price" range :max="2000000"  />
                                </div>
    
                                <div class="mt-2 flex items-center gap-1">
                                    <input type="number" v-model="filterData.price[0]" class="border border-slate-400 rounded-lg px-2 py-[6px] w-full text-slate-700 placeholder:italic placeholder:text-sm focus:outline-none" placeholder="Min">
                                    <span><ChevronsLeftRightEllipsis :size="20" /></span>
                                    <input type="number" v-model="filterData.price[1]" class="border border-slate-400 rounded-lg px-2 py-[6px] w-full text-slate-700 placeholder:italic placeholder:text-sm focus:outline-none" placeholder="Max">
                                </div>
                            </div>
                        </div>
    
                        <div>
                            <h3 class="text-xl text-slate-700 font-bold flex items-center gap-3"><Atom />Compatibility App</h3>
                            <Divider />
                            <div class="mt-3 ps-2 flex items-center gap-2 flex-wrap">
                               <img class="w-[45px]" v-for="(image, i) in apps_images" :key="i" :src="image" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-4">
                    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5" v-if="filteredProducts.length > 0">
                        <div class="col-span-1" v-for="(item, index) in filteredProducts" :key="index">
                           <ProductCard :item="item" :goDetail="goDetail"/>
                           
                        </div>
                    </div>

                    <div v-else class="flex flex-col items-center justify-center gap-8 w-full mt-10">
                        <img class="w-[400px]" src="@/assets/images/nodata.png" alt="">
                        <h3 class="text-2xl text-slate-600">No Data Found</h3>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>