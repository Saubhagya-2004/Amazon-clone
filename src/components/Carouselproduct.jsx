import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Carouselproduct = () => {
  return (
    <div className="bg-white m-4">
      <div className="bg-white text-2xl p-4 uppercase font-semibold">Best Sellers</div>
      <Swiper
      loop={true}
        spaceBetween={10}
        slidesPerView={5}
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <img src={`../images/product_${i}_small.jpg`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouselproduct;
