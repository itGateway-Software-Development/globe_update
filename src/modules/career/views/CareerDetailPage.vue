<script setup>
import { useRoute } from "vue-router";
import getCareer from "../composable/getCareer";
import { ArrowLeft, Paperclip } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import { toast } from "vue3-toastify";
import { submitCv } from "../composable/submitCv";
import { tailspin } from "ldrs";

tailspin.register();

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
        toast.success("Your CV is submitted.");
      }
    } catch (error) {
      loading.value = false;
    }
  } else {
    toast.error("All fields are required");
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <Container className="2xl:px-36 lg:px-20 px-7 py-10">
    <RouterLink
      to="/career"
      class="flex bg-slate-200 h-10 justify-center rounded-full w-10 duration-150 hover:bg-[#248091] items-center"
      ><ArrowLeft class="h-5 text-slate-700 w-5 hover:text-white"
    /></RouterLink>

    <div class="grid grid-cols-12 gap-5 mt-5">
      <div class="col-span-12 lg:col-span-8">
        <h2 class="text-2xl text-center text-slate-700 font-bold mb-2">
          {{ career.position }}
        </h2>
        <h4 class="text-center text-lg text-slate-600 font-bold">
          {{ career.department }} - Department
        </h4>

        <div class="mt-8">
          <h4 class="text-lg text-slate-600 font-semibold underline underline-offset-4">
            Job Respoinsibilities
          </h4>
          <div
            v-html="career ? career.responsibilities : ''"
            class="text-slate-600 career-ul mt-2"
          />
        </div>

        <div class="mt-7">
          <h4 class="text-lg text-slate-600 font-semibold underline underline-offset-4">
            Job Requirements
          </h4>
          <div
            v-html="career ? career.requirements : ''"
            class="text-slate-600 career-ul mt-2"
          />
        </div>
      </div>

      <div class="col-span-12 lg:col-span-4">
        <div class="border p-5 rounded-lg shadow-xl mt-20">
          <h2 class="text-2xl text-center text-slate-700 font-bold mb-3">Apply Now</h2>
          <hr />

          <div class="mt-3">
            <input
              v-model="submitData.name"
              type="text"
              :class="{
                'border-red-500': name_err,
                'border-slate-700': !name_err,
                'bg-transparent border rounded-lg text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]': true
              }"
              placeholder="Name"
            />
            <input
              v-model="submitData.email"
              type="text"
              :class="{
                'border-red-500': email_err,
                'border-slate-700': !email_err,
                'bg-transparent border rounded-lg text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]': true
              }"
              placeholder="Email"
            />
            <input
              v-model="submitData.phone"
              type="text"
              :class="{
                'border-red-500': phone_err,
                'border-slate-700': !phone_err,
                'bg-transparent border rounded-lg text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]': true
              }"
              placeholder="Phone"
            />

            <div class="mb-3 relative">
              <input
                type="file"
                @change="submitData.cv = $event.target.files[0]"
                accept="application/pdf"
                class="h-full w-full absolute cursor-pointer left-0 opacity-0 top-0 z-20"
              />
              <input
                type="text"
                :class="{
                  'border-red-500': cv_err,
                  'border-slate-700': !cv_err,
                  'bg-transparent border rounded-lg text-slate-700 w-full focus:outline-none mb-3 placeholder:italic placeholder:text-base px-5 py-[10px]': true
                }"
                :value="`      ${submitData.cv ? submitData.cv.name : 'Upload you cv'}`"
                readonly
              />
              <Paperclip
                class="h-6 text-slate-600 w-6 absolute cursor-pointer left-5 top-3 z-10"
              />
            </div>

            <button
              @click="submitCV"
              class="flex bg-sky-400 justify-center rounded-lg text-white w-full active:scale-95 duration-150 gap-4 hover:bg-sky-600 items-center py-3"
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
