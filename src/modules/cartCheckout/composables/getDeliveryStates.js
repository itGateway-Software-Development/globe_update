import axios from "axios";
import {api} from '@/utils/api'
import { ref } from "vue"

let getDeliveryStates = () => {
    const states = ref([]);
    const errors = ref();

    const load = async() => {
        try {
            let response = await axios.get(api + "delivery-states");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            states.value = response.data;
        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {states, errors, load}
}

export default getDeliveryStates;