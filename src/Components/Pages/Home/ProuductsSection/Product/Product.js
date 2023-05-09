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
        <h1 className="text-xs text-white font-semibold mt-0 bg-purple-800 inline-block py-1 px-2 rounded-tl-md rounded-br-md">
          {pd?.items}
        </h1>
        <Link
          className="bg-black text-sm text-white px-3 py-1 rounded-tr-md"
          to={`/category/${pd?.category}`}
        >
          View All
        </Link>
      </div>
      <img className="w-full mt-2 mb-6" src={pd?.banner} alt="" />
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          250: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {pd?.products.slice(0,6).map((product,i) => (
          <SwiperSlide key={i}>
            <CarouselProduct pd={product}></CarouselProduct>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Product;
