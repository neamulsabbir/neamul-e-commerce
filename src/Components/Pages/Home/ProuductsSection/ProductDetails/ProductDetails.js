import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RatingsAndSocialIcon from "./RatingsAndSocialIcon/RatingsAndSocialIcon";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import AddToCartAndWishlist from "./AddToCartAndWishlist/AddToCartAndWishlist";
import { getProductDetailsData } from "../../../../../State/Thunk/getProductDetails";
import ProductWarranty from "./ProductWarranty/ProductWarranty";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductsFaqs from "./ProductsFaqs/ProductsFaqs";

const ProductDetails = () => {
  const { slug } = useParams();

  const [currentItem, setCurrentItem] = useState({});
  const [toggle, setToggle] = useState(1);

  const cartItems = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.productDetails.product);
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailsData(slug));
    setCurrentItem(
      cartItems.find(
        (item) => item.slug.toLowerCase() === slug.toLowerCase()
      )
    );
  }, [slug, cartItems]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="p-10 grid md:grid-cols-2 items-center md:items-start bg-white rounded-md border-t-2 border-gray-200 shadow-md my-10 md:my-20 overflow-hidden">
        <div className="border border-gray-200 rounded-md">
          <img className="w-80 mx-auto" src={products?.image} alt="" />
        </div>
        <div className="md:ml-20 mt-10 md:mt-0 w-full overflow-hidden	">
          <div className="">
            <h1 className="text-3xl font-semibold">{products?.title}</h1>
            <RatingsAndSocialIcon></RatingsAndSocialIcon>
            {/* <div className="border border-gray-200 w-full pr-10"></div> */}
            <hr />
            <ProductPrice></ProductPrice>
          </div>
          <ProductQuantity products={currentItem}></ProductQuantity>
          <AddToCartAndWishlist></AddToCartAndWishlist>
          <ProductWarranty></ProductWarranty>
        </div>
      </div>
      <div className="bg-white rounded-md border-t-2 border-gray-200 shadow-md p-4 sm:p-10 my-10">
        <div className="border-2 border-gray-200 rounded-md p-4 sm:p-10">
          <div className="flex">
            <div className="flex flex-col items-center">
              <h1 className="text-lg font-bold cursor-pointer" onClick={() => setToggle(1)}>
                DESCRIPTIONS
              </h1>
              <div
                className={
                  toggle === 1 ? "border-b-4 border-b-black w-36 rounded-t-xl" : "w-36"
                }
              ></div>
            </div>
            <div className="flex flex-col items-center ml-5">
              <h1 className="text-lg font-bold cursor-pointer" onClick={() => setToggle(2)}>
                FAQS
              </h1>
              <div
                className={toggle === 2 ? "border-b-4 border-b-black w-14 rounded-t-xl" : "w-14"}
              ></div>
            </div>
          </div>
          <hr className="" />
          <div className="my-10">
            <ProductDescription toggle={toggle}></ProductDescription>
            <ProductsFaqs toggle={toggle}></ProductsFaqs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
