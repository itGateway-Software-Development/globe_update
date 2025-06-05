import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getSeries = () => {
    const xppen_series = ref([]);
    const errors = ref();

    const load = async(cate_slug) => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "xp-pens-series/" + cate_slug);

            if (response.status === 404) {
                throw new Error("page not found");
            }
            xppen_series.value = response.data.xppen_series;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {xppen_series, errors, load}
}

export default getSeries