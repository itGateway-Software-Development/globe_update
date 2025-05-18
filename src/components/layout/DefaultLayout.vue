<script setup>
    import Navbar from "@/components/layout/Navbar.vue";
    import Footer from "@/components/layout/Footer.vue"
    import Loading from "../common/Loading.vue";

    import { useGeneralStore } from "@/store/useGeneralStore";
    import { storeToRefs } from "pinia";

    const generalStore = useGeneralStore();

    const { isPageLoading } = storeToRefs(generalStore)

</script>

<template>
  <div class="flex flex-col min-h-screen bg-sky-50 max-w-[1920px] mx-auto relative">
    <div class="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1920px] z-[999] bg-sky-50 duration-300"
         >
      <Navbar />
    </div>
    <main class="flex-1 mt-[80px] md:mt-[0px] xl:mt-[133px]  main-layout">
      <router-view />
    </main>
    <Footer />

    <Loading v-if="isPageLoading" />
  </div>
</template>


<style scoped>
  @media (min-width: 768px) and (max-width: 787px) {
    .main-layout {
      margin-top: 190px !important;
    }
  }

  @media (min-width: 787px) and (max-width: 1279px) {
    .main-layout {
      margin-top: 140px !important;
    }
  }
</style>