<script setup>
import { CircleDollarSign, Dot, Mail, Navigation } from 'lucide-vue-next';

    defineProps({
        career: {
            type: Object
        }
    })

</script>

<template>
    <div class="flex flex-col bg-slate-200 justify-between rounded-lg shadow-xl items-start md:flex-row md:p-10 px-3 py-5">
        <div>
            <h2 class="text-2xl text-slate-700 font-bold mb-4">{{career.position}}</h2>
            <div class="flex flex-wrap gap-10 items-center">
                <div class="flex gap-2 items-center">
                    <CircleDollarSign :size="20" />
                    <span class="text-slate-600 text-sm">{{career.salary == 0 ? 'Negotiable' : career.salary}}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <Navigation :size="20" />
                    <span class="text-slate-600 text-sm">Yangon  </span>
                </div>
                <div class="flex gap-2 items-center">
                    <Mail :size="20" />
                    <span class="text-slate-600 text-sm">{{career.contact_mail}}</span>
                </div>
            </div>

            <div class="flex flex-col gap-2 md:px-5 mt-5 px-0 py-3">
                <div class="flex items-center">
                    <div class="flex w-[40%] gap-2 items-center md:w-[25%]">
                        <Dot :size="24" />
                        <span class="font-bold">Salary  </span>
                    </div>
                    <p class="w-[60%] md:w-[75%]">: &nbsp;&nbsp;{{career.salary == 0 ? 'Negotiable' : career.salary}}</p>
                </div>
                <div class="flex items-center">
                    <div class="flex w-[40%] gap-2 items-center md:w-[25%]">
                        <Dot :size="24" />
                        <span class="font-bold">Location  </span>
                    </div>
                    <p class="w-[60%] md:w-[75%]">: &nbsp;&nbsp;{{career.office_location}} </p>
                </div>
                <div class="flex items-center">
                    <div class="flex w-[40%] gap-2 items-center md:w-[25%]">
                        <Dot :size="24" />
                        <span class="font-bold">Working Time  </span>
                    </div>
                    <p class="w-[60%] md:w-[75%]">: &nbsp;&nbsp; {{ career.working_time }}  </p>
                </div>
                <div class="flex items-center">
                    <div class="flex w-[40%] gap-2 items-center md:w-[25%]">
                        <Dot :size="24" />
                        <span class="font-bold">Off Day  </span>
                    </div>
                    <p class="w-[60%] md:w-[75%]">: &nbsp;&nbsp;  {{ career.off_days }}  </p>
                </div>
            </div>

            <p class="text-slate-600 mt-5">
                Send your CV directly to our email <b>{{career.contact_mail}}</b> or call to <b>{{career.call_phone}}</b> , Viber – <b>{{career.viber_phone}}</b>. 
            </p>
        </div>

        <div class="flex flex-row flex-wrap gap-5 2xl:gap-8 md:flex-col pt-10 xl:flex-row">
            <div class="flex flex-col gap-1 items-center">
                <h2 class="text-sky-500 text-xl font-bold underline underline-offset-8">Department</h2>
                <h4 class="text-center text-lg font-bold">{{career.department}}</h4>
            </div>

            <div class="pt-1 xl:pt-3">
                <RouterLink :to="`/career-detail/${career.position_slug}/${career.id}`" class="bg-sky-700 rounded-lg text-white w-full duration-200 font-bold hover:bg-sky-800 px-4 py-2">JD & Apply</RouterLink>
            </div>
        </div>
    </div>
</template>