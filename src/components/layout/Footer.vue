<script setup >
import { MapPinned,PhoneCall,Mail } from 'lucide-vue-next';

</script>

<template>
    <footer class="mt-auto bg-sky-500 pt-10">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-10">
            <div class="col-span-1 flex flex-col gap-7">
                <div class="flex items-center gap-3">
                    <img class="w-28 rounded-xl" src="@/assets/images/logo-white.jpg" alt="">
                    <div>
                        <h1 class="text-3xl font-bold text-slate-200">GLOBE</h1>
                        <h3 class="text-xl font-bold text-slate-300">IT & SMART ELECTRONIC</h3>
                    </div>
                </div>
                <div class="flex flex-col gap-4 -ms-4">
                    <div class="flex items-start gap-3">
                        <MapPinned :stroke-width="3" class="text-amber-400 w-[15%]" />
                        <p class="text-white w-[85%]">
                            No.508 A, Lower Kyee Myin daing Road, (Home Lan Bus Stop), Kyee Myin Daing Township. Yangon.
                        </p>
                    </div>
                    <div class="flex items-start gap-3">
                        <PhoneCall :stroke-width="3" class="text-amber-400 w-[15%]" />
                        <p class="text-white w-[85%]">
                            +959 880 441 046
                        </p>
                    </div>
                    <div class="flex items-start gap-3">
                        <Mail :stroke-width="3" class="text-amber-400 w-[15%]" />
                        <p class="text-white w-[85%]">
                            info@globetradingmm.com
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex justify-center ">
                <div>
                    <h2 class="text-2xl font-bold text-slate-200 mb-7">XP-Pens</h2>
                    <div class="flex flex-col gap-3">
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">Drawing Tablets</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">Drawing Displays</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">Accessories</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">Android Tablet</RouterLink>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex justify-center ">
                <div>
                    <h2 class="text-2xl font-bold text-slate-200 mb-7">Globe Solar Solution</h2>
                    <div class="flex flex-col gap-3">
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">Power Master</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">Sunboost</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">JA</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">Solar Solutions</RouterLink>
                        <RouterLink to="/" class="text-lg text-slate-200 underline underline-offset-4 hover:text-slate-700">Power Station</RouterLink>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex justify-center ">
                <div>
                    <h2 class="text-2xl font-bold text-slate-200 mb-7">Follow Us</h2>
                    <div class="flex items-center gap-3">
                        <a href="https://www.facebook.com/globe.trading" target="_blank" class="w-12 h-12 bg-slate-200 rounded-lg flex justify-center items-center hover:bg-slate-500 group duration-200">
                            <i class="fa-brands fa-facebook-f text-[23px] group-hover:text-white text-blue-500"></i>
                        </a>
                        <a href="https://www.facebook.com/globe.trading" target="_blank" class="w-12 h-12 bg-slate-200 rounded-lg flex justify-center items-center hover:bg-slate-500 group duration-200">
                            <i class="fa-brands fa-youtube text-[23px] group-hover:text-white text-red-600"></i>
                        </a>
                        <a href="https://www.tiktok.com/@globe_trading1?is_from_webapp=1&sender_device=pc" target="_blank" class="w-12 h-12 bg-slate-200 rounded-lg flex justify-center items-center hover:bg-slate-500 group duration-200">
                            <i class="fa-brands fa-tiktok text-[23px] group-hover:text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/globetrading4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="w-12 h-12 bg-slate-200 rounded-lg flex justify-center items-center hover:bg-slate-500 group duration-200">
                            <i class="fa-brands fa-instagram text-[23px] group-hover:text-white text-rose-600"></i>
                        </a>
                    </div>
                </div>
            </div>
            
        </Container>

        <div class="bg-slate-700 ">
            <Container className="flex justify-between items-center py-3 ">
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