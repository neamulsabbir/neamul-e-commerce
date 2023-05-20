import {
  CLEAR_FILTER_ITEM,
  GET_CATEGORIES_PRODUCT,
  SEND_PRODUCT_COLOR,
} from "../ActionTypes/ActionTypes";

const initialState = {
  categoriesProduct: [],
  filterColor: [],
};

export const categoriesProductReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CATEGORIES_PRODUCT:
      return {
        ...state,
        categoriesProduct: action.payload,
      };

    case SEND_PRODUCT_COLOR:

      const { color } = action.payload;
      
      let product = [];
      product = state.categoriesProduct.map((pd) =>
        pd?.products.filter((item) => item.color === color)
      );

      return {
        ...state,
        filterColor: product,
      };

    case CLEAR_FILTER_ITEM:
      return{
        ...state,
        filterColor: []
      }

    default:
      return state;
  }
};
