import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetailsData } from '../../../../../../State/Thunk/getProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import RatingsAndSocialIcon from '../RatingsAndSocialIcon/RatingsAndSocialIcon';
import ProductPrice from '../ProductPrice/ProductPrice';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import AddToCartAndWishlist from '../AddToCartAndWishlist/AddToCartAndWishlist';
import warantty from "../../../../../../../src/Images/warranty.png";

const ProductDetails = () => {
    const {slug} = useParams()

    const products = useSelector(state => state.productDetails.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetailsData(slug))
    },[slug])

    return (
        <div className="w-11/12 mx-auto">
      <div className=" p-10 grid md:grid-cols-2 items-center md:items-start bg-white rounded-md border-t-2 border-gray-200 shadow-md my-10 md:my-20 overflow-hidden">
        <div className="border border-gray-200 rounded-md">
          <img className="w-80 mx-auto" src={products?.image} alt="" />
        </div>
        <div className="md:ml-20 mt-10 md:mt-0 w-full overflow-hidden	">
          <div className="">
            <h1 className="text-2xl font-semibold">{products?.title}</h1>
            <RatingsAndSocialIcon></RatingsAndSocialIcon>
            <div className="border border-gray-200 w-full"></div>
            <ProductPrice products={products}></ProductPrice>
          </div>
          <ProductQuantity></ProductQuantity>
          <AddToCartAndWishlist></AddToCartAndWishlist>
          <div className="flex items-center mt-8">
            <img className="w-3 h-5" src={warantty} alt="" />
            <div className=" ml-2">
              <h1 className="font-semibold">Return & Warranty</h1>
              <p className="text-xs">No Warranty Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;