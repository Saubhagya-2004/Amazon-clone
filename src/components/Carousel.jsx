import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="bg-white h-[600px]">
      <Swiper
        loop={true}
        spaceBetween={0}
        className="h-[50%] object-contain"
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <video
            controls
            playsInline
            muted
            className="w-full h-full object-fill"
          >
            <source src={"../images/carousel_vid.mp4"} alt="carousel 7" />
          </video>
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel_3.jpg"} alt="Carousel 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_1.jpg"} alt="Carousel 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} alt="Carousel 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} alt="Carousel 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_5.jpg"} alt="Carousel 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_6.jpg"} alt="Carousel 6" />
        </SwiperSlide>
        <SwiperSlide>
          <video controls className="w-full h-full object-fill">
            <source src="../images/carousel_vid_2.mp4" type="video/mp4" />
          </video>
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-800" />
    </div>
  );
};

export default Carousel;
