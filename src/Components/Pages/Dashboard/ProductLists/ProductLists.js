import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductList from './ProductList/ProductList';
import { getProductData } from '../../../../State/Thunk/getProductData';

const ProductLists = () => {
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getProductData())
    },[dispatch])
    return (
        <div className='px-4'>
            {
                products.map((product,i) => <ProductList product={product} key={i}></ProductList>)
            }
        </div>
    );
};

export default ProductLists;