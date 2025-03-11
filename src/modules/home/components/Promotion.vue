<template>
    <Container className="pt-24">
        <SectionHeader title="Promotion" link_name="View All" link="/" description="Here are top promotions for you" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
            <div class="col-span-1 overflow-hidden">
                <RouterLink to="/">
                    <img class="w-full rounded-lg hover:scale-110 duration-300" src="@/assets/images/promotion.jpg" alt="" />
                </RouterLink>
            </div>
            <div class="col-span-1 overflow-hidden">
                <RouterLink to="/">
                    <img class="w-full rounded-lg hover:scale-110 duration-300" src="@/assets/images/promotion.jpg" alt="" />
                </RouterLink>
            </div>
            <div class="col-span-1 overflow-hidden">
                <RouterLink to="/">
                    <img class="w-full rounded-lg hover:scale-110 duration-300" src="@/assets/images/promotion.jpg" alt="" />
                </RouterLink>
            </div>
            <div class="col-span-1 overflow-hidden">
                <RouterLink to="/">
                    <img class="w-full rounded-lg hover:scale-110 duration-300" src="@/assets/images/promotion.jpg" alt="" />
                </RouterLink>
            </div>
        </div>
    </Container>
</template>