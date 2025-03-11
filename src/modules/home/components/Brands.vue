<script setup>
    const logo = [
      {
        img: require("@/assets/images/logo/1.jpg"),
      },
      {
        img: require("@/assets/images/logo/2.jpg"),
      },
      {
        img: require("@/assets/images/logo/3.jpg"),
      },
      {
        img: require("@/assets/images/logo/4.jpg"),
      },
      {
        img: require("@/assets/images/logo/5.jpg"),
      },
      {
        img: require("@/assets/images/logo/6.jpg"),
      },
      {
        img: require("@/assets/images/logo/7.jpg"),
      },
      {
        img: require("@/assets/images/logo/8.jpg"),
      },
      {
        img: require("@/assets/images/logo/9.jpg"),
      },
      {
        img: require("@/assets/images/logo/10.jpg"),
      },
      {
        img: require("@/assets/images/logo/11.jpg"),
      },
      {
        img: require("@/assets/images/logo/12.jpg"),
      },
      {
        img: require("@/assets/images/logo/13.jpg"),
      },
      {
        img: require("@/assets/images/logo/14.jpg"),
      },
      {
        img: require("@/assets/images/logo/15.jpg"),
      },
      {
        img: require("@/assets/images/logo/16.jpg"),
      },
      {
        img: require("@/assets/images/logo/17.jpg"),
      },
      {
        img: require("@/assets/images/logo/18.jpg"),
      },
      {
        img: require("@/assets/images/logo/19.jpg"),
      },
      {
        img: require("@/assets/images/logo/20.jpg"),
      },
      {
        img: require("@/assets/images/logo/21.jpg"),
      },
      {
        img: require("@/assets/images/logo/22.jpg"),
      },
      {
        img: require("@/assets/images/logo/23.jpg"),
      },
      {
        img: require("@/assets/images/logo/24.jpg"),
      },
      {
        img: require("@/assets/images/logo/25.jpg"),
      },
      {
        img: require("@/assets/images/logo/26.jpg"),
      },
      {
        img: require("@/assets/images/logo/27.jpg"),
      },
      {
        img: require("@/assets/images/logo/28.jpg"),
      },
      {
        img: require("@/assets/images/logo/29.jpg"),
      },
      {
        img: require("@/assets/images/logo/30.jpg"),
      },
      {
        img: require("@/assets/images/logo/31.jpg"),
      },
      {
        img: require("@/assets/images/logo/32.jpg"),
      },
      {
        img: require("@/assets/images/logo/33.jpg"),
      },
      {
        img: require("@/assets/images/logo/34.jpg"),
      },
      {
        img: require("@/assets/images/logo/35.jpg"),
      },
      {
        img: require("@/assets/images/logo/36.jpg"),
      },
    ];
</script>

<template>
    <Container className="py-20">
        <SectionHeader title="Brands" description="Explore all available brands"  />

        <div class="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">
            <RouterLink to="/" class="col-span-1" v-for="(item,i) in logo" :key="i">
                <div class="p-3 rounded-lg overflow-hidden border border-slate-200 bg-white shadow hover:-translate-y-1 duration-200">
                    <img :src="item.img" alt="">
                </div>
            </RouterLink>
        </div>
    </Container>
</template>