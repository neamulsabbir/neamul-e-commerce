import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../../../State/Thunk/getProductData';
import DashboardProduct from './DashboardProduct/DashboardProduct';

const DashboardProducts = () => {
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getProductData())
    },[dispatch])
    return (
        <div className='p-5'>
            {
                products.map((product,i) => <DashboardProduct product={product} key={i} />)
            }
        </div>
    );
};

export default DashboardProducts;