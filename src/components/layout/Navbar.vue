<script setup>
import {
  PhoneCall,
  Search,
  ShoppingCart,
  Heart,
  CircleUserRound,
} from "lucide-vue-next";
import { ref } from "vue";
import { useRouter } from "vue-router";
import CategoryMenus from "../navDropdown/CategoryMenus.vue";
import AdreamerMenus from "../navDropdown/AdreamerMenus.vue";
import XpMenus from "../navDropdown/XpMenus.vue";
import GlobeSolorMenus from "../navDropdown/GlobeSolorMenus.vue";
import GroupMenus from "../navDropdown/GroupMenus.vue";
import AboutusMenus from "../navDropdown/AboutusMenus.vue";

const searchInput = ref("");
const isScroll = ref(false);
const router = useRouter();

const getCurrentRoute = () => {
  let route_segment = router.currentRoute.value.path.split('/').filter(Boolean);
  return route_segment[0] || '/';
}

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { 
      isScroll.value = true;
    } else {
      isScroll.value = false
    }

  });


</script>
<template>
  <header :class="`fixed top-0 left-0 w-full z-[999] bg-sky-50 duration-300 ${isScroll ? 'shadow-lg shadow-slate-400' : ''}`">
    <Container>
        <nav class="py-3  flex justify-between items-center">
            <!-- logo  -->
            <div class="flex items-center gap-10">
              <RouterLink to="/">
                <img
                  class="w-16 object-cover"
                  src="@/assets/images/logo.png"
                  alt=""
                />
              </RouterLink>
      
              <div>
                <RouterLink to="/" class="flex items-center gap-2">
                  <div class="phone-icon">
                    <PhoneCall :size="18" :strokeWidth="3" />
                  </div>
                  <span class="text-base">Call us: <b>+959 880 441 046</b></span>
                </RouterLink>
              </div>
            </div>
      
            <!-- search box  -->
            <div>
              <div class="relative">
                <input
                  type="text"
                  class="border border-slate-400 rounded-lg px-5 pe-14 py-[6px] w-full text-slate-700 placeholder:italic placeholder:text-sm focus:outline-none min-w-[600px]"
                  v-model="searchInput"
                  placeholder="Search..."
                />
                <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search :size="19" class="text-sky-700" />
                </div>
              </div>
            </div>
      
            <!-- contact  -->
            <div class="flex items-center gap-4">
              <RouterLink to="#" class="flex gap-2 items-center cursor-pointer group">
                <ShoppingCart :size="24" />
                <span
                  class="relative text-xs text-white flex items-center justify-center bg-sky-400 px-[5px] py-[3px] rounded before:absolute before:w-0 before:h-0 before:border-8 before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-sky-400 before:border-solid before:-left-[12px] group-hover:scale-110 transition-transform"
                  >0</span
                >
              </RouterLink>
              <RouterLink to="#" class="flex gap-2 items-center cursor-pointer group">
                <Heart :size="24" />
                <span
                  class="relative text-xs text-white flex items-center justify-center bg-sky-400 px-[5px] py-[3px] rounded before:absolute before:w-0 before:h-0 before:border-8 before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-sky-400 before:border-solid before:-left-[12px] group-hover:scale-110 transition-transform"
                  >0</span
                >
              </RouterLink>
              <CircleUserRound :size="24" />
            </div>
          </nav>
    </Container>

    <nav :class="`w-full h-[45px] bg-sky-400 flex justify-center`">
      <ul class="flex items-center justify-center gap-8">
        <li>
            <RouterLink to="/">
                <span :class="`font-bold text-[17px]  hover:text-slate-700 ${getCurrentRoute() === '/' ? 'text-slate-700' : 'text-white'}`">Home</span>
            </RouterLink>
        </li>
        <li
          class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
          <span class="font-bold group-hover:text-slate-700 text-[17px] text-white">Category</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-4 text-white transition-transform duration-300 group-hover:text-slate-700 group-hover:rotate-180"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <CategoryMenus />
        </li>
        <li
          class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
          <span class="font-bold group-hover:text-slate-700 text-[17px] text-white">Adreamer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-4 text-white transition-transform duration-300 group-hover:text-slate-700 group-hover:rotate-180"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <AdreamerMenus />
        </li>
        <li
            class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
            <span class="font-bold group-hover:text-slate-700 text-[17px] text-white">XP-Pen</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-4 text-white transition-transform duration-300 group-hover:text-slate-700 group-hover:rotate-180"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
            </svg>
            <XpMenus />
        </li>
        <li
            class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
            <span class="font-bold group-hover:text-slate-700 text-[17px] text-white">Globe Solar Solution</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-4 text-white transition-transform duration-300 group-hover:text-slate-700 group-hover:rotate-180"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
            </svg>
            <GlobeSolorMenus />
        </li>
        <li
            class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
            <span class="font-bold group-hover:text-slate-700 text-[17px] text-white">Group of Companies</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-4 text-white transition-transform duration-300 group-hover:text-slate-700 group-hover:rotate-180"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
            </svg>
            <GroupMenus />
        </li>
        <li>
            <RouterLink to="/career">
                <span :class="`font-bold text-lg ${getCurrentRoute() === 'career' ? 'text-slate-700' : 'text-white'} hover:text-slate-700`">Career</span>
            </RouterLink>
        </li>
        <li>
          <RouterLink to="/">
              <span :class="`font-bold text-[17px] text-white hover:text-slate-700`">Promotion</span>
          </RouterLink>
      </li>
        <li
            class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
            <span class="font-bold group-hover:text-slate-700 text-[17px] text-white">About Us</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-4 text-white transition-transform duration-300 group-hover:text-slate-700 group-hover:rotate-180"
            >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
            </svg>
            <AboutusMenus />
        </li>
      </ul>
    </nav>
  </header>
</template>
