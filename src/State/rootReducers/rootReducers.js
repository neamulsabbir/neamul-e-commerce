import { combineReducers } from "redux";
import { productReducer } from "../Reducers/productReducer";
import { categoriesProductReducer } from "../Reducers/categoriesProductReducer";
import { productDetailsReducer } from "../Reducers/productDetailReducer";
import { productCartReducer } from "../Reducers/productCartReducer";
import { sidebarReducer } from "../Reducers/sidebarReducer";
import { colorsProductReducer } from "../Reducers/colorsProductReducer";
import { dashboardProductReducer } from "../Reducers/dashboardProductReducer";

export const rootReducers = combineReducers({
    product: productReducer,
    categoriesProduct: categoriesProductReducer,
    productDetails: productDetailsReducer,
    colors : colorsProductReducer,
    cart: productCartReducer,
    sidebar: sidebarReducer,
    dashboardProduct : dashboardProductReducer,
});