<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { onMounted, ref } from "vue";
import CarouselNavigationBtn from "../../../components/common/CarouselNavigationBtn.vue";
import getSliders from "../composable/getSliders";

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

const { sliders, error, load } = getSliders();

onMounted(async() => {
    await load()
})

</script>

<template>
  <div class="relative" v-if="sliders.length > 0">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :speed="300"
      :autoplay="true"
      :scrollbar="{ draggable: true }"
      :loop="true"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(slider, index) in sliders" :key="index">
        <img class="w-full h-full xl:h-[500px]  2xl:h-[700px] object-fill md:object-cover carousel-images" :src="slider.image" alt="" />
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
