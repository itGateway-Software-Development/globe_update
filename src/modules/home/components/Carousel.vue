<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { ref } from "vue";
import CarouselNavigationBtn from "../../../components/common/CarouselNavigationBtn.vue";

const modules = [Scrollbar, Autoplay];
const swiperRef = ref(null);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};
const prev = () => {
  swiperRef.value.slidePrev();
};
const next = () => {
  swiperRef.value.slideNext();
};

const carousels = [
  require("@/assets/images/carousel/slider-1.jpg"),
  require("@/assets/images/carousel/slider-2.jpg"),
  require("@/assets/images/carousel/slider-3.jpg"),
  require("@/assets/images/carousel/slider-4.jpg"),
  require("@/assets/images/carousel/slider-5.jpg"),
  require("@/assets/images/carousel/slider-6.jpg"),
];
</script>

<template>
  <div class="relative">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :speed="300"
      :autoplay="true"
      :scrollbar="{ draggable: true }"
      :loop="true"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(image, index) in carousels" :key="index">
        <img class="w-full h-full xl:h-[500px]  2xl:h-[700px] object-fill md:object-cover carousel-images" :src="image" alt="" />
      </swiper-slide>
    </swiper>
    
   <CarouselNavigationBtn :prev="prev" :next="next" />
  </div>
</template>

<style scoped>
  @media (min-width: 1536px) and (max-width: 1836px) {
    .carousel-images {
      height: 590px !important;
    }
  }
</style>
