import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getCategoryList = () => {
    const category_lists = ref([]);
    const errors = ref();

    const load = async() => {
        // generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "category-lists");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            category_lists.value = response.data.categories;
            // generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {category_lists, errors, load}
}

export default getCategoryList