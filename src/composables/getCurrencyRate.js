import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getCurrencyRate = () => {
    const usd_mmk_rate = ref([]);
    const errors = ref();

    const load = async() => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "usd-mmk-rate");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            usd_mmk_rate.value = response.data.rate;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {usd_mmk_rate, errors, load}
}

export default getCurrencyRate