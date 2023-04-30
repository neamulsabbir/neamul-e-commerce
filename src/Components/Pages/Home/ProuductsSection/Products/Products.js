import React, { useEffect } from 'react';
import Product from '../Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../../../../State/Thunk/getProductData';

const Products = () => {
    // const [products, setProducts] = useState([])
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(getProductData())
    },[])
    return (
        <div className='px-6 md:px-20 mx-auto '>
            {
                products.map(product => <Product pd={product}></Product>)
            }
        </div>
    );
};

export default Products;