"use client";
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
function Hero() {
    const settings = {
        dots: true,
        autoplay: true,
        // infinite: true,
    }
  return (
    <div className='w-6xl mx-auto h-72'>
        <Slider {...settings}>
      <div className='w-full h-full'>
        <Image
        src="/images/banner-1.jpg"
        alt='banner-1'
        className=' w-full h-full'
        height={100}
        width={1000}
        />
      </div>
      <div className='w-full h-full'>
        <Image
        src="/images/banner-2.jpg"
        alt='banner-1'
        className='w-full h-full'
        height={100}
        width={1000}
        />
      </div>
      </Slider>
    </div>
  )
}

export default Hero
