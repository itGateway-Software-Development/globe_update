import addToCart from "@/utils/addToCart";
import { ref } from "vue";

// 🛑 Move cartItems outside to make it GLOBAL shared
const cartItems = ref(addToCart.getCart());

const refreshCart = () => {
    cartItems.value = addToCart.getCart();
};

const addProduct = (product, variation_id) => {
    const result = addToCart.add(product, variation_id);

    if (result.ok) {
        refreshCart();
    }

    return result;
};

const clearCart = () => {
    addToCart.clearCart();
    refreshCart();
};

const removeCartItem = (id, sku) => {
    addToCart.removeCartItem(id, sku);
    refreshCart();
};

const existsInCart = (id, sku) => {
    return cartItems.value.some(item => {
        if(item.is_attribute) {
            return item.id === id && item.variations.sku === sku
        } else {
            return item.id === id && item.sku === sku
        }
    });
};

const increaseQuantity = (id, sku) => {
    addToCart.increaseQuantity(id, sku);
    refreshCart();
};

const decreaseQuantity = (id, sku) => {
    addToCart.decreaseQuantity(id, sku);
    refreshCart();
};


const useCart = () => {
    return { cartItems, refreshCart, addProduct, clearCart, removeCartItem, existsInCart, increaseQuantity, decreaseQuantity };
};

export default useCart;
