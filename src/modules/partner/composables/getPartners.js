import { ref } from "vue"
import { useGeneralStore } from "@/store/useGeneralStore";
import axios from "axios";
import { api } from "@/utils/api";

const generalStore = useGeneralStore();

const getPartners = () => {
    const partners = ref([]);
    const partner_heading = ref({})
    const errors = ref();

    const load = async() => {
        generalStore.toggleLoading();
        try {
            let response = await axios.get(api + "partners" );

            if (response.status === 404) {
                throw new Error("page not found");
            }
            partners.value = response.data.partners;
            partner_heading.value = response.data.partner_heading;
            generalStore.toggleLoading();

        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {partners, partner_heading,  errors, load}
}

export default getPartners