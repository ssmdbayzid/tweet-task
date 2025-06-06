"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Image from 'next/image';
import { popularRestuarentData } from '@/app/assets/data';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { CiClock2, CiDiscount1 } from 'react-icons/ci';
import { IoIosStar, IoMdBicycle } from 'react-icons/io';
import { BiEuro } from 'react-icons/bi';
import type { Swiper as SwiperCore } from 'swiper';


const PopularRestaurent = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      if (swiperInstance.params.navigation) {
        (swiperInstance.params.navigation as any).prevEl = prevRef.current;
        (swiperInstance.params.navigation as any).nextEl = nextRef.current;
        swiperInstance.navigation.update();
      }
    }
  }, [swiperInstance, prevRef, nextRef]);

  return (
    <div className='section'>
      <div className="mb-[50px]">
        <p className='font-lobsterTwo text-2xl mb-3'>Popular Food</p>
        <div className="flex items-center justify-between">
          <h1 className='title'>Popular <span className='text-primary'>Restaurent Near me</span></h1>
          <Link href="/" className="linkBtn">View All</Link>
        </div>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiperInstance}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 24
            }
          }}
          className=''
        >
          {
            popularRestuarentData && popularRestuarentData.map((restaurent, index) => (
              <SwiperSlide key={index} className=''>
                <div className="">
                  <div className='relative cardShadow'>
                    <div className="thumb h-[175px]">
                      <Image src={restaurent?.img} fill className='!object-cover !max-h-[175px] rounded-t-2xl' alt='restaurent img' />
                    </div>
                    <div className="absolute w-full top-3 left-0 flex items-center justify-between pr-3">

                      <div className="flex items-center justify-center gap-2 text-white pl-1 pr-3 py-2 bg-primary rounded-r-full">
                        <CiDiscount1 size={20} />
                        <p>{restaurent?.discount} Off</p>
                      </div>
                    </div>
                    <div className=" absolute bottom-3 right-5 bg-white flex items-center justify-center py-1 px-3 border gap-1 border-gray/50 rounded-full">
                      <IoIosStar className='text-primary' />
                      <span>{restaurent.rating}</span>
                      <span className='text-gray'>({restaurent.totalReview})</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-b-2xl">
                    <div className="flex items-center justify-between !h-12 mb-5">
                      <h3 className='text-lg font-medium w-4/5 '>{restaurent?.shopName}</h3></div>
                    <div className=" flex items-center gap-5">
                      <div className="flex items-center gap-10 text-primary">
                        <span className='flex items-center gap-1 text-sm text-nowrap'><CiClock2 size={22} className="text-gray" />
                          {restaurent?.time}</span>
                      </div>
                      <div className="flex items-center gap-10 text-primary">
                        <span className='flex items-center gap-0.5 text-nowrap text-sm'><IoMdBicycle size={22} className="text-gray" /> Delivery Fee <BiEuro />
                          {restaurent?.deliveryCharge}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm gap-1 mt-3 text-gray">
                      {restaurent?.products.map((p, i) =>
                        <p key={p} className={`${i < restaurent.products.length - 1 ? 'border-r border-gray pr-2' : ''}`}>{p}</p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>


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
  )
}

export default PopularRestaurent