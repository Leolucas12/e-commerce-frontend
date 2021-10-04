export const setCart = (products) => {
    return {
        type: "SET_CART",
        payload: products
    }
}