<script setup>
    import Navbar from "@/components/layout/Navbar.vue";
    import Footer from "@/components/layout/Footer.vue"
</script>

<template>
  <div class="flex flex-col min-h-screen bg-sky-50">
    <Navbar />
    <main class="flex-1 mt-[133px]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
