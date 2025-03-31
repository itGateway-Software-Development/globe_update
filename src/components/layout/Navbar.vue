<script setup>
import {
  PhoneCall,
  Search,
  ShoppingCart,
  Heart,
  CircleUserRound,
  AlignJustify,
} from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import CategoryMenus from "../navDropdown/CategoryMenus.vue";
import AdreamerMenus from "../navDropdown/AdreamerMenus.vue";
import XpMenus from "../navDropdown/XpMenus.vue";
import GlobeSolorMenus from "../navDropdown/GlobeSolorMenus.vue";
import GroupMenus from "../navDropdown/GroupMenus.vue";
import AboutusMenus from "../navDropdown/AboutusMenus.vue";

const searchInput = ref("");
const isSearch = ref(false);
const isScroll = ref(false);
const router = useRouter();
const searchBox = ref(null);

const getCurrentRoute = () => {
  let route_segment = router.currentRoute.value.path.split("/").filter(Boolean);
  return route_segment[0] || "/";
};

const handleClickOutside = (event) => {
      if (searchBox.value && !searchBox.value.contains(event.target)) {
        isSearch.value = false;
      }
    };

  onMounted(() => {
        document.addEventListener("click", handleClickOutside);
      });

      onUnmounted(() => {
        document.removeEventListener("click", handleClickOutside);
      });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      isScroll.value = true;
    } else {
      isScroll.value = false;
    }
  });

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
        
    ]
</script>


<template>
  <header
    :class="` ${
      isScroll ? 'shadow-lg shadow-slate-400' : ''
    }`"
  >
    <Container>
      <nav class="py-0 flex justify-between items-center">
        <!-- drawer  -->
        <div class="flex gap-4 md:hidden">
          <AlignJustify class="cursor-pointer" data-drawer-target="menu-drawer" data-drawer-show="menu-drawer" aria-controls="menu-drawer" />
        

          <!-- drawer component -->
          <div id="menu-drawer" class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-64 " tabindex="-1" aria-labelledby="menu-drawer-label">
            <h5 id="menu-drawer-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
            <button type="button" data-drawer-hide="menu-drawer" aria-controls="menu-drawer" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
          <div class="py-4 overflow-y-auto">
              <ul class="space-y-2 font-medium">
                  <li>
                    <RouterLink to="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span class="ms-3 group-hover:text-white">Home</span>
                    </RouterLink>
                  </li>
                  <li>
                    <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                          <svg class="shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                              <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                          </svg>
                          <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap group-hover:text-white">Category</span>
                          <svg class="w-3 h-3 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                          </svg>
                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                          <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-white">Laptop</a>
                          </li>
                          <li>
                              <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-white">Tablet</a>
                          </li>
                    </ul>
                  </li>
              </ul>
            </div>
          </div>

          <Search />
        </div>


        <!-- logo  -->
        <div class="flex items-center gap-10">
          <RouterLink to="/">
            <img
              class="w-20 md:w-24 object-cover"
              src="@/assets/images/logo.png"
              alt=""
            />
          </RouterLink>

          <div class="hidden lg:block">
            <RouterLink to="/" class="flex items-center gap-2">
              <div class="phone-icon">
                <PhoneCall :size="18" :strokeWidth="3" />
              </div>
              <span class="text-base">Call us: <b>+959 880 441 046</b></span>
            </RouterLink>
          </div>
        </div>

        <!-- search box  -->
        <div class="hidden md:block">
          <div ref="searchBox" class="relative">
            <input
              type="text"
              @focus="isSearch = true"
              class="border border-slate-400 rounded-lg px-5 pe-14 py-[6px] w-full text-slate-700 placeholder:italic placeholder:text-sm focus:outline-none min-w-[400px]   xl:min-w-[600px]"
              v-model="searchInput"
              placeholder="Search..."
            />
            <div class="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search :size="19" class="text-sky-700" />
            </div>

            <!-- box info  -->
            <div
              v-if="isSearch"
              class="absolute top-11 left-0 w-full bg-white border border-slate-400 rounded-lg p-5 z-[9999] shadow-lg"
            >
              <div class="mb-8">
                <h3 class="font-semibold">Trending Now</h3>
                <hr>
                <div class="flex gap-3 mt-3">
                  <RouterLink
                    to="#"
                    class="flex items-center gap-2 text-slate-600 hover:text-sky-600 bg-slate-200 py-1 px-2 rounded-lg"
                  >
                    <Search :size="17" class="text-slate-700" />
                    <span class="text-sm text-slate-600">Power Bank</span>
                  </RouterLink>
                  <RouterLink
                    to="#"
                    class="flex items-center gap-2 text-slate-600 hover:text-sky-600 bg-slate-200 py-1 px-2 rounded-lg"
                  >
                    <Search :size="17" class="text-slate-700" />
                    <span class="text-sm text-slate-600">Power Bank</span>
                  </RouterLink>
                  <RouterLink
                    to="#"
                    class="flex items-center gap-2 text-slate-600 hover:text-sky-600 bg-slate-200 py-1 px-2 rounded-lg"
                  >
                    <Search :size="17" class="text-slate-700" />
                    <span class="text-sm text-slate-600">Power Bank</span>
                  </RouterLink>
                </div>
              </div>
              <div class="mb-5">
                <h3 class="font-semibold">Popular Products</h3>
                <hr>
                <div class="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-3">
                  <div class="col-span-1" v-for="(item, index) in items" :key="index">
                      <RouterLink to="/">
                          <div class="w-full max-h-[150px] bg-slate-200 group flex items-center justify-center rounded-lg p-4 shadow overflow-hidden">
                              <img class="group-hover:scale-110 duration-300" :src="item.img" alt="">
                          </div>
                          <p class="text-center mt-2 text-base px-2">{{item.title}}</p>
                      </RouterLink>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        <!-- contact  -->
        <div class="flex items-center gap-2 md:gap-4">
          <RouterLink
            to="#"
            class="flex gap-2 items-center cursor-pointer group"
          >
            <ShoppingCart :size="24" />
            <span
              class="relative text-xs text-white flex items-center justify-center bg-sky-400 px-[5px] py-[3px] rounded before:absolute before:w-0 before:h-0 before:border-8 before:border-t-transparent before:border-l-transparent before:border-b-transparent before:border-r-sky-400 before:border-solid before:-left-[12px] group-hover:scale-110 transition-transform"
              >0</span
            >
          </RouterLink>
          <RouterLink
            to="#"
            class="flex gap-2 items-center cursor-pointer group"
          >
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

    <nav :class="`w-full py-4 lg:py-0 h-auto lg:h-[45px] bg-sky-400 justify-center hidden md:flex`">
      <ul class="flex items-center justify-center gap-5 2xl:gap-8 flex-wrap">
        <li>
          <RouterLink to="/">
            <span
              :class="`font-bold text-[14px] xl:text-[17px]  hover:text-slate-700 ${
                getCurrentRoute() === '/' ? 'text-slate-700' : 'text-white'
              }`"
              >Home</span
            >
          </RouterLink>
        </li>
        <li
          class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
          <span
            class="font-bold group-hover:text-slate-700 text-[14px] xl:text-[17px] text-white"
            >Category</span
          >
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
          <span
            class="font-bold group-hover:text-slate-700 text-[14px] xl:text-[17px] text-white"
            >Adreamer</span
          >
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
          <span
            class="font-bold group-hover:text-slate-700 text-[14px] xl:text-[17px] text-white"
            >XP-Pen</span
          >
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
          <span
            class="font-bold group-hover:text-slate-700 text-[14px] xl:text-[17px] text-white"
            >Globe Solar Solution</span
          >
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
        <li>
          <RouterLink to="/promotion">
            <span
              :class="`font-bold text-[14px] xl:text-[17px] ${
                getCurrentRoute() === 'promotion' ? 'text-slate-700' : 'text-white'
              } hover:text-slate-700`"
              >Promotion</span
            >
          </RouterLink>
        </li>
        <!-- <li
          class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
          <span
            class="font-bold group-hover:text-slate-700 text-[14px] xl:text-[17px] text-white"
            >Group of Companies</span
          >
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
        </li> -->
        <li>
          <RouterLink to="/career">
            <span
              :class="`font-bold text-[14px] xl:text-[17px] ${
                getCurrentRoute() === 'career' ? 'text-slate-700' : 'text-white'
              } hover:text-slate-700`"
              >Career</span
            >
          </RouterLink>
        </li>

        <li
          class="flex items-center gap-1 group cursor-pointer duration-150 relative"
        >
          <span
            class="font-bold group-hover:text-slate-700 text-[14px] xl:text-[17px] text-white"
            >About Us</span
          >
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
