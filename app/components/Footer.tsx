import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { IoIosSend } from 'react-icons/io'

const Footer = () => {
  return (
    
      <footer className="bg-black  py-16 text-white">
  <div className="mx-auto grid container grid-cols-4 gap-10">    
    <div>
      <img src="/logo.png" alt="Logo" className="mb-6 w-[102px]" />
      <p className="mb-6 text-gray-400">Your go-to choice for fast and fresh delivery, bringing the best to your door in no time</p>
      <div className="flex space-x-3">
        <Link href="#" className="rounded-full flex items-center justify-center w-11 h-11 p-2 bg-[#1C2125] hover:bg-primary">
        <FaFacebookF />
        </Link>
        <Link href="#" className="rounded-full flex items-center justify-center w-11 h-11 p-2 bg-[#1C2125] hover:bg-primary">
        <FaTwitter />
        </Link>
        <Link href="#" className="rounded-full flex items-center justify-center w-11 h-11 p-2 bg-[#1C2125] hover:bg-primary">
        <FaLinkedinIn />
        </Link>
        <Link href="#" className="rounded-full flex items-center justify-center w-11 h-11 p-2 bg-[#1C2125] hover:bg-primary">
        <BsWhatsapp />
        </Link>
      </div>
    </div>

    <div>
      <h3 className="mb-4 text-lg font-semibold">Quick Link</h3>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#">About Us</a></li>
        <li><a href="#">How We Work</a></li>
        <li><a href="#">Career</a></li>
      </ul>
    </div>
    
    <div>
      <h3 className="mb-4 text-lg font-semibold">Quick Link</h3>
      <ul className="space-y-2 text-gray-400">
        <li><a href="#">Privacy Policies</a></li>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>
    
    <div>
      <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
      <p className="mb-6 text-gray-400">Subscribe to our newsletter to get our latest updates & news</p>
      <div className="flex">
        <input type="email" placeholder="Enter Email" className="w-full rounded-l-md bg-gray-800 px-4 py-2 text-white focus:outline-none" />
        <button className="rounded-r-md px-4 py-2 bg-primary">
       <IoIosSend size={25}/>
        </button>
      </div>
    </div>
  </div>
  
  <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
    © 2024 Tweet. All Rights Reserved
  </div>
</footer>
    
  )
}

export default Footer
