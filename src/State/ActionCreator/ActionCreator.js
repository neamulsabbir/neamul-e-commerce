import {
  ADD_TO_CART,
  ADD_WISH_LIST,
  CLEAR_FILTER_ITEM,
  CLEAR_FROM_CART,
  CLOSE_SIDEBAR,
  DASHBOARD_PRODUCT,
  DELETE_PRODUCT_FROM_CART,
  GET_CATEGORIES_PRODUCT,
  GET_COLOR_CATEGORY,
  GET_PRODUCT,
  GET_PRODUCT_DETAIL,
  OPEN_SIDEBAR,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
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
export const clearFromCart = (data) => {
  return {
    type: CLEAR_FROM_CART,
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
export const removeToWishList = (data) => {
  return {
    type: REMOVE_FROM_WISHLIST,
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

export const getDashboardProductData = data => {
  return{
    type: DASHBOARD_PRODUCT,
    payload: data
  }
}

export const clearFilterItem = data => {
  return{
    type: CLEAR_FILTER_ITEM,
    payload: data
  }
}