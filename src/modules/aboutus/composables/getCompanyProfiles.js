import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getCompanyProfiles = () => {
    const profiles = ref([]);
    const errors = ref();

    const load = async() => {
        // generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "company-profiles");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            profiles.value = response.data;
            // generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {profiles, errors, load}
}

export default getCompanyProfiles