<script setup >
import { MapPinned,PhoneCall,Mail, ExternalLink } from 'lucide-vue-next';
import getXpPenCategory from '@/composables/getXpPenCategory';
import getSolarCategoryList from '@/composables/getSolarCategoryList';
import getAdreamerCategoryList from '@/composables/getAdreamerCategoryList';
import {onMounted} from 'vue'



const {xp_pens_category, error: xpPenErrors, load: xpPenLoad} = getXpPenCategory();
const {category_lists: solar_category_lists, errors: solarErrors, load: solarCategoryLoad} = getSolarCategoryList();
const {category_lists: adreamer_category_lists, errors: adreamerErrors, load: adreamerLoad} = getAdreamerCategoryList();



onMounted(async() => {
    await xpPenLoad();
    await solarCategoryLoad();
    await adreamerLoad();
})

const navigate = (route) => {
        window.open(route, "_blank");
    }
    

</script>

<template>
    <footer class="bg-sky-500 mt-auto pt-10">
        <Container className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 pb-10 xl:grid-cols-4">
            <div class="col-span-1 flex flex-col gap-7">
                <div class="flex gap-3 items-center">
                    <img class="bg-white rounded-xl w-28" src="@/assets/images/logo.png" alt="">
                    <div>
                        <h1 class="text-3xl text-slate-200 font-bold">GLOBE</h1>
                        <h3 class="text-slate-300 text-xl font-bold">TRADING</h3>
                    </div>
                </div>
                <div class="flex flex-col -ms-4 gap-4">
                    <div class="flex gap-3 items-start">
                        <MapPinned :stroke-width="3" class="text-amber-400 w-[15%]" />
                        <p class="text-white w-[85%]">
                            No.508 A, Lower Kyee Myin daing Road, (Home Lan Bus Stop), Kyee Myin Daing Township. Yangon.
                        </p>
                    </div>
                    <div class="flex gap-3 items-start">
                        <PhoneCall :stroke-width="3" class="text-amber-400 w-[15%]" />
                        <p class="text-white w-[85%]">
                            +959 880 441 216
                        </p>
                    </div>
                    <div class="flex gap-3 items-start">
                        <Mail :stroke-width="3" class="text-amber-400 w-[15%]" />
                        <p class="text-white w-[85%]">
                            info@globetradingmm.com
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex justify-start md:justify-center">
                <div>
                    <h2 class="text-2xl text-slate-200 font-bold mb-7">XP-Pens</h2>
                    <div class="flex flex-col gap-3">
                        <RouterLink v-for="category in xp_pens_category" :key="category.id" :to="`/xp-pen/${category.slug}`" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">{{category.name}}</RouterLink> 
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex justify-start md:justify-center">
                <div>
                    <h2 class="text-2xl text-slate-200 font-bold mb-7">Globe Solar Solution</h2>
                    <div class="flex flex-col gap-3">
                        <RouterLink 
                            v-for="category in solar_category_lists" 
                            :key="category.id" 
                            :to="`/solar/${category.children.length > 0 ? category.children[0].slug : category.slug}`" 
                            class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4"
                        >
                            {{category.children.length > 0 ? category.children[0].name : category.name}}
                        </RouterLink>
                       
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex flex-wrap justify-start md:justify-center">
                <div>
                    <h2 class="text-2xl text-slate-200 font-bold mb-7">CHUWI </h2>
                    <div class="flex flex-col gap-3">
                        <RouterLink v-for="category in adreamer_category_lists" :key="category.id" :to="`/chuwi/${category.slug}`" to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">{{category.name}}</RouterLink>
                    </div>
                </div>
            </div>

        </Container>


        <Container className="mb-3">
            <hr>

            <div class="flex flex-col lg:flex-row justify-between ">
                <div class="flex justify-between gap-8 mt-3">
                    <div>
                        <h2 class="text-xl text-slate-200 font-bold mb-3 ">Our Group of Companies </h2>
                        <RouterLink @click="navigate('https://greenitmm.com/')" to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4 flex items-center gap-3 mb-3">GreenIT Myanmar <ExternalLink :size="19" /></RouterLink>
                        <RouterLink @click="navigate('https://www.greenit-sg.com/')" to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4 flex items-center gap-3 mb-3">GreenIT Singapore <ExternalLink :size="19" /></RouterLink>
                    </div>
                </div>
                <div class="mt-3">
                    <RouterLink to="/partners" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Our Partners</RouterLink>
                </div>
                <div>
                    <h2 class="text-2xl text-slate-200 font-bold mb-7 mt-3">Follow Us</h2>
                    <div class="flex flex-wrap gap-3 items-center">
                        <a href="https://www.facebook.com/globe.trading" target="_blank" class="flex bg-slate-200 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-blue-500 fa-brands fa-facebook-f group-hover:text-white"></i>
                        </a>
                        <a href="https://www.youtube.com/@GlobeTrading" target="_blank" class="flex bg-slate-200 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-red-600 fa-brands fa-youtube group-hover:text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/globe-trading-co-ltd" target="_blank" class="flex bg-slate-200 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-blue-800 fa-linkedin fab group-hover:text-white"></i>
                        </a>
                        <!-- <a href="https://www.tiktok.com/@globe_trading1?is_from_webapp=1&sender_device=pc" target="_blank" class="flex bg-slate-200 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] fa-brands fa-tiktok group-hover:text-white"></i>
                        </a> -->
                        <a href="https://twitter.com/globe_trading" target="_blank" class="flex bg-slate-200 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-slate-700 fa-x-twitter fab group-hover:text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/globetrading4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="flex bg-slate-200 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-rose-600 fa-brands fa-instagram group-hover:text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Container>

        <div class="bg-slate-700">
            <Container className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center py-3">
                <p class="text-white">
                    © Copyright <span class="text-amber-500 font-bold">Globe Trading Co.,Ltd.</span> All RightsReserved.
                </p>
                <p class="text-white">
                    Developed by
                    <a href="https://itgateway.org/" _target="_blank"
                        ><span class="text-amber-500 font-bold">itGateway Software Development</span></a
                    >
                </p>
            </Container>
        </div>
    </footer>
</template>