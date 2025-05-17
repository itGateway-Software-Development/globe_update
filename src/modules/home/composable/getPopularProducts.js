import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getPopularProducts = () => {
    const products = ref([]);
    const errors = ref();

    const load = async() => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "popular-products");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            products.value = response.data.products;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {products, errors, load}
}

export default getPopularProducts