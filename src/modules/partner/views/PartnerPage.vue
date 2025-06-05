<script setup>
import { Earth } from 'lucide-vue-next';
import getPartners from '../composables/getPartners';
import { onMounted } from 'vue';

    const {partners, partner_heading, error, load} = getPartners();
    load();

    onMounted(() => {
        window.scrollTo(0,0)
    })
</script>

<template>
    <div>
        <img class="w-full h-auto xl:h-[300px] object-cover object-top brightness-75" src="@/assets/images/partner_banner.jpg" alt="">
    </div>
    <Container>
        <div class="px-10 lg:px-[100px] xl:px-[150px] 2xl:px-[300px] mb-10">
            <SectionHeader 
            class="mt-10 mb-7" 
            :title="partner_heading.title"   
            :description="partner_heading.description"
            />
        </div>
        
        <section class="mb-20">
            <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-3">
                <div
                    class="col-span-1 relative group"
                    v-for="(partner, index) in partners"
                    :key="index"
                >
                    <div class="rounded-lg overflow-hidden border border-slate-200 bg-white shadow">
                        <img class="max-h-[130px] w-full rounded-lg" :src="partner.logo" alt="">
                    </div>

                    <!-- Overlay, hidden by default, shown on hover -->
                    <div
                        class="flex flex-col gap-3 justify-center items-center
                            absolute top-0 left-0 w-full h-full px-1
                            bg-slate-300/90 backdrop:blur-sm cursor-pointer
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    >
                        <p class="text-slate-700 font-bold text-center">{{ partner.name }}</p>
                        <a
                        :href="partner.website_url"
                        target="_blank"
                        class="hover:text-blue-700 duration-200 text-xl"
                        >
                        <Earth />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </Container>
</template>