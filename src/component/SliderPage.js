import React from "react";
import Slider from "react-slick";

function SliderPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <p>1</p>
      </div>
      <div>
        <p>2</p>
      </div>
      <div>
        <p>3</p>
      </div>
      <div>
        <p>4</p>
      </div>
      <div>
        <p>5</p>
      </div>
    </Slider>
  )
}

export default SliderPage