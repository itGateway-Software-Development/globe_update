<script setup>
    import { useRoute } from 'vue-router';
    import getCareer from '../composable/getCareer';
    import { ArrowLeft, Paperclip } from 'lucide-vue-next';
    import { onMounted } from 'vue';

    const {position, id } = useRoute().params

    const {career, errors, load} = getCareer();

    load(id)

    onMounted(() => {
        window.scrollTo(0,0)
    })
</script>

<template>
    <Container className="px-20 xl:px-36 py-10">
        <RouterLink
            to="/career"
            class="bg-slate-200 hover:bg-[#248091] duration-150 w-10 h-10 flex items-center justify-center rounded-full"
            ><ArrowLeft class="w-5 h-5 text-slate-700 hover:text-white"
        /></RouterLink>

        <div class="mt-5 grid grid-cols-12 gap-5 ">
            <div class="col-span-8">
                <h2 class="text-2xl font-bold mb-2 text-slate-700 text-center">{{career.position}}</h2>
                <h4 class="font-bold text-lg text-slate-600 text-center">{{career.department}} - Department</h4>
                
                <div class="mt-8">
                    <h4 class="font-semibold text-lg text-slate-600 underline underline-offset-4">Job Respoinsibilities</h4>
                    <div v-html="career ? career.responsibilities : ''" class="mt-2 text-slate-600 career-ul" />
                </div>

                <div class="mt-7">
                    <h4 class="font-semibold text-lg text-slate-600 underline underline-offset-4">Job Requirements</h4>
                    <div v-html="career ? career.requirements : ''" class="mt-2 text-slate-600 career-ul" />
                </div>
            </div>

            <div class="col-span-4">
                <div class="border  rounded-lg p-5 mt-20 shadow-xl">
                    <h2 class="text-2xl font-bold text-slate-700 text-center mb-3">Apply Now</h2>
                    <hr>

                    <div class="mt-3">
                        <input type="text" class="border border-slate-500 rounded-lg px-5 py-[10px] w-full text-slate-700 placeholder:italic placeholder:text-base bg-transparent focus:outline-none mb-3" placeholder="Name">
                        <input type="text" class="border border-slate-500 rounded-lg px-5 py-[10px] w-full text-slate-700 placeholder:italic placeholder:text-base bg-transparent focus:outline-none mb-3" placeholder="Email">
                        <input type="text" class="border border-slate-500 rounded-lg px-5 py-[10px] w-full text-slate-700 placeholder:italic placeholder:text-base bg-transparent focus:outline-none mb-3" placeholder="Phone">

                        <div class="relative mb-3">
                            <input type="file" accept="application/pdf" class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20" />
                            <input type="text" class="border border-slate-500 rounded-lg px-5 py-[10px] w-full text-slate-700 placeholder:italic placeholder:text-base bg-slate-200 focus:outline-none mb-3" placeholder="      Upload you cv" readonly />
                            <Paperclip class="absolute top-3 left-5 w-6 h-6 text-slate-600 cursor-pointer z-10" />
                        </div>

                        <button class="bg-sky-400 hover:bg-sky-600 duration-150 text-white w-full py-3 rounded-lg active:scale-95 ">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>

