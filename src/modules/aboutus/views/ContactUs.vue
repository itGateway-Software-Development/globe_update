<script setup>
import { warning } from '@/utils/sweetalert';
import { Clock, Headset, Mail, Map, MapPinned, MessagesSquare, Minus, PhoneCall, PhoneOutgoing } from 'lucide-vue-next';
import { onMounted } from 'vue';

const showContactNo = () => {
    warning('+959 880441216', 'Here our number call us')
}

onMounted(() => {
    window.scrollTo(0,0)
})
</script>

<template>
    <Container class="py-10">
        <h2 class="text-2xl lg:text-3xl text-slate-700 font-bold text-center">Get In Touch</h2>
        <p class="text-center text-slate-600 mt-3">Ready to help you.Let's Chat about how can we help</p>

        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            <div class="col-span-1 flex flex-col items-center justify-center p-7 gap-3 border rounded-xl shadow-lg">
                <span class="bg-[#b6d5f2] w-14 h-14 p-3 rounded-full flex justify-center items-center"><MessagesSquare :size="25" class="text-[#1162ad]" /></span>
                <h3 class="text-xl text-slate-700 font-bold mt-3">Chat to Sales</h3>
                <p class="text-center text-slate-600">Speak to our friendly sales</p>
                <a href="https://www.facebook.com/messages/t/955295741217728" target="_blank" class="bg-[#1162ad] text-white py-2 px-10 rounded-full mt-3 border border-[#1162ad] hover:bg-transparent hover:text-slate-700 duration-200">Chat to sales</a>
            </div>
            <div class="col-span-1 flex flex-col items-center justify-center p-7 gap-3 border rounded-xl shadow-lg">
                <span class="bg-[#b6d5f2] w-14 h-14 p-3 rounded-full flex justify-center items-center"><Headset :size="25" class="text-[#1162ad]" /></span>
                <h3 class="text-xl text-slate-700 font-bold mt-3">Chat to Support</h3>
                <p class="text-center text-slate-600">We're here for help</p>
                <a href="https://www.facebook.com/messages/t/955295741217728" target="_blank" class="bg-[#1162ad] text-white py-2 px-10 rounded-full mt-3 border border-[#1162ad] hover:bg-transparent hover:text-slate-700 duration-200">Chat to support</a>
            </div>
            <div class="col-span-1 flex flex-col items-center justify-center p-7 gap-3 border rounded-xl shadow-lg">
                <span class="bg-[#b6d5f2] w-14 h-14 p-3 rounded-full flex justify-center items-center"><Map :size="25" class="text-[#1162ad]" /></span>
                <h3 class="text-xl text-slate-700 font-bold mt-3">Visit Us</h3>
                <p class="text-center text-slate-600">Visit our store</p>
                <a href="https://maps.app.goo.gl/WBdViVkU6wvevsot7" target="_blank" class="bg-[#1162ad] text-white py-2 px-10 rounded-full mt-3 border border-[#1162ad] hover:bg-transparent hover:text-slate-700 duration-200">Get direction</a>
            </div>
            <div class="col-span-1 flex flex-col items-center justify-center p-7 gap-3 border rounded-xl shadow-lg">
                <span class="bg-[#b6d5f2] w-14 h-14 p-3 rounded-full flex justify-center items-center"><PhoneOutgoing :size="25" class="text-[#1162ad]" /></span>
                <h3 class="text-xl text-slate-700 font-bold mt-3">Call Us</h3>
                <p class="text-center text-slate-600">Everyday from 9:00 AM to 6:00 PM</p>
                <button @click="showContactNo" class="bg-[#1162ad] text-white py-2 px-10 rounded-full mt-3 border border-[#1162ad] hover:bg-transparent hover:text-slate-700 duration-200">Call our store</button>
            </div>
        </div>

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-7">
            <div class="col-span-1 shadow-lg bg-slate-100 p-10 rounded-lg border">
                <h3 class="text-center text-slate-700 text-2xl font-bold mb-3">Contact Us</h3>
                <p class="text-center text-slate-600">You can also contact us with the following information</p>

                <div class="mt-10">
                    <div class="grid grid-cols-12 mb-5">
                        <div class="col-span-2 flex gap-4 xl:gap-8">
                            <MapPinned class="text-cyan-600" />
                            <Minus :size="22" class="pt-1" />
                        </div>
                        <div class="col-span-10">
                            <p class="text-slate-700 font-semibold text-md xl:text-lg"> No.508 A, Lower Kyee Myin daing Road, (Home Lan Bus Stop), Kyee Myin Daing Township. Yangon. </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 mb-5">
                        <div class="col-span-2 flex gap-4 xl:gap-8">
                            <PhoneCall class="text-cyan-600" />
                            <Minus :size="22" class="pt-1" />
                        </div>
                        <div class="col-span-10">
                            <p class="text-slate-700 font-semibold text-md xl:text-lg"> +959 880441216</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 mb-5">
                        <div class="col-span-2 flex gap-4 xl:gap-8">
                            <Mail class="text-cyan-600" />
                            <Minus :size="22" class="pt-1" />
                        </div>
                        <div class="col-span-10">
                            <p class="text-slate-700 font-semibold text-md xl:text-lg"> info@globetradingmm.com</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-12 mb-5">
                        <div class="col-span-2 flex gap-4 xl:gap-8">
                            <Clock class="text-cyan-600" />
                            <Minus :size="22" class="pt-1" />
                        </div>
                        <div class="col-span-10">
                            <p class="text-slate-700 font-semibold text-md xl:text-lg"> Everyday from 9:00 AM to 6:00 PM</p>
                        </div>
                    </div>
                </div>

                <div class="mt-10">
                    <h3 class="text-xl font-bold text-slate-700">Social Links</h3>
                    <div class="flex gap-3 items-center mt-4">
                        <a href="https://www.facebook.com/globe.trading" target="_blank" class="flex bg-slate-300 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-blue-500 fa-brands fa-facebook-f group-hover:text-white"></i>
                        </a>
                        <a href="https://www.youtube.com/@GlobeTrading" target="_blank" class="flex bg-slate-300 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-red-600 fa-brands fa-youtube group-hover:text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/globe-trading-co-ltd" target="_blank" class="flex bg-slate-300 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-blue-800 fa-linkedin fab group-hover:text-white"></i>
                        </a>
                        <!-- <a href="https://www.tiktok.com/@globe_trading1?is_from_webapp=1&sender_device=pc" target="_blank" class="flex bg-slate-300 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] fa-brands fa-tiktok group-hover:text-white"></i>
                        </a> -->
                        <a href="https://twitter.com/globe_trading" target="_blank" class="flex bg-slate-300 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-blue-400 fa-twitter fab group-hover:text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/globetrading4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="flex bg-slate-200 h-12 justify-center rounded-lg w-12 duration-200 group hover:bg-slate-500 items-center">
                            <i class="text-[23px] text-rose-600 fa-brands fa-instagram group-hover:text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-span-1 shadow-lg bg-slate-100 p-10 rounded-lg border">
                <h3 class="text-center text-slate-700 text-2xl font-bold mb-3">Message Us</h3>
                <p class="text-center text-slate-600">We'll get you back to you within 24 hours.</p>

                <div class="mt-10 flex flex-col gap-5">
                    <div class="flex gap-5 w-full ">
                        <div class="flex flex-col gap-1 w-[50%]">
                            <label for="">Name</label>
                            <input type="text" class="border border-slate-600 rounded-lg bg-transparent placeholder:text-sm placeholder:italic placeholder:text-slate-600 w-full" placeholder="eg. John">
                        </div>
                        <div class="flex flex-col gap-1 w-[50%]">
                            <label for="">Email</label>
                            <input type="text" class="border border-slate-600 rounded-lg bg-transparent placeholder:text-sm placeholder:italic placeholder:text-slate-600 w-full" placeholder="eg. john@gmail.com">
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="">Phone</label>
                        <input type="number" class="border border-slate-600 rounded-lg bg-transparent placeholder:text-sm placeholder:italic placeholder:text-slate-600 w-full" placeholder="eg. 09xxxxxxx">
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="">Message</label>
                        <textarea name="" class="border border-slate-600 rounded-lg bg-transparent placeholder:text-sm placeholder:italic placeholder:text-slate-600 w-full" placeholder="Enter your message" id=""></textarea>
                    </div>
                    <div>
                        <button class="bg-[#1162ad] text-center text-lg font-bold text-white w-full rounded-full py-3">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>