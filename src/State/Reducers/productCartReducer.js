import { ADD_TO_CART, ADD_WISH_LIST, DELETE_PRODUCT_FROM_CART, REMOVE_FROM_CART } from "../ActionTypes/ActionTypes"

const initialState = {
    cart:[],
    wishlist:[]
}
export const productCartReducer = (state = initialState, action) => {

    // console.log(action.payload);
    const selectedProduct = state.cart.find(pd => pd.slug === action.payload.slug)
    const selectedWishlist = state.wishlist.find(pd => pd.slug === action.payload.slug)
    // console.log(selectedProduct);

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

        case REMOVE_FROM_CART:
            if(selectedProduct.quantity > 1){
                const newProduct = state.cart.filter(pd => pd.slug !== selectedProduct.slug)
                selectedProduct.quantity = selectedProduct.quantity - 1
                return{
                    ...state,
                    cart: [...newProduct, selectedProduct]
                }
            }
            
            return{
                ...state,
                cart: state.cart.filter(pd => pd.slug !== action.payload.slug)
            }
        
        case ADD_WISH_LIST:
            return {
                ...state,
                wishlist: action.payload
            }
            // case DELETE_PRODUCT_FROM_CART:
            //     return{
            //         ...state,
            //         cart: state.cart.filter(pd => pd.slug !== action.payload.slug)
            //     }

        default:
            return state
    }
}