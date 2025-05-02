import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getProduct = () => {
    const product = ref();
    const relatedProducts = ref();
    const errors = ref();

    const load = async(product_slug) => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "solar-product-detail/" + product_slug);

            if (response.status === 404) {
                throw new Error("page not found");
            }
            product.value = response.data.product;
            relatedProducts.value = response.data.related_products;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {product, relatedProducts, errors, load}
}

export default getProduct