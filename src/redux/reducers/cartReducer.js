import { ADD_TO_CART, EMPTY_CART } from '../actions/types';

const initialState = {
    items: 0,
    totalPrice: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            state.totalPrice = state.totalPrice + action.data.price;
            state.items = state.items + action.data.quantity;
            return {
                ...state,
            }
        case EMPTY_CART:
            return {
                items: 0,
                totalPrice: 0
            };
        default: 
            return state;
    }
}