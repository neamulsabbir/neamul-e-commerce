import { GET_PRODUCT } from "../ActionTypes/ActionTypes";

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {

switch(action.type){

    case GET_PRODUCT:
        return{
            ...state,
            products: action.payload,
        }

    default:
        return state
}

};

