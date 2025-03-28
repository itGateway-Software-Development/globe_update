import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getProducts = () => {
    const xppen_products = ref([]);
    const errors = ref();

    const load = async(category_slug) => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "xp-pen/" + category_slug);

            if (response.status === 404) {
                throw new Error("page not found");
            }
            xppen_products.value = response.data.products;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {xppen_products, errors, load}
}

export default getProducts