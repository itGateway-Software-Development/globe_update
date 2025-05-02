import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getProducts = () => {
    const products = ref([]);
    const attributes = ref([]);
    const errors = ref();

    const load = async(category_slug) => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "solar/" + category_slug);

            if (response.status === 404) {
                throw new Error("page not found");
            }
            products.value = response.data.products;
            attributes.value = response.data.attributes;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {products, attributes, errors, load}
}

export default getProducts