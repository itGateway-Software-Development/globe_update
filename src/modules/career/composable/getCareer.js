import axios from "axios";
import {api} from '@/utils/api'
import { ref } from "vue"

let getCareer = () => {
    const career = ref([]);
    const errors = ref();

    const load = async(id) => {
        try {
            let response = await axios.get(api + "careers/" + id);

            if (response.status === 404) {
                throw new Error("page not found");
            }
            career.value = response.data.career;
        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {career, errors, load}
}

export default getCareer;