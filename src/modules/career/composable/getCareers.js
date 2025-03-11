import axios from "axios";
import {api} from '@/utils/api'
import { ref } from "vue"

let getCareers = () => {
    const careers = ref([]);
    const errors = ref();

    const load = async() => {
        try {
            let response = await axios.get(api + "careers");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            careers.value = response.data.careers;
        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {careers, errors, load}
}

export default getCareers;