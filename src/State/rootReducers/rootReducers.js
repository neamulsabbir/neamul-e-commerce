import { combineReducers } from "redux";
import { productReducer } from "../Reducers/productReducer";
import { categoriesProductReducer } from "../Reducers/categoriesProductReducer";
import { productDetailsReducer } from "../Reducers/productDetailReducer";
import { productCartReducer } from "../Reducers/productCartReducer";
import { cartSidebarReducer } from "../Reducers/cartSidebarReducer";

export const rootReducers = combineReducers({
    product: productReducer,
    categoriesProduct: categoriesProductReducer,
    productDetails: productDetailsReducer,
    cart: productCartReducer,
    sidebar: cartSidebarReducer,
});