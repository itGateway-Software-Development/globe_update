<script setup>
import { useRoute } from "vue-router";
import getCareer from "../composable/getCareer";
import { ArrowLeft, Paperclip } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";
import { submitCv } from "../composable/submitCv";
import { tailspin } from 'ldrs'

tailspin.register()



const { position, id } = useRoute().params;

const { career, errors, load } = getCareer();

load(id);

const submitData = ref({
  name: "",
  email: "",
  phone: "",
  cv: "",
});
const loading = ref(false);
const name_err = ref(false);
const email_err = ref(false);
const phone_err = ref(false);
const cv_err = ref(false);

const submitCV = async () => {
    name_err.value = submitData.value.name == "" ? true : false;
    email_err.value = submitData.value.email == "" ? true : false;
    phone_err.value = submitData.value.phone == "" ? true : false;
    cv_err.value = submitData.value.cv == "" ? true : false;

    if (
        submitData.value.name != "" &&
        submitData.value.email != "" &&
        submitData.value.phone != "" &&
        submitData.value.cv != ""
    ) {
        try {
            loading.value = true;
            let response = await submitCv(submitData.value, id);

            console.log(response);
            if (response.status === 200) {
                loading.value = false;
                name_err.value = false;
                email_err.value = false;
                phone_err.value = false;
                cv_err.value = false;
                toast.success("Your CV is submitted.")
            }
        } catch (error) {
            loading.value = false;
        }
    } else {
        toast.error("All fields are required",);
    }
    
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <Container className="px-20 xl:px-36 py-10">
    <RouterLink
      to="/career"
      class="bg-slate-200 hover:bg-[#248091] duration-150 w-10 h-10 flex items-center justify-center rounded-full"
      ><ArrowLeft class="w-5 h-5 text-slate-700 hover:text-white"
    /></RouterLink>

    <div class="mt-5 grid grid-cols-12 gap-5">
      <div class="col-span-8">
        <h2 class="text-2xl font-bold mb-2 text-slate-700 text-center">
          {{ career.position }}
        </h2>
        <h4 class="font-bold text-lg text-slate-600 text-center">
          {{ career.department }} - Department
        </h4>

        <div class="mt-8">
          <h4
            class="font-semibold text-lg text-slate-600 underline underline-offset-4"
          >
            Job Respoinsibilities
          </h4>
          <div
            v-html="career ? career.responsibilities : ''"
            class="mt-2 text-slate-600 career-ul"
          />
        </div>

        <div class="mt-7">
          <h4
            class="font-semibold text-lg text-slate-600 underline underline-offset-4"
          >
            Job Requirements
          </h4>
          <div
            v-html="career ? career.requirements : ''"
            class="mt-2 text-slate-600 career-ul"
          />
        </div>
      </div>

      <div class="col-span-4">
        <div class="border rounded-lg p-5 mt-20 shadow-xl">
          <h2 class="text-2xl font-bold text-slate-700 text-center mb-3">
            Apply Now
          </h2>
          <hr />

          <div class="mt-3">
            <input
              v-model="submitData.name"
              type="text"
              class="border  rounded-lg px-5 py-[10px] w-full text-slate-700 placeholder:italic placeholder:text-base bg-transparent focus:outline-none mb-3"
              :class="name_err ? 'border-red-500' : 'border-slate-500'"
              placeholder="Name"
            />
            <input
              v-model="submitData.email"
              type="text"
              class="border  rounded-lg px-5 py-[10px] w-full text-slate-700 placeholder:italic placeholder:text-base bg-transparent focus:outline-none mb-3"
              :class="email_err ? 'border-red-500' : 'border-slate-500'"
              placeholder="Email"
            />
            <input
              v-model="submitData.phone"
              type="text"
              class="border  rounded-lg px-5 py-[10px] w-full text-slate-700 placeholder:italic placeholder:text-base bg-transparent focus:outline-none mb-3"
              :class="phone_err ? 'border-red-500' : 'border-slate-500'"
              placeholder="Phone"
            />

            <div class="relative mb-3">
              <input
                type="file"
                @change="submitData.cv = $event.target.files[0]"
                accept="application/pdf"
                class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              <input
                type="text"
                class="border  rounded-lg px-5 py-[10px] w-full text-slate-700 placeholder:italic placeholder:text-base bg-slate-200 focus:outline-none mb-3"
                :value="`      ${ submitData.cv ? submitData.cv.name : 'Upload you cv'}`"
                :class="cv_err ? 'border-red-500' : 'border-slate-500'"
                readonly
              />
              <Paperclip
                class="absolute top-3 left-5 w-6 h-6 text-slate-600 cursor-pointer z-10"
              />
            </div>

            <button
              @click="submitCV"
              class="bg-sky-400 hover:bg-sky-600 duration-150 text-white w-full py-3 flex items-center justify-center gap-4 rounded-lg active:scale-95"
              :disabled="loading"
            >
              Apply
              <l-tailspin
                v-if="loading"
                size="20"
                stroke="5"
                speed="0.9" 
                color="black" 
                ></l-tailspin>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
