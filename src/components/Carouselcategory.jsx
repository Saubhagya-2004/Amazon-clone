import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
const Carouselcategory = () => {
  return (
    <div className='bg-white m-3'>
        <div className='p-4 font-semibold text-2xl uppercase'>
            Shop by Category
        </div>
      <Swiper
      spaceBetween={10}
      slidesPerView={5}
      modules={[Navigation]}
      navigation={true}
      autoplay={true}
      >
        <SwiperSlide>
            <img src={"../images/category_0.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_1.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_2.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_3.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_4.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_5.jpg"} alt="catagory" />
        </SwiperSlide>
        {/*  */}
        <SwiperSlide>
            <img src={"../images/category_0.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_1.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_2.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_3.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_4.jpg"} alt="catagory" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={"../images/category_5.jpg"} alt="catagory" />
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Carouselcategory
