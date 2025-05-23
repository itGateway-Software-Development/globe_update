import LocalStorage from "./localstorage";
import { warning } from "./sweetalert";

const CART_KEY = "cart"; // cart key in local storage

const addToCart = {
    add: (product, variation_id) => {

        // Get existing cart or empty array
        let cart = LocalStorage.get(CART_KEY) || [];

        if(product.is_attribute) {
            let currentVariation = product.variations.find(variation => variation.id == variation_id);
            let productToAdd = {
                ...product,
                variations: currentVariation,
            };
            cart.push({ ...productToAdd, quantity: 1 });
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        // Save back to localStorage
        LocalStorage.store(CART_KEY, cart);

        return { ok: true, message: "Product added to cart" };
    },

    getCart: () => {
        return LocalStorage.get(CART_KEY) || [];
    },

    removeCartItem: (id, sku) => {
        let cart = LocalStorage.get(CART_KEY) || [];
        cart = cart.filter(item => {
            if(item.is_attribute) {
                return item.id !== id || item.variations.sku !== sku;
            } else {
                return item.id !== id || item.sku !== sku;
            }
        });
        LocalStorage.store(CART_KEY, cart);
    },

    clearCart: () => {
        LocalStorage.remove(CART_KEY);
    },

    increaseQuantity: (id, sku) => {
        let cart = LocalStorage.get(CART_KEY) || [];
        cart = cart.map(item => {
            if(item.is_attribute) {
                if(item.id === id && item.variations.sku === sku) {
                    let itemQty = item.variations.qty;
                    let increasedCartQty = item.quantity + 1;

                    if(itemQty < increasedCartQty) { 
                        warning('Maximun quantity reached');
                        return { ...item, quantity: item.quantity };
                    } else {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                } else {
                    return item;
                }
            } else {
                if(item.id === id && item.sku === sku) {
                    let itemQty = item.qty;
                    let increasedCartQty = item.quantity + 1;

                    if(itemQty < increasedCartQty) {
                        warning('Maximun quantity reached');
                        return { ...item, quantity: item.quantity };
                    } else {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                } else {
                    return item;
                }
            }
        });
        LocalStorage.store(CART_KEY, cart);
    },

    decreaseQuantity: (id, sku) => {
        let cart = LocalStorage.get(CART_KEY) || [];
        cart = cart.map(item => {
            if(item.is_attribute) {
                if(item.id === id && item.variations.sku === sku) {
                    if(item.quantity === 1)  {
                        return { ...item, quantity: 1 };
                    }
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            } else {
                if(item.id === id && item.sku === sku) {
                    if(item.quantity === 1)  {
                        return { ...item, quantity: 1 };
                    }
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            }
        });
        LocalStorage.store(CART_KEY, cart);
    }
};

export default addToCart;
