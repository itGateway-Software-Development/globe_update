<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import getProducts from '../composables/getProducts';
    import { computed, onMounted, ref, watch } from 'vue';
    import { slugToCap } from '@/utils/textFormat';
    import { ChevronRight, ChevronsLeftRightEllipsis, TextSearch } from 'lucide-vue-next';
    import Divider from '@/components/common/Divider.vue';
    import ProductCard from '@/components/common/ProductCard.vue';
    import { initFlowbite } from 'flowbite';

    const route = useRoute();
    const router = useRouter();
    const slug = ref(route.params.slug);
    const category_name = ref('');

    const {products, brands, attributes, errors, load} = getProducts();

    // Watch for changes in the route and update slug
    watch(() => route.params.slug, async (newSlug) => {
        slug.value = newSlug;
        await load(newSlug);
        category_name.value = ref(slugToCap(slug.value))
        attributes.value.forEach(attr => {
            if (!filterData.value.attributes[attr.name]) {
                filterData.value.attributes[attr.name] = [];
            }
        });

        filterData.value.price = [0, 5000000];

        window.scrollTo(0, 0);

    }, { immediate: true }); // Run immediately on mount

    const goDetail = (product_slug) => {
        router.push('/product-detail/'+product_slug)
    }

    const filterData = ref({
        brand_slugs: [],
        price: [0, 5000000],
        attributes: {}
    })

    const filteredProducts = computed(() => {
        return products.value.filter(product => {
            const matchesBrand = filterData.value.brand_slugs.length === 0 
                || filterData.value.brand_slugs.includes(product.brand_slug);

            const isPriceInRangeForVariation = (priceRangeStr) => {
                const [min, max] = priceRangeStr.split('-').map(p => parseInt(p));
                const [filterMin, filterMax] = filterData.value.price.map(p => parseInt(p));
                return max >= filterMin && min <= filterMax;
            };

            const isPriceInRange = (price_mmk, price_us) => {
                const isPriceInRange = (price) => parseInt(price) >= parseInt(filterData.value.price[0]) && parseInt(price) <= parseInt(filterData.value.price[1]);
                
                // Check price for MMK and USD
                const priceMatchesMMK = price_us == 0 && isPriceInRange(price_mmk);
                const priceMatchesUSD = price_us > 0 && isPriceInRange(price_us);

                return priceMatchesMMK || priceMatchesUSD;  // return true if either MMK or USD is within the range
            }

            const matchesPrice = product.price_range ? isPriceInRangeForVariation(product.price_range) : isPriceInRange(product.price_mmk, product.price_us);

            const matchesAttributes = () => {
            const selectedAttrs = filterData.value.attributes;

            
            // If no attributes selected, it's a match
            const isAnyAttrSelected = Object.values(selectedAttrs).some(arr => arr.length > 0);
            if (!isAnyAttrSelected) return true;

            // Check if any variation matches all selected attributes
            return product.variations?.some(variation => {
                return Object.entries(selectedAttrs).every(([attrName, selectedValues]) => {
                    if (selectedValues.length === 0) return true;
                    const variationAttrValue = variation.attributes?.[attrName];
                    return selectedValues.includes(variationAttrValue);
                });
            });
        };

        return matchesBrand && matchesPrice && matchesAttributes();
        });
    })

    onMounted(() => {
        initFlowbite();
    })

</script>

<template>
    <Container className="py-10">
        <div class="grid grid-cols-5 gap-16">
            <div class="col-span-1 sticky top-[160px] h-[calc(100vh-160px)] overflow-y-auto hidden lg:block">
                <div class="flex flex-col gap-7">
                    <!-- breadcrumb -->
                    <div class="flex gap-2 items-center">
                        <h3 class="text-slate-500">Home</h3>
                        <ChevronRight :size="20" class="text-slate-500" />
                        <h3 class="text-slate-500">{{category_name}}</h3>
                    </div>
            
                    <!-- Brands -->
                    <div>
                        <h3 class="text-xl text-slate-700 font-bold">Brands</h3>
                        <Divider />
                        <div class="mt-3 ps-2">
                            <div class="flex items-center" v-for="(brand, index) in brands" :key="index">
                                <input :id="`default-checkbox${index}`" type="checkbox" :value="brand.slug" v-model="filterData.brand_slugs" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded-sm focus:ring-transparent ">
                                <label :for="`default-checkbox${index}`" class="ms-2 text-base font-medium text-slate-600 ">{{brand.name}}</label>
                            </div>
                        </div>
                    </div>
            
                    <!-- Attributes -->
                    <div v-for="(attribute, index) in attributes" :key="index">
                        <h3 class="text-xl text-slate-700 font-bold">{{attribute.name}}</h3>
                        <Divider />
                        <div class="mt-3 ps-2">
                            <div class="flex items-center" v-for="(attr_value, i) in attribute.attribute_values" :key="i">
                                <input 
                                    :id="`attr-checkbox-${attr_value.id}-${i}`"
                                    type="checkbox"
                                    :value="attr_value.name"
                                    v-model="filterData.attributes[attribute.name]"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded-sm focus:ring-transparent"
                                />
                                <label :for="`attr-checkbox-${attr_value.id}-${i}`" class="ms-2 text-base font-medium text-slate-600 ">{{attr_value.name}}</label>
                            </div>
                        </div>
                    </div>
            
                    <!-- Price -->
                    <div class="pb-10">
                        <h3 class="text-xl text-slate-700 font-bold">Price</h3>
                        <Divider />
                        <div class="mt-3 px-0 xl:px-5">
                            <div class="slider-demo-block px-1 xl:px-0">
                                <el-slider v-model="filterData.price" range :max="5000000"  />
                            </div>
            
                            <div class="mt-2 flex flex-col 2xl:flex-row items-center gap-1">
                                <input type="number" v-model="filterData.price[0]" class="border border-slate-400 rounded-lg px-1 py-[6px] w-full text-slate-700 placeholder:italic placeholder:text-sm focus:outline-none" placeholder="Min">
                                <span><ChevronsLeftRightEllipsis :size="20" /></span>
                                <input type="number" v-model="filterData.price[1]" class="border border-slate-400 rounded-lg px-1 py-[6px] w-full text-slate-700 placeholder:italic placeholder:text-sm focus:outline-none" placeholder="Max">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div class=" col-span-5 lg:col-span-4">
                <div class="lg:hidden">
                    <button
                        type="button"
                        class="flex items-center gap-2 mb-5"
                        data-drawer-target="product-filter-drawer" 
                        data-drawer-show="product-filter-drawer" 
                        data-drawer-placement="left" 
                        aria-controls="product-filter-drawer"
                    >
                        <TextSearch :size="20" class="text-slate-600" />
                        Filter
                    </button>
                </div>
            

                <div id="product-filter-drawer" class="fixed top-0 left-0 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80  z-[999]" tabindex="-1" aria-labelledby="drawer-left-label">
                    <h5 id="drawer-left-label" class="inline-flex items-center gap-5 mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
                        <TextSearch :size="20" class="text-slate-600" />
                        Filter
                    </h5>
                    <button type="button" data-drawer-hide="product-filter-drawer" aria-controls="product-filter-drawer" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center " >
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close menu</span>
                    </button>

                   <div class="flex flex-col gap-7">
                        <!-- breadcrumb -->
                        <div class="flex gap-2 items-center">
                            <h3 class="text-slate-500">Home</h3>
                            <ChevronRight :size="20" class="text-slate-500" />
                            <h3 class="text-slate-500">{{category_name}}</h3>
                        </div>
                
                        <!-- Brands -->
                        <div>
                            <h3 class="text-xl text-slate-700 font-bold">Brands</h3>
                            <Divider />
                            <div class="mt-3 ps-2">
                                <div class="flex items-center" v-for="(brand, index) in brands" :key="index">
                                    <input :id="`default-checkbox${index}`" type="checkbox" :value="brand.slug" v-model="filterData.brand_slugs" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded-sm focus:ring-transparent ">
                                    <label :for="`default-checkbox${index}`" class="ms-2 text-base font-medium text-slate-600 ">{{brand.name}}</label>
                                </div>
                            </div>
                        </div>
                
                        <!-- Attributes -->
                        <div v-for="(attribute, index) in attributes" :key="index">
                            <h3 class="text-xl text-slate-700 font-bold">{{attribute.name}}</h3>
                            <Divider />
                            <div class="mt-3 ps-2">
                                <div class="flex items-center" v-for="(attr_value, i) in attribute.attribute_values" :key="i">
                                    <input 
                                        :id="`attr-checkbox-${attr_value.id}-${i}`"
                                        type="checkbox"
                                        :value="attr_value.name"
                                        v-model="filterData.attributes[attribute.name]"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 rounded-sm focus:ring-transparent"
                                    />
                                    <label :for="`attr-checkbox-${attr_value.id}-${i}`" class="ms-2 text-base font-medium text-slate-600 ">{{attr_value.name}}</label>
                                </div>
                            </div>
                        </div>
                
                        <!-- Price -->
                        <div class="pb-10">
                            <h3 class="text-xl text-slate-700 font-bold">Price</h3>
                            <Divider />
                            <div class="mt-3 px-0 xl:px-5">
                                <div class="slider-demo-block px-1 xl:px-0">
                                    <el-slider v-model="filterData.price" range :max="5000000"  />
                                </div>
                
                                <div class="mt-2 flex flex-col 2xl:flex-row items-center gap-1">
                                    <input type="number" v-model="filterData.price[0]" class="border border-slate-400 rounded-lg px-1 py-[6px] w-full text-slate-700 placeholder:italic placeholder:text-sm focus:outline-none" placeholder="Min">
                                    <span><ChevronsLeftRightEllipsis :size="20" /></span>
                                    <input type="number" v-model="filterData.price[1]" class="border border-slate-400 rounded-lg px-1 py-[6px] w-full text-slate-700 placeholder:italic placeholder:text-sm focus:outline-none" placeholder="Max">
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5" v-if="filteredProducts.length > 0">
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
</template>