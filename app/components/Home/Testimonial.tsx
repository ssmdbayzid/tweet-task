import { customerReviewData } from '@/app/assets/data'
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import TestimonialCard from '../TestimonialCard'

const Testimonial = () => {
  return (
    <div className='section mb-28'>
      <div className=" py-20 flex justify-start items-center gap-30">  
  <div className="flex w-1/2 flex-col items-start text-left">
    <div className="mb-[50px]">
        <p className='font-lobsterTwo text-2xl mb-3'>Testimonial</p>
        <div className="flex items-center justify-between">
          <h1 className='title'>What <span className='text-primary'>Customer Saying</span> <br /> About our Services </h1>  
                          
        </div>
      </div>      
        
<TestimonialCard customerReviewData={customerReviewData}/>

  </div>
  
  <div className="relative flex w-2/3 h-2/3 items-center justify-center pl-28">
    <img src="https://i.ibb.co/xqGmMHbs/plate.png" alt="Salad Bowl" className="z-20 w-full rotate-3 rounded-full object-cover" />
    <img src="https://i.ibb.co/1tmv9ryf/chilli.png" alt="Green Chili" className="absolute top-2 left-10 z-10 " />
    <img src="https://i.ibb.co/GvQQKFN5/vagitable.png" alt="Peas" className="absolute top-10 -right-1/3 z-30 w-1/2 rotate-0" />
    <img src="https://i.ibb.co/DfPMSvzs/potato.png" alt="Tomato" className="absolute -bottom-[40%] left-1/3 w-1/2 rotate-180 object-contain" />
    
    <div className="absolute h-[380px] w-[380px] rounded-full border-2 border-dashed border-primary/50"></div>
    <div className="absolute h-[400px] w-[400px] scale-130 rounded-full border-2 border-dashed border-primary/50"></div>
  </div>
</div>

    </div>
  )
}

export default Testimonial
