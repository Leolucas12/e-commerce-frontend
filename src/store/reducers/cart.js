let INITIAL_STATE = {
    products: [],
};

if (localStorage.getItem('shopping_cart') !== null) {
    INITIAL_STATE = {
        products: JSON.parse(localStorage.getItem('shopping_cart')),
    };
}

export function cartReducer(state = INITIAL_STATE, { type, payload }) {
    if (type === "SET_CART") {
        return {
            ...state,
            products: payload,
        };
    }
    return state;
}