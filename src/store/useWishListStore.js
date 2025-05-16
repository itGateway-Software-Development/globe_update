import { defineStore } from "pinia";
import { ref } from "vue";

export const useWishListStore = defineStore('wishListStore', () => {
    const wishLists = ref([]);

    function addToWishList(wishlists) {
        wishLists.value = wishlists;
    }

    return { wishLists, addToWishList }
});