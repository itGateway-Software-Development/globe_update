import { api } from "@/utils/api";
import axios from "axios";

export const submit = (payload, id) => {
    const formData = new FormData();
    formData.append("user_id", id ?? null);
    formData.append("name", payload.name);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("city", payload.city);
    formData.append("state", payload.state);
    formData.append("zip_code", payload.zip_code);
    formData.append("address", payload.address);
    formData.append("state_id", payload.state_id);
    formData.append("city_id", payload.city_id);
    formData.append("shipping_fee", payload.shipping_fee);
    formData.append("payment_method", payload.payment_method);
    formData.append("bank_account_id", payload.bank_account_id);
    formData.append("payment_slip", payload.payment_slip);
    formData.append("rate", payload.rate);
    formData.append("total_qty", payload.total_qty);
    formData.append("subtotal_mmk", payload.subtotal_mmk);
    formData.append("cart_items", JSON.stringify(payload.cart_items));

    let response = axios.post(api + "order", formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        }
                    });

    return response;
}