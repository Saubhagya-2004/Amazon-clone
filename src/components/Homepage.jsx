import React from "react";
import Carousel from "./Carousel";
import Homepagecard from "./Homepagecard";
import Carouselcategory from "./Carouselcategory";
import Carouselproduct from "./Carouselproduct";
const Homepage = () => {
  return (
    <div className="bg-[#EAEDED]  ">
      <div className="min-w-[1000px] max-w-[1500px] bg-gray-200  mx-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2  gap-4 p-1 -mt-80 ">
          <Homepagecard
            title={"We have suprise For You"}
            img={"../images/home_grid_1.jpg"}
            link={"see terms and conditions"}
          />
          <Homepagecard
            title={"Watch the rings of power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <Homepagecard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <Homepagecard
            title={"More titles to Explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse"}
          />
          <Homepagecard
            title={"Shop pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"see more"}
          />
          <Homepagecard
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"see the deals"}
          />
          <Homepagecard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"see more"}
          />
          <Homepagecard
            title={"Family plan:3 month Free"}
            img={"../images/home_grid_8.jpg"}
            link={"Try it!!"}
          />
          <div className="h-[420px] xl:hidden md:hidden m-3 pt-6">
            <img
              src={"../images/banner_image_2.jpg"}
              className="  w-[100%] object-fill pt-5 "
            />
          </div>
        </div>
        <Carouselproduct />
        <Carouselcategory />
        <div className="m-2 h-[200px] pb-3 ">
          <img
            src={"../images/banner_image.jpg"}
            className="h-[100%] mx-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
