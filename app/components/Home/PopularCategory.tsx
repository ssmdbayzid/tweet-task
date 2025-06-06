'use client'

import { categoryData } from '@/app/assets/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const PopularCategory = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    // Wait for refs to be attached
    setNavigationReady(true);
  }, []);

  return (
    <div className='section container'>
      <div className="mb-[50px]">
        <p className='font-lobsterTwo text-2xl mb-3'>Category</p>
        <div className="flex items-center justify-between">
          <h1 className='title'>Popular <span className='text-primary'>Category</span></h1>          
        </div>
      </div>

      <div className="relative ">
        {/* Swiper */}
        {navigationReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              1024: {
                slidesPerView: 7,
                spaceBetween: 24
              }
            }}
          >
            {categoryData && categoryData.map((category, index) => (
              <SwiperSlide key={index} className=''>
                <div
                  style={{ backgroundColor: `${category?.bgColor}` }}
                  className={`relative h-[160px] min-w-[150px] rounded-md`}
                >
                  <div className="absolute h-[128px] w-[95%] mx-auto bottom-8">
                    <div className='!min-h-[130px] max-h-[120px]'>
                      <Image src={category?.img} fill className='!object-contain' alt='category image' />
                    </div>
                    <p className='text-center text-white'>{category?.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom Buttons */}
        <div className="absolute top-1/2 -left-20 z-10 -translate-y-1/2">
          <button ref={prevRef} className="swiperNavButton">
            <GoArrowLeft size={25} />
          </button>
        </div>
        <div className="absolute top-1/2 -right-20 z-10 -translate-y-1/2">
          <button ref={nextRef} className="swiperNavButton">
         <GoArrowRight size={25} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default PopularCategory;



