"use client"
import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa6'
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Autoplay needs to be here

interface StarRatingProps {
  rating: number; // Expect 'rating' to be a number
  maxRating?: number; // 'maxRating' is optional and defaults to 5, also a number
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
    return (
      <div className="flex space-x-1 bg-primary rounded-md p-2.5 text-white">
        {Array(maxRating).fill(null).map((_, index) => (
          <FaStar
            key={index}
            className={`w-6 h-6 ${index < rating ? 'text-white' : 'text-gray-400'} fill-current`}
          />
        ))}
      </div>
    );
  };

const TestimonialCard = ({customerReviewData}: {customerReviewData: any}) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper

        modules={[Pagination, Autoplay]} // Autoplay added back here
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

        className="mySwiper !pb-10"
      >
        {customerReviewData && customerReviewData.map((customer:any, index:any) => (
          <SwiperSlide key={index} className="flex justify-center items-center">

            <div className="relative p-1 rounded-xl w-full">
              <div className="px-8 py-10 rounded-xl shadow-lg border border-primary relative">
                <span className="absolute top-6 left-6 text-3xl font-extrabold text-primary opacity-75">
                  <FaQuoteLeft />
                </span>


                <p className="mt-6 mb-8 text-justify text-lg leading-relaxed text-gray-700">
                    {customer.comment}
                </p>

                <span className="absolute top-1/2 right-6 text-3xl font-extrabold text-primary opacity-75">
                    <FaQuoteRight />
                </span>


                <div className="flex items-center justify-between pt-10">
                  <div className="flex items-center space-x-4">
                    <img
                      src={customer?.img}
                      alt={customer?.name}
                      className="w-18 h-18 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-xl">{customer?.name}</p>
                      <p className="text-gray-500 text-sm">Satisfied Customer</p>
                    </div>
                  </div>
                  <StarRating rating={5} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialCard