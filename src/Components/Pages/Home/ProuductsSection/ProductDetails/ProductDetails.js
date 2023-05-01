import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RatingsAndSocialIcon from "./RatingsAndSocialIcon/RatingsAndSocialIcon";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import AddToCartAndWishlist from "./AddToCartAndWishlist/AddToCartAndWishlist";
import { getProductDetailsData } from "../../../../../State/Thunk/getProductDetails";
import ProductWarranty from "./ProductWarranty/ProductWarranty";
import ProductDescription from "./ProductDescriptionFAQ/ProductDescription";

const ProductDetails = () => {
  const { slug } = useParams();

  const [currentItem, setCurrentItem] = useState({});
  

  const cartItems = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.productDetails.product);
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailsData(slug));
    setCurrentItem(
      cartItems.find(
        (item) => item.slug === slug
      )
    );
  }, [slug, cartItems]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="p-10 grid md:grid-cols-2 items-center md:items-start bg-white rounded-md border-t-2 border-gray-200 shadow-md my-10 md:my-20 overflow-hidden">
        <div className="border border-gray-200 rounded-md">
          <img className="w-80 mx-auto" src={products?.image} alt="" />
        </div>
        <div className="md:ml-20 mt-10 md:mt-0 overflow-hidden	">
          <div className="">
            <h1 className="text-3xl font-semibold">{products?.title}</h1>
            <RatingsAndSocialIcon></RatingsAndSocialIcon>
            {/* <div className="border border-gray-200 w-full pr-10"></div> */}
            <hr />
            <ProductPrice></ProductPrice>
          </div>
          <ProductQuantity products={currentItem}></ProductQuantity>
          <AddToCartAndWishlist product={currentItem}></AddToCartAndWishlist>
          <ProductWarranty></ProductWarranty>
        </div>
      </div>
      <ProductDescription></ProductDescription>
    </div>
  );
};

export default ProductDetails;
