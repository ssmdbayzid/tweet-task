
import React from 'react'
import Image from 'next/image';

import playStore from "@/public/images/playStore.png";
import appStore from "@/public/images/appStore.png";
import appScreen from "@/public/images/appScreen.png";
import bg from "@/public/images/appBg1.png";



const AppAdvertisement = () => {
  return (
    <div className='section relative flex items-center gap-10 '>
      {/* ----------- Leftside Content--------- */}
      <div className="mb-[50px] w-3/5 ">
        <p className='font-lobsterTwo text-2xl mb-3'>Restaurants</p>
        <div className="">
          <h1 className='title'>Enhance your experience, <br /> <span className='text-primary'>Download the Tweet app today!</span></h1>
          <p className='py-6 text-gray text-justify'>Discover a whole new level of convenience with our mobile app. From browsing our delectable menu to securing exclusive deals, it's your gateway to a world of culinary delights. Download now and elevate your dining experience with just a tap.</p>
          <div className="flex items-center gap-5">
            <Image src={appStore} className='w-[148px]' alt='app'/>
            <Image src={playStore} className='w-[148px]' alt='app'/>
          </div>
        </div>

        <div className="absolute bottom-24 w-1/2 flex items-center justify-between  ps-14">
          <div className="text-white text-center">
            <h2 className='text-5xl font-bold'>100+</h2>
            <p>Food Menu</p>
          </div>
          <div className="text-white text-center">
            <h2 className='text-5xl font-bold'>100+</h2>
            <p>Downloads</p>
          </div>
          <div className="text-white text-center">
            <h2 className='text-5xl font-bold'>100+</h2>
            <p>Positive review</p>
          </div>
          <div className="text-white text-center">
            <h2 className='text-5xl font-bold'>100+</h2>
            <p>Food Menu</p>
          </div>
        </div>
      </div>
      <div className="w-2/5 ps-12">
      
      <Image src={appScreen} className='w-4/5 pb-10' alt='mobile img' /></div>

      <div className="">
        <Image src={bg} className='absolute left-0 text-red-600 bottom-0  w-full -z-10' alt='background'/>
      </div>
    </div>
  )
}


export default AppAdvertisement