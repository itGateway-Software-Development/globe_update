import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "swiper/css";
import 'flowbite'
import { initGlobalComponents } from './plugins/components';
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// toast options
const options = {
    autoClose: 3000,
}

const app = createApp(App)

initGlobalComponents(app)

app.use(router).use(Vue3Toastify, options).use(ElementPlus).mount('#app')
