import { getCategoriesProduct } from "../ActionCreator/ActionCreator"


export const getCategoriesProductData = (name) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/products/${name}`)
        const data = await res.json()
        
        // let product
        // for(const pd of data){
        //     product = pd
        // }
        if(data.length){
            dispatch(getCategoriesProduct(data))
        }
        // console.log(product);
    }
}