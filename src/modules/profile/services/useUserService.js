import { api } from "@/utils/api";
import axios from "axios";

const updateProfile = (payload, id, token) => {
    const formData = new FormData();
    formData.append("user_id", id);
    formData.append("name", payload.name);
    formData.append("profile_image", payload.profile_image);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("address", payload.address);
    formData.append("city", payload.city);
    formData.append("state", payload.state);
    formData.append("zip_code", payload.zip_code);
    let response = axios.post(api + "update-profile", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        }
    });

    return response;
}

const getOrders = async(id, token) => {
    let response = await axios.get(api + "orders/" + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if(response.data.ok) {
        return response.data.orders;
    }
}

export default {
    updateProfile,
    getOrders
}