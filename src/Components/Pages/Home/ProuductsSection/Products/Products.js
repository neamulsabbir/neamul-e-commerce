import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../../../../State/Thunk/getProductData';
import Product from '../Product/Product';

const Products = () => {
    // const [products, setProducts] = useState([])
    const products = useSelector(state => state.product.products)
    const dispatch = useDispatch()

    // console.log(products);
    
    useEffect(() =>{
        dispatch(getProductData())
    },[dispatch])
    
    return (
        <div className='px-6 md:px-20 mx-auto '>
            {
                products.map((product,i) => <Product key={i} pd={product}></Product>)
            }
        </div>
    );
};

export default Products;