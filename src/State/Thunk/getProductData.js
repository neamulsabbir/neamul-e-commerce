import { getProduct } from "../ActionCreator/ActionCreator"

export const getProductData = () => {
    return async (dispatch,getState) => {
        const res = await fetch("http://localhost:5000/products")
        const data = await res.json()
console.log(data);
        if(data.length){
            dispatch(getProduct(data))
        }
    }
}