<script setup>
    import Navbar from "@/components/layout/Navbar.vue";
    import Footer from "@/components/layout/Footer.vue"
</script>

<template>
  <div class="flex flex-col min-h-screen bg-sky-50 max-w-[1920px] mx-auto relative">
    <div class="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1920px] z-[999] bg-sky-50 duration-300"
         :class="{ 'shadow-lg shadow-slate-400': isScroll }">
      <Navbar />
    </div>
    <main class="flex-1 mt-[80px] md:mt-[133px] main-layout">
      <router-view />
    </main>
    <Footer />
  </div>
</template>


<style scoped>
  @media (min-width: 768px) and (max-width: 903px) {
    .main-layout {
      margin-top: 190px !important;
    }
  }
</style>