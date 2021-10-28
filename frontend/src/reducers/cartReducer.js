import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/types";

function cartReducer(state = { cartItems: [] }, action) {
    const { type, payload } = action;
    switch (type) {
        case CART_ADD_ITEM:
            const item = payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => (x.id === existItem.id ? item : x)),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.id !== payload),
            };
        default:
            return state;
    }
}

export default cartReducer;
