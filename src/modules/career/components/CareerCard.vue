<script setup>
import { CircleDollarSign, Dot, Mail, Navigation } from 'lucide-vue-next';

    defineProps({
        career: {
            type: Object
        }
    })

</script>

<template>
    <div class="bg-slate-200 p-10 rounded-lg shadow-xl flex justify-between items-start">
        <div>
            <h2 class="text-2xl font-bold mb-4 text-slate-700">{{career.position}}</h2>
            <div class="flex items-center gap-10">
                <div class="flex items-center gap-2">
                    <CircleDollarSign :size="20" />
                    <span class="text-slate-600 text-sm">{{career.salary == 0 ? 'Negotiable' : career.salary}}</span>
                </div>
                <div class="flex items-center gap-2">
                    <Navigation :size="20" />
                    <span class="text-slate-600 text-sm">Yangon  </span>
                </div>
                <div class="flex items-center gap-2">
                    <Mail :size="20" />
                    <span class="text-slate-600 text-sm">{{career.contact_mail}}</span>
                </div>
            </div>

            <div class="py-3 px-5 flex flex-col gap-2 mt-5">
                <div class="flex items-center">
                    <div class="w-[25%] flex items-center gap-2">
                        <Dot :size="24" />
                        <span class="font-bold">Salary  </span>
                    </div>
                    <p>: &nbsp;&nbsp;{{career.salary == 0 ? 'Negotiable' : career.salary}}</p>
                </div>
                <div class="flex items-center ">
                    <div class="w-[25%] flex items-center gap-2">
                        <Dot :size="24" />
                        <span class="font-bold">Location  </span>
                    </div>
                    <p>: &nbsp;&nbsp;{{career.office_location}} </p>
                </div>
                <div class="flex items-center">
                    <div class="w-[25%] flex items-center gap-2">
                        <Dot :size="24" />
                        <span class="font-bold">Working Time  </span>
                    </div>
                    <p>: &nbsp;&nbsp; {{ career.working_time }}  </p>
                </div>
                <div class="flex items-center">
                    <div class="w-[25%] flex items-center gap-2">
                        <Dot :size="24" />
                        <span class="font-bold">Off Day  </span>
                    </div>
                    <p>: &nbsp;&nbsp;  {{ career.off_days }}  </p>
                </div>
            </div>

            <p class="text-slate-600 mt-5">
                Send your CV directly to our email <b>{{career.contact_mail}}</b> or call to <b>{{career.call_phone}}</b> , Viber – <b>{{career.viber_phone}}</b>. 
            </p>
        </div>

        <div class="pt-10 flex flex-col xl:flex-row gap-8">
            <div class="flex flex-col items-center gap-1">
                <h2 class="text-xl font-bold text-sky-500 underline underline-offset-8 ">Department</h2>
                <h4 class="font-bold text-lg text-center">{{career.department}}</h4>
            </div>

            <div class="pt-3">
                <RouterLink :to="`/career-detail/${career.position_slug}/${career.id}`" class="bg-sky-700 text-white px-4 py-2 w-full rounded-lg hover:bg-sky-800 duration-200 font-bold">JD & Apply</RouterLink>
            </div>
        </div>
    </div>
</template>