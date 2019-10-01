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
        console.log(categoryData.data);
        setCarouselData(categoryData.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const [carouselData, setCarouselData] = useState([]);

  return (
    <Carousel width="50%" dynamicHeight={true}>
      {carouselData.map(e => (
        <div>
          <img src={e.image} />
          <p> {e.name} </p>
        </div>
      ))}
    </Carousel>
  );
};

export default CategoryCarousel;
