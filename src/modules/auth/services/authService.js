import { api } from "@/utils/api";
import axios from "axios";

export const register = async (payload) => {
    try {
        const respose = await axios.post(api + "register", payload);
        return respose;
    } catch (error) {
        console.log(error);
        return {oK: false, message: error?.response?.data?.message};
    }
}

export const login = async (payload) => {
    try {
        const respose = await axios.post(api + "login", payload);
        return respose;
    } catch (error) {
        console.log(error);
        return {oK: false, message: error?.response?.data?.message};
    }
}