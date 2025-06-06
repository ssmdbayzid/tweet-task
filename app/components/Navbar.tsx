import React from 'react'
import logo from "@/public/logo.png"
import profile from "@/public/images/profile.jpg"
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="bg-white">
      <div className='text-white bg-primary text-center py-2.5 font-light'> Free Delivery on Your First Order – Order Now!</div>
      <div className='container py-5 flex items-center justify-between'>
      <Image src={logo} width={102} height={56} alt="" />
      <div className=""> 
        <Link href="/profile">
        <Image src={profile} alt="profile" className='!w-[65px] !h-[65px] !border-2 !border-primary !object-cover rounded-full' />  
        </Link>    

      </div> 
      </div>
    </div>
    
  )
}

export default Navbar