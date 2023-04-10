import React from "react";
import { Link } from "react-router-dom";
import CarouselProduct from "../CarouselProduct/CarouselProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Product = ({ pd }) => {
  // console.log(pd);
  return (
    <div className="items-center p-4 rounded-md my-14 border-t-2 border-gray-200 shadow-md bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xs text-white font-semibold mt-0 bg-purple-800 inline-block py-1 px-2 rounded-tl-md rounded-br-md">{pd?.items}</h1>
        <Link className="bg-black text-sm text-white px-3 py-1 rounded-tr-md" to={`/category/${pd?.category}`}>View All</Link>
      </div>
      <img className="w-full mt-2 mb-6" src={pd?.banner} alt="" />
      <div className="grid grid-cols-7 gap-7 mt-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      > 
          {
            pd?.products?.map((product) => (
              
              <SwiperSlide>

            <CarouselProduct pd={product}></CarouselProduct>
              </SwiperSlide>
            ))
          }
          </Swiper>

      </div>

     
        
        
      
    </div>
    // <div className="relative flex justify-between w-11/12 mx-auto items-center p-4 rounded-md my-10 border-t-2 border-gray-200 shadow-md bg-white">
    //   <div className="mr-7">
    //     <h1 className="absolute top-10 text-xs text-white font-semibold mt-0 bg-purple-800 inline-block py-1 px-2 rounded-tl-md rounded-br-md">
    //       {pd?.items}
    //     </h1>
    //     <img className="w-full" src={pd?.sideImg} alt="" />
    //   </div>
    //   <div>
    //     <Link
    //       className="bg-black text-white px-5 py-2 text-left mt-10 text-xs top-0"
    //       to={`/category/${pd?.category}`}
    //     >
    //       View All
    //     </Link>
    //     <img className="w-full mt-4 mb-6" src={pd?.banner} alt="" />
    //     <div className="">
    //       <div className="grid grid-cols-4 gap-7 mt-4">
    //         {
    //           pd?.products?.filter((_, index) => index <= 7)
    //             .map((product) => (<RightSidePd pd={product}></RightSidePd>))
    //         }
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Product;
