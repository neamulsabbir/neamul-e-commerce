import {
  ADD_TO_CART,
  ADD_WISH_LIST,
  CLOSE_SIDEBAR,
  DELETE_PRODUCT_FROM_CART,
  GET_CATEGORIES_PRODUCT,
  GET_COLOR_CATEGORY,
  GET_PRODUCT,
  GET_PRODUCT_DETAIL,
  OPEN_SIDEBAR,
  REMOVE_FROM_CART,
  SEND_PRODUCT_COLOR,
} from "../ActionTypes/ActionTypes";

export const getProduct = (data) => {
  return {
    type: GET_PRODUCT,
    payload: data,
  };
};

export const getProductDetails = (data) => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: data,
  };
};

export const getCategoriesProduct = (data) => {
  return {
    type: GET_CATEGORIES_PRODUCT,
    payload: data,
  };
};
export const getColorCategoryData = (data) => {
  return {
    type: GET_COLOR_CATEGORY,
    payload: data,
  };
};

export const sendProductColor = data => {
  return{
    type: SEND_PRODUCT_COLOR,
    payload: data
  }
}

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};

export const deleteFromCart = (data) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: data,
  };
};

export const addToWishList = (data) => {
  return {
    type: ADD_WISH_LIST,
    payload: data,
  };
};

export const openSidebar = () => {
  return {
    type: OPEN_SIDEBAR,
  };
};
export const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};
