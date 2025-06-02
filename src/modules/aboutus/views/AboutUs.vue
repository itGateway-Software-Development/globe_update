<script setup>
import { BriefcaseBusiness, GalleryHorizontalEnd, Headphones, LaptopMinimal, Layers, Router } from 'lucide-vue-next';
import { onMounted } from 'vue';
import getCompanyProfiles from '../composables/getCompanyProfiles';

const {profiles, errors, load} = getCompanyProfiles();
load();

onMounted(() => {
    window.scrollTo(0,0)
})
</script>

<template>
    <section class="py-12">
        <Container class="xl:ps-12">
            <h3 class="text-2xl xl:text-3xl text-center font-bold text-slate-700">About Us</h3>
            <p class="text-center text-slate-600 mt-2">Empowering Technology, Empowering You.</p>

            <div class="mt-10 grid grid-cols-1 xl:grid-cols-2 items-center">
                <div class="col-span-1">
                    <p class="text-xl mb-5 leading-9">
                        <span class="text-cyan-800 font-bold text-2xl">Globe</span> is a local leading company which genuinely offer a wide range of IT products & accessories, computer & accessories and smart electronics devices for customers from homes to business and education.
                    </p>
                    <p class="text-xl mb-5 leading-9">
                        Globe was successfully established since 2019 by strong partnerships with Global leading IT, IOT and Smart Electronic vendors.
                    </p>
                    <p class="text-xl mb-5 leading-9">
                        We are resourceful in Smart Electronic Industry, Customer Services, Global Brand Computers and Parts, end-to-end and B2B Professional Electronics Services through our robust delivery processes to the number of assorted industry verticals.
                    </p>
                </div>

                <div class="col-span-1 flex justify-center items-center">
                    <img class="w-[70%] bg-slate-200 rounded-lg" src="@/assets/images/aboutus.png" alt="">
                </div>
            </div>

            <div class="mt-24">
                <h3 class="text-2xl font-bold text-slate-700">What We Offer</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-8">
                    <div class="col-span-1 flex">
                        <div class="w-20">
                            <GalleryHorizontalEnd :size="50" />
                        </div>
                        <div class="pt-2">
                            <h3 class="text-[22px] font-bold text-slate-700">Portable</h3>
                            <p class="text-lg text-slate-600 mt-3">Premium devices <br> for every budget.</p>
                        </div>
                    </div>
                    <div class="col-span-1 flex">
                        <div class="w-20">
                            <LaptopMinimal :size="50" />
                        </div>
                        <div class="pt-2">
                            <h3 class="text-[22px] font-bold text-slate-700">Laptops & Tablet</h3>
                            <p class="text-lg text-slate-600 mt-3">Premium devices <br> for every budget.</p>
                        </div>
                    </div>
                    <div class="col-span-1 flex">
                        <div class="w-20">
                            <BriefcaseBusiness :size="50" />
                        </div>
                        <div class="pt-2">
                            <h3 class="text-[22px] font-bold text-slate-700">Tech Gadgets</h3>
                            <p class="text-lg text-slate-600 mt-3">Premium devices <br> for every budget.</p>
                        </div>
                    </div>
                    <div class="col-span-1 flex">
                        <div class="w-20">
                            <Headphones :size="50" />
                        </div>
                        <div class="pt-2">
                            <h3 class="text-[22px] font-bold text-slate-700">Headset & Speaders</h3>
                            <p class="text-lg text-slate-600 mt-3">Branded headsets and <br> and good quality speakers.</p>
                        </div>
                    </div>
                    <div class="col-span-1 flex">
                        <div class="w-20">
                            <Router :size="50" />
                        </div>
                        <div class="pt-2">
                            <h3 class="text-[22px] font-bold text-slate-700">Networking</h3>
                            <p class="text-lg text-slate-600 mt-3">Reliable routers, <br> switches and accessories.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

        <section class="bg-[#4c4c4c] my-20">
            <Container class="py-20 xl:py-32">
                <h2 class="text-2xl lg:text-4xl font-bold text-center italic text-green-600">We Offer Your Quality Products</h2>
            </Container>
        </section>

        <Container>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 2xl:gap-7 items-center">
                <div class="col-span-1 lg:col-span-2 flex flex-col gap-5 xl:gap-10 xl:px-20">
                    <div class="bg-cyan-300 p-7 xl:p-10 rounded-[50px]">
                        <h3 class="bg-slate-200 inline-block py-3 px-5 rounded-[50px] mb-3 text-lg xl:text-xl font-bold">Our Vision</h3>
                        <p class="text-slate-700 text-base xl:text-lg">
                            To be a best local IT and Smart Electronic company Electronic which could consistently offer the customers with the best quality IT and smart electronic products packed with excellent customer services through strong partnership.
                        </p>
                    </div>
                    <div class="bg-cyan-300 p-7 xl:p-10 rounded-[50px]">
                        <h3 class="bg-slate-200 inline-block py-3 px-5 rounded-[50px] mb-3 text-lg xl:text-xl font-bold">Our Mission</h3>
                        <p class="text-slate-700 text-base xl:text-lg">
                            We strive to offer the highest quality products and services to our customers, while providing exceptional customer service and support.
                        </p>
                    </div>
                    <div class="bg-cyan-300 p-7 xl:p-10 rounded-[50px]">
                        <h3 class="bg-slate-200 inline-block py-3 px-5 rounded-[50px] mb-3 text-lg xl:text-xl font-bold">Our Culture</h3>
                        <p class="text-slate-700 text-base xl:text-lg">
                            To built on a foundation of excellence and customer satisfaction. We are dedicated to providing exceptional service to our customers, and we are constantly working to improve our products and services to meet their changing needs.
                        </p>
                    </div>
                </div>

                <div class="col-span-1">
                    <img class="rounded-[50px]" src="@/assets/images/office.jpg" alt="">
                </div>
            </div>
        </Container>

        <Container class="mt-28 xl:ps-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div class="col-span-1">
                    <img class="rounded-xl" src="@/assets/images/room.jpg" alt="">
                </div>
                <div class="col-span-1">
                    <h3 class="text-2xl text-slate-700 font-bold mb-8">Our Profile</h3>

                    <ol class="relative border-s border-gray-200 dark:border-gray-700 ">                  
                        <li class="mb-10 ms-6" v-for="profile in profiles" :key="profile.id">            
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-[#1162ad] rounded-full -start-3 ring-8 ring-[#1162ad] ">
                                <Layers :size="20" class="text-white" />
                            </span>
                            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 ">{{ profile.name }}</h3>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{{ profile.description }}</p>
                            <a :href="profile.file" target="_blank" download class="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-100 bg-cyan-500 border border-gray-200 rounded-lg hover:bg-cyan-200 hover:text-slate-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 "><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                            </svg> Download</a>
                        </li>
                        
                    </ol>
                </div>
            </div>


        </Container>
    </section>
</template>