<script setup>
    import { onMounted } from 'vue';
import CareerCard from '../components/CareerCard.vue';
import getCareers from '../composable/getCareers';

    const {careers, errors, load} = getCareers();

    load();

    onMounted(() => {
        window.scrollTo(0,0)
    })
</script>

<template>
    <Container className="2xl:px-36 px-0">
        <img class="h-auto w-full object-cover xl:h-[400px]" src="@/assets/images/careersbanner.jpg" alt="">

        <div class="flex flex-col gap-8 mt-5 pb-20">
            <CareerCard v-for="(career, index) in careers" :key="index" :career="career" />
        </div>
    </Container>
</template>