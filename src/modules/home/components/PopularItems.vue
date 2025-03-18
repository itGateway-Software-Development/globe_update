<script setup>
    const items = [
        {
            img: require('@/assets/images/popular/1.png'),
            title: "Earphone",
        },
        {
            img: require('@/assets/images/popular/2.png'),
            title: "Power Bank",
        },
        {
            img: require('@/assets/images/popular/3.png'),
            title: "Earphone",
        },
        {
            img: require('@/assets/images/popular/4.png'),
            title: "Tablet",
        },
        {
            img: require('@/assets/images/popular/5.png'),
            title: "Drawing Tablet",
        },
        {
            img: require('@/assets/images/popular/6.png'),
            title: "XP Pen Drawing Display",
        },
        // {
        //     img: require('@/assets/images/popular/7.png'),
        //     title: "Mouse",
        // },
        // {
        //     img: require('@/assets/images/popular/8.png'),
        //     title: "Speaker",
        // }
    ]

    const bgColors = ["#ebe2e1", "#807a79", "#949191", "#d5e0f2", "#dfd5f2", "#c8e8e5", "#ccba8f", "#c9a599"]
</script>

<template>
    <Container className="pt-28">
        <SectionHeader title="Popular Items" link_name="View All" link="/" />

        <div class="mt-8 grid grid-cols-3 lg:grid-cols-6 gap-14">
            <div class="col-span-1" v-for="(item, index) in items" :key="index">
                <RouterLink to="/">
                    <div :style="{ backgroundColor: bgColors[index] }" class="w-full max-h-[200px] group flex items-center justify-center rounded-lg p-4 shadow overflow-hidden">
                        <img class="group-hover:scale-110 duration-300" :src="item.img" alt="">
                    </div>
                    <p class="text-center mt-2 text-base px-2">{{item.title}}</p>
                </RouterLink>
            </div>
        </div>
    </Container>
</template>