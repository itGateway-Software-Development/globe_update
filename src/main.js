import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "swiper/css";
import 'flowbite'
import { initGlobalComponents } from './plugins/components';

const app = createApp(App)

initGlobalComponents(app)

app.use(router).use(ElementPlus).mount('#app')
