<script setup>
import AdreamerSelection from '../components/AdreamerSelection.vue';
import Brands from '../components/Brands.vue';
import Carousel from '../components/Carousel.vue';
import HeadsetSelection from '../components/HeadsetSelection.vue';
import LaptopSelection from '../components/LaptopSelection.vue';
import PopularItems from '../components/PopularItems.vue';
import Promotion from '../components/Promotion.vue';
import SolarSolutionSection from '../components/SolarSolutionSection.vue';
import SpeakerSelection from '../components/SpeakerSelection.vue';
import TabletSelection from '../components/TabletSelection.vue';
import TechgadgetSelection from '../components/TechgadgetSelection.vue';
import XppenSelection from '../components/XppenSelection.vue';

</script>

<template>
    <div>
        <Carousel />
        <Promotion />
        <PopularItems />
        <!-- <XppenSelection />
        <AdreamerSelection />
        <SolarSolutionSection />
        <LaptopSelection />
        <TabletSelection />
        <HeadsetSelection />
        <SpeakerSelection />
        <TechgadgetSelection /> -->
        <Brands />
    </div>
</template>