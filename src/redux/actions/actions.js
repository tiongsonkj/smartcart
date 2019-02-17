import { ADD_TO_CART, EMPTY_CART } from './types';

export const addToCart = data => {   
    return {
        type: ADD_TO_CART,
        data
    }
}

export const clearCart = () => {
    return {
        type: EMPTY_CART
    }
}