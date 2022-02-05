import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.home.scss";
class CarouselHome extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      // arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div id="home">
        <Slider {...settings} className="carousel">
          <div className="imageCarousel">
            <img
              src="https://wall.vn/wp-content/uploads/2019/11/hinh-nen-dan-guitar-50.jpg"
              alt=""
            />
          </div>
          <div className="imageCarousel">
            <img
              src="https://hanoispiritofplace.com/wp-content/uploads/2018/01/hinh-nen-cay-dan-guitar-23.jpg"
              alt=""
            />
          </div>
          <div className="imageCarousel">
            <img
              src="https://hanoispiritofplace.com/wp-content/uploads/2018/01/hinh-nen-cay-dan-guitar-22.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default CarouselHome;
