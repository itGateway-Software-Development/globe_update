import { api } from "@/utils/api";
import axios from "axios";

export const submitCv = async (payload, id) => {
    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("cv", payload.cv);
    let respose = await axios.post(api + "submit-career/" + id, payload,  {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });

    return respose;
}