import { getDashboardProductData } from "../ActionCreator/ActionCreator"

export const getDashboardProduct = (id) => {
    return async (dispatch,getState) => {
        const res = await fetch(`http://localhost:5000/dashboard/product/${id}`)
        const data = await res.json()

        dispatch(getDashboardProductData(data))
    }
}