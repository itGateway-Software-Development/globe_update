import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getPromotions = () => {
    const promotions = ref([]);
    const errors = ref();

    const load = async(count = 0) => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "promotions?count="+ count);

            if (response.status === 404) {
                throw new Error("page not found");
            }
            promotions.value = response.data.promotions;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {promotions, errors, load}
}

export default getPromotions