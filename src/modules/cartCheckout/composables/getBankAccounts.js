import axios from "axios";
import {api} from '@/utils/api'
import { ref } from "vue"

let getBankAccounts = () => {
    const accounts = ref([]);
    const errors = ref();

    const load = async() => {
        try {
            let response = await axios.get(api + "bank-accounts");

            if (response.status === 404) {
                throw new Error("page not found");
            }
            accounts.value = response.data;
        } catch (error) {
            errors.value = error;
            console.log(error);
        }
    }

    return {accounts, errors, load}
}

export default getBankAccounts;