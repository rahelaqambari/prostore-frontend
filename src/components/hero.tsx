"use client";
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
function Hero() {
    const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
  return (
<div className="w-full overflow-hidden">
  <Slider {...settings}>

    <div>
      <Image
        src="/images/banner-1.jpg"
        alt="banner1"
        width={1400}
        height={400}
        className="w-full h-72 object-cover"
      />
    </div>
  </Slider>
</div>
  )
}

export default Hero
