import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import banner2 from '../../../../Images/banner2.jpg'
import banner1 from '../../../../Images/banner1.jpg'

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          
          <img className="rounded-b-md" src={banner2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-b-md" src={banner1} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
      
    
  );
};

export default Banner;
