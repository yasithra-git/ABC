import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeels } from './topMeel';
import CarouselItem from './CarouselItem';

export const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 3500,
        cssEase: "linear"
      };
  return (
    <div>
        <Slider {...settings}>
            {topMeels.map((item)=><CarouselItem image={item.image} title={item.title}/>)}
        </Slider>
    </div>
  )
}
export default MultiItemCarousel
