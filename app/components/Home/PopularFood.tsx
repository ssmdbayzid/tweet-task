"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Image from 'next/image';
import { popularProductData } from '@/app/assets/data';
import { FaHeart, FaPlus, FaRegHeart } from 'react-icons/fa6';
import { CiClock2, CiDiscount1 } from 'react-icons/ci';
import { IoIosStar, IoMdBicycle } from 'react-icons/io';
import { LuEuro } from 'react-icons/lu';
import { BsShop } from 'react-icons/bs';
import type { Swiper as SwiperCore } from 'swiper';


const PopularFood = () => {
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
          <h1 className='title'>Popular <span className='text-primary'>Food Near me</span></h1>
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
            popularProductData && popularProductData.map((product, index) => (
              <SwiperSlide key={index} className=''>
                <div className="">
                  <div className='relative cardShadow'>
                    <div className="thumb h-[175px]">
                      <Image src={product?.img} fill className='!object-cover !max-h-[175px] rounded-t-2xl' alt='product img' />
                    </div>
                    <div className="absolute w-full top-3 left-0 flex items-center justify-between pr-3">

                      <div className="flex items-center justify-center gap-2 text-white pl-1 pr-3 py-2 bg-primary rounded-r-full">
                        <CiDiscount1 size={20} />
                        <p>{product?.discount} Off</p>
                      </div>
                      <div className=" w-[35px] h-[35px] bg-white flex items-center justify-center rounded-full">
                        {product?.isFavourite ? <FaRegHeart size={22} className="text-primary" /> :
                          <FaHeart className="text-primary" />}
                      </div>
                    </div>
                    <div className=" absolute bottom-3 right-5 bg-white flex items-center justify-center py-1 px-3 border gap-1 border-gray/50 rounded-full">
                      <IoIosStar className='text-primary' />
                      <span>{product.rating}</span>
                      <span className='text-gray'>({product.totalReview})</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-b-2xl">
                    <div className="flex items-center justify-between !h-12 mb-5">
                      <h3 className='text-lg font-medium w-4/5 '>{product?.name}</h3>
                      <div className="">
                        <p className='text-gray/50 text-sm flex items-center text-start'><LuEuro /> {product?.regularPrice}</p>
                        <p className='text-primary font-semibold flex items-center text-start'><LuEuro /> {product?.salePrice}</p>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="">
                        <div className="flex items-center gap-2 text-lg mb-3">
                          <BsShop />
                          {product?.shopName}
                        </div>
                        <div className=" flex items-center gap-5">
                          <div className="flex items-center gap-10">
                            <span className='flex items-center gap-1'><CiClock2 />
                              {product?.time}</span>
                          </div>
                          <div className="flex items-center gap-10">
                            <span className='flex items-center gap-1'><IoMdBicycle />
                              {product?.deliveryFee}</span>
                          </div>
                        </div>
                      </div>
                      <button className='w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white'>
                        <FaPlus size={25} />
                      </button>
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

export default PopularFood