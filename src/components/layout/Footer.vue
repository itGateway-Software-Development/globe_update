<script setup >
import { MapPinned,PhoneCall,Mail, ExternalLink } from 'lucide-vue-next';

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

            <div class="col-span-1 flex justify-center">
                <div>
                    <h2 class="text-2xl text-slate-200 font-bold mb-7">XP-Pens</h2>
                    <div class="flex flex-col gap-3">
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Drawing Tablets</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Drawing Displays</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Accessories</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Android Tablet</RouterLink>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex justify-center">
                <div>
                    <h2 class="text-2xl text-slate-200 font-bold mb-7">Globe Solar Solution</h2>
                    <div class="flex flex-col gap-3">
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Power Master</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Sunboost</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">JA</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Solar Solutions</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Power Station</RouterLink>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex flex-wrap justify-center">
                <div>
                    <h2 class="text-2xl text-slate-200 font-bold mb-7">Adreamer </h2>
                    <div class="flex flex-col gap-3">
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Laptops</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Tablet</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">All in one PC</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Portable</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Interactive Display</RouterLink>
                    </div>
                </div>
            </div>

        </Container>


        <Container className="mb-3">
            <hr>

            <div class="flex justify-between ">
                <div class="flex gap-8 mt-3">
                    <div>
                        <h2 class="text-xl text-slate-200 font-bold mb-3 ">Our Group of Companies </h2>
                        <RouterLink @click="navigate('https://greenitmm.com/')" to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4 flex items-center gap-3 mb-3">GreenIT Myanmar <ExternalLink :size="19" /></RouterLink>
                        <RouterLink @click="navigate('https://www.greenit-sg.com/')" to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4 flex items-center gap-3 mb-3">GreenIT Singapore <ExternalLink :size="19" /></RouterLink>
                    </div>
                    <div>
                        <h2 class="text-xl text-slate-200 font-bold mb-3 ">Group of Business </h2>
                        <RouterLink to="/" class="text-lg text-slate-200 hover:text-slate-700 underline underline-offset-4">Our Partners</RouterLink>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl text-slate-200 font-bold mb-7 mt-3">Follow Us</h2>
                    <div class="flex gap-3 items-center">
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
                            <i class="text-[23px] text-blue-400 fa-twitter fab group-hover:text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/globetrading4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="flex bg-slate-200 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-rose-600 fa-brands fa-instagram group-hover:text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Container>

        <div class="bg-slate-700">
            <Container className="flex justify-between items-center py-3">
                <p class="text-white">
                    © Copyright <span class="text-amber-500 font-bold">itGateway Technology Group Ltd.</span> All RightsReserved.
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