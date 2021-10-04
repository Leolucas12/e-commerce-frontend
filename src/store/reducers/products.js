const INITAL_STATE = {
    products: []
};

export function productssReducer(state = INITAL_STATE, { type, payload }) {
    if (type === "SET_PRODUCTS") {
        return {
            ...state,
            products: payload
        };
    }
    return state;
}