import { api } from "@/utils/api";
import axios from "axios";

export const sendMessage = async(payload) => {
    try {
        const respose = await axios.post(api + "send-message", payload);
        return respose;
    } catch (error) {
        console.log(error);
        return {oK: false, message: error?.response?.data?.message};
    }
}