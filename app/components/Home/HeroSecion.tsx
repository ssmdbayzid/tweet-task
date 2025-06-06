
import React from 'react';
import Image from 'next/image';


import { FiPlus } from 'react-icons/fi';
import { IoIosStar } from 'react-icons/io';
import { GrDeliver } from 'react-icons/gr';
import { FaLocationCrosshairs, FaRegHeart } from 'react-icons/fa6';

import avatar1 from "@/public/images/avatar1.jpg";
import avatar2 from "@/public/images/avatar2.jpg";
import avatar3 from "@/public/images/avatar3.jpg";
import hotel from "@/public/images/hotel.jpg";
import heroImg from "@/public/images/heroImg.png"


const HeroSection = () => {
  return (          
    <div className="heroBg ">
      <div className="container mx-auto px-4 py-24  flex gap-10 md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 mb-12 md:mb-0 ">
          <h1 className="text-4xl md:text-5xl font-heroTitle lg:text-6xl  text-primary mb-6">
            Hungry?
          </h1>
          
          <h2 className="text-[65px] leading-[80px] font-bold text-gray-800 mb-4">
            Let Us <span className='text-primary'>Bring <br />
            The Feast to You</span> 
          </h2>
          
          <p className="text-lg text-textcolor text-justify mb-8 ">
            Explore hundreds of delicious options from top restaurants and Enjoy fast, reliable delivery right to you.
          </p>
          
       <div className="w-full mx-auto">
  <form className="flex w-full items-center justify-between bg-white border border-primary rounded-xl ">
    <input type='text' placeholder='Enter your location' className="text-gray-400 text-sm py-3 px-5" />
    <div className="flex items-center gap-3">     
      <FaLocationCrosshairs size={45}/>
      <span className=" text-md text-primary text-nowrap">
        Locate me
      </span>
      <span className="px-3 py-5 w-full text-xl font-semibold text-white bg-primary text-center rounded-r-lg">
        Find Food
      </span>
    </div>
  </form>
</div>
       
        </div>
        
        {/* Right Side - Image */}
        <div className="md:w-1/2 relative">
          <Image
            src={heroImg}
            className="w-full h-auto rounded-xl object-cover"   alt='heroImg'        
          />
                       
                        
            <div className="absolute -top-10 left-6 space-y-2 p-5 bg-white rounded-lg shadow-sm">
              <div className="flex -space-x-4 rtl:space-x-reverse">
    <Image className="!w-10 !h-10 border-2 !object-cover border-white rounded-full dark:border-gray-800" src={avatar1} alt="" />
    <Image className="!w-10 !h-10 border-2 !object-cover border-white rounded-full dark:border-gray-800" src={avatar2} alt="" />
    <Image className="!w-10 !h-10 border-2 !object-cover border-white rounded-full dark:border-gray-800" src={avatar3} alt="" />
    <a className="flex items-center justify-center !w-10 !h-10 text-xs font-medium text-white bg-gray-200 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">
      <FiPlus size={30} color="black"/>
    </a>

      </div>
  <h3 className="text-md font-semibold text-secondary">Satisfied Customer</h3>
  <div className="flex items-center space-x-1">
    <IoIosStar size={25} className='text-yellow-500' />
    <span className="text-sm text-gray-500">5.0 (3K Reviews)</span>
  </div>
</div>
            
            {/* Restaurant Info Component */}
            <div className="absolute -bottom-14 w-full flex items-center justify-between">
    <div className="mb-6 glassBg  p-4 !rounded-lg flex gap-3">     
            <Image height={110} width={113} src={hotel} alt='photo' />  
            <div className="">
            <h3 className="font-semibold text-gray-700 mb-1">Flavor Fusion Bistro</h3>
              <p className="text-gray-600">Kallurang, Selamani</p>
              <div className="flex items-start justify-between">
              <div className="flex items-center mt-1">
                <span className="text-yellow-500">★</span>
                <span className="ml-2 text-gray-600">4.9</span>
              </div>
               <div className='w-12 h-12 self-end  bg-gray-200/50 flex items-center justify-center rounded-full'>              
                <FaRegHeart size={25} className='text-gray'/>
              </div>
              </div>       
              
              </div>
              
            </div>
            
            {/* Delivery Status Component */}
            <div className='glassBg right-0 p-4 flex items-center gap-3 !rounded-lg'>
              <div className='w-14 h-14 bg-gray-200/50 flex items-center justify-center rounded-full'>
                <GrDeliver size={25} className='text-primary'/>
              </div>
              <div className="">
              <h3 className="font-semibold text-xl text-secondary">24/7</h3>
              <p className="text-gray text-sm">Delivery</p>
              </div>
            </div>
            </div>
        
          </div>
        </div>       
      </div> 
  );
};

export default HeroSection;