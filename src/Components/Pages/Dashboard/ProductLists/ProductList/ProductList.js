import React from 'react';
import { Link } from 'react-router-dom';
import {FaEdit, FaTrashAlt, FaTrashRestoreAlt, FaUpload,} from "react-icons/fa";
import ProductPrice from '../../../Home/ProuductsSection/ProductDetails/ProductPrice/ProductPrice';

const ProductList = ({product}) => {
    // console.log(product);
    return (
        <div className='border-2 border-gray-200 rounded-md my-5'>
            <div className=' mt-3 ml-4 text-white inline-block bg-black px-3 py-1 rounded-md '>
                <div className='flex items-center text-sm'>
                    <Link  to= {`/dashboard/add-product/${product?._id}`}>Add Product</Link>
                    <FaUpload className='ml-2'/>
                </div>
            </div>
            <h1 className='text-center text-lg'>Products of <span className='font-bold'>{product?.items}</span></h1>
            <div className='p-5 flex flex-col items-center'>
                
                    <img className='w-[550px] mb-5' src={product?.banner} alt=""/>
                    
        
                <div className='grid grid-cols-6 gap-4 overflow-y-scroll h-[360px]'>
                    {
                        product?.products.map((pd,i) => 
                        <div className=' p-2  rounded-md border-2 border-gray-200 '>
                            <div className='' key={i}>
                                <img className='w-44 rounded-sm' src={pd?.image} alt=""/>
                                <h1 className='mt-2'>{pd?.title.length > 10 ? pd?.title.slice(0,15) + '...' : pd?.title}</h1>
                                <h1>Color: {pd?.color}</h1>
                                <ProductPrice></ProductPrice>
                            </div>
                            <div className='flex justify-between text-lg'>
                                <FaEdit />
                                <FaTrashAlt className='text-red-500' />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductList;