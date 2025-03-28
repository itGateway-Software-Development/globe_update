import { defineStore } from "pinia";
import { ref } from "vue";

export const useGeneralStore = defineStore('generalStore', () => {
    const isPageLoading = ref(false);

    function toggleLoading () {
        isPageLoading.value = !isPageLoading.value;
    }

    return {isPageLoading, toggleLoading}
})