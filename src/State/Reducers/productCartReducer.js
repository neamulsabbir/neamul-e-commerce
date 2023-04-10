import { ADD_TO_CART, ADD_WISH_LIST } from "../ActionTypes/ActionTypes"

const initialState = {
    cart:[],
    wishlist:[]
}
export const productCartReducer = (state = initialState, action) => {

    // console.log(action.payload);
    const selectedProduct = state.cart.find(pd => pd.slug === action.payload.slug)
    // const selectedwishList = state.wishlist.find(pd => pd.slug === action.payload.slug)
    console.log(selectedProduct);

    switch(action.type){

        case ADD_TO_CART:
            if(selectedProduct){
                const newProduct = state.cart.filter(pd => pd.slug !== selectedProduct.slug)
                selectedProduct.quantity = selectedProduct.quantity + 1
                return{
                    ...state,
                    cart: [...newProduct, selectedProduct]
                }
            }

            return{
                ...state,
                cart: [...state.cart, {...action.payload, quantity :1}]
            }

        case ADD_WISH_LIST:
            // if(selectedwishList){
            //     return{
            //         ...state,
            //         wishlist: action.payload
            //     }
            // }
            return{
                ...state,
                wishlist: [...state.wishlist, {...action.payload, wishlist: true}]
            }

        default:
            return state
    }
}