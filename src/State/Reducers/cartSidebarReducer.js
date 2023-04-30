import { CART_SIDE_BAR } from "../ActionTypes/ActionTypes"

const initialState ={
    toggle: []
}

export const cartSidebarReducer = (state = initialState, action) => {
    switch(action.type){
        case CART_SIDE_BAR:
            return{
                ...state,
                toogle: action.payload
            }
        default:
            return state;
    }
}

