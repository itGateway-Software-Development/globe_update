import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getXpPenCategory = () => {
    const xp_pens_category = ref([]);
    const errors = ref();

    const load = async() => {
        // generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "xp-pens-category");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            xp_pens_category.value = response.data.categories;
            // generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {xp_pens_category, errors, load}
}

export default getXpPenCategory