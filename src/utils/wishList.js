import axios from "axios"
import { api } from "./api"
import { useWishListStore } from "@/store/useWishListStore"
import LocalStorage from "./localstorage"
import { warning } from "./sweetalert"
import { storeToRefs } from "pinia"

const user = LocalStorage.get('user')
const token = LocalStorage.get('token')

const getWishList = async () => {
    const wishListStore = useWishListStore();

    const {wishLists} = storeToRefs(wishListStore)

    if (!user || !user.id || !token) {
        console.warn("User or token not found.");
        return;
    }

    try {
        const response = await axios.get(`${api}wishlists/${user.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const wishlistItems = response.data.wishlists ?? []; // fallback to empty array
        wishLists.value = [];

        wishListStore.addToWishList(wishlistItems);

    } catch (error) {
        console.error("Failed to fetch wishlist:", error);
    }
}

const storeWishList = async (product) => {
    if (!token) {
       warning('Please login first').then((result) => {
           if(result.isConfirmed) {
               window.location.href = '/login';
           }
       });
       return {ok: false, message: 'unauthenticated'};
    }

    const wishListStore = useWishListStore();

    try {
        const response = await axios.post(`${api}add-to-wishlist`, product, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        wishListStore.addToWishList(response.data.wishlists);
        return response.data;
    } catch (error) {
        console.error("Failed to store wishlist:", error);
    }
}

const removeWishList = async (id, type) => {
    const wishListStore = useWishListStore();
    try {
        const response = await axios.delete(`${api}remove-from-wishlist/${id}/${type}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        wishListStore.addToWishList(response.data.wishlists);
        return response.data;
    } catch (error) {
        console.error("Failed to store wishlist:", error);
    }
}


export default {
    getWishList,
    storeWishList,
    removeWishList
}
