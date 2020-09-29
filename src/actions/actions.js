export const addNewProduct = (product) => {
    if (product.amount) {
        return {
            type: "ADD_TO_CART",
            payload: {
                ...product,
                amount: 1
            }
        }
    } else if (product.amount > 1) {
        return {
            type: "ADD_TO_CART",
            payload: {
                ...product,
                amount: product.amount
            }
        }
    }
}
export const removeProduct = (product) => {
    return {
        type: "REMOVE_CART",
        payload: product
    }
}