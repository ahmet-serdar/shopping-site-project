import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

const CategoryCarousel = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const categoryData = await axios.get(
          "https://products-data.herokuapp.com/api/getCategoryList"
        );

        setCarouselData(categoryData.data.map(e => e.image));
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    console.log(carouselData);
  }, []);

  const [carouselData, setCarouselData] = useState([]);

  return (
    <div className="slider-container">
      <Carousel className="carousel-style" width="60%" dynamicHeight={true}>
        <div className="slider-item-div">
          <img src={carouselData[0]} />
          <p> </p>
        </div>
        <div className="slider-item-div">
          <img src={carouselData[1]} />
          <p> </p>
        </div>
        <div className="slider-item-div">
          <img src={carouselData[2]} />
          <p> </p>
        </div>
        <div className="slider-item-div">
          <img src={carouselData[3]} />
          <p> </p>
        </div>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
