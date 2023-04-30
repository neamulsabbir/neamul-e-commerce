import { ADD_TO_CART, ADD_WISH_LIST, CART_SIDE_BAR, DELETE_PRODUCT_FROM_CART, GET_CATEGORIES_PRODUCT, GET_PRODUCT, GET_PRODUCT_DETAIL, REMOVE_FROM_CART } from "../ActionTypes/ActionTypes"

export const getProduct = data => {
    return{
        type: GET_PRODUCT,
        payload: data,
    }
}

export const getProductDetails = data => {
    return{
        type: GET_PRODUCT_DETAIL,
        payload: data,
    }
}

export const getCategoriesProduct = data => {
    return{
        type: GET_CATEGORIES_PRODUCT,
        payload: data,
    }
}

export const addToCart = data => {
    return{
        type: ADD_TO_CART,
        payload: data
    }
}
export const removeFromCart = data => {
    return{
        type: REMOVE_FROM_CART,
        payload: data
    }
}

export const deleteFromCart = data => {
    return{
        type: DELETE_PRODUCT_FROM_CART,
        payload: data
    }
}

export const addToWishList = data => {
    return{
        type: ADD_WISH_LIST,
        payload: data
    }
}

export const cartSideBar = data => {
    return{
        type: CART_SIDE_BAR,
        payload: data
    }
}