import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getProducts = () => {
    const products = ref([]);
    const brands = ref([]);
    const attributes = ref([]);
    const errors = ref();

    const load = async(category_slug) => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "products/" + category_slug);

            if (response.status === 404) {
                throw new Error("page not found");
            }
            products.value = response.data.products;
            brands.value = response.data.brands;
            attributes.value = response.data.attributes;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {products, brands,attributes, errors, load}
}

export default getProducts