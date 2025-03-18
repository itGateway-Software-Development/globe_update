<template>
    <Container className="pt-24">
        <SectionHeader title="Promotion" link_name="View All" link="/" description="Here are top promotions for you" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14 mt-8">
            <div class="col-span-1 overflow-hidden">
                <RouterLink to="/" class="flex flex-col items-center gap-5"> 
                    <img class="w-full  rounded-lg hover:scale-110 duration-300" src="@/assets/images/promotion.jpg" alt="" />
                    <p class="text-center text-slate-700 text-base 2xl:text-lg font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et iure magnam odio quidem!
                    </p>
                </RouterLink>
            </div>
            <div class="col-span-1 overflow-hidden">
                <RouterLink to="/" class="flex flex-col items-center gap-5"> 
                    <img class="w-full  rounded-lg hover:scale-110 duration-300" src="@/assets/images/promotion.jpg" alt="" />
                    <p class="text-center text-slate-700 text-base 2xl:text-lg font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et iure magnam odio quidem! 
                    </p>
                </RouterLink>
            </div>
            <div class="col-span-1 overflow-hidden">
                <RouterLink to="/" class="flex flex-col items-center gap-5"> 
                    <img class="w-full  rounded-lg hover:scale-110 duration-300" src="@/assets/images/promotion.jpg" alt="" />
                    <p class="text-center text-slate-700 text-base 2xl:text-lg font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et iure magnam odio quidem!
                    </p>
                </RouterLink>
            </div>
        </div>
    </Container>
</template>