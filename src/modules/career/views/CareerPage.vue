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
    <Container className="px-0 2xl:px-36">
        <img class="w-full h-[400px] object-cover" src="@/assets/images/careersbanner.jpg" alt="">

        <div class="mt-5 pb-20 flex flex-col gap-8">
            <CareerCard v-for="(career, index) in careers" :key="index" :career="career" />
        </div>
    </Container>
</template>