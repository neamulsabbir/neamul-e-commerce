import { GET_CATEGORIES_PRODUCT } from "../ActionTypes/ActionTypes";

const initialState = {
    categoriesProduct: []
}

export const categoriesProductReducer = (state = initialState, action) => {
    
    switch(action.type){

        case GET_CATEGORIES_PRODUCT:
            return{
                ...state,
                categoriesProduct: action.payload,
            }

        default:
            return state;
    }
}