import React from 'react'
import profile from "@/public/images/profile.jpg"
import Image from 'next/image'
import { FiClipboard, FiCreditCard, FiHelpCircle, FiLogOut, FiSettings, FiUser } from 'react-icons/fi'
import Link from 'next/link'

const menuData = [
    {
      "label": "Profile",
      "href": "#",
      "icon": <FiUser />,
      "isactive": true,
    },
    {
      "label": "Order",
      "href": "#",
      "icon": <FiClipboard />,
      "isactive": false,
    },
    {
      "label": "StampCard",
      "href": "#",
      "icon": <FiCreditCard />,
      "isactive": false,
    },
    {
      "label": "Help",
      "href": "#",
      "icon": <FiHelpCircle />,
      "isactive": false,
    },
    {
      "label": "Setting",
      "href": "#",
      "icon": <FiSettings />,
      "isactive": false,
    },
    {
      "label": "Log Out",
      "href": "#",
      "icon": <FiLogOut />,
      "isactive": false,
    }
  ]

const Sidebar = () => {
  return (
    <div className="flex rounded-xl w-64 flex-col bg-white shadow-lg">
    <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600"></div>

    <div className="z-10  px-6 py-4">
      <div className="mx-auto rounded-full ">
      <Image src={profile}  className="!h-[100px] mx-auto -mt-20 !w-[100px] rounded-full !object-cover" alt='profile' />
      </div>
      
      <p className="mt-3 text-center text-lg font-semibold text-gray-800">Mark Jecno</p>
      <p className="text-center text-sm text-gray-500">mark-jecno@gmail.com</p>
    </div>

    <nav className="flex-1 space-y-2 px-4 py-6">

{
    menuData && menuData.map((item, index)=> 
        <Link href="#" key={index} className={`flex items-center space-x-3 rounded-lg ${item?.isactive ? 'text-primary' : 'text-secondary'}  p-3 font-medium`}>
        {item?.icon}
        <span>{item.label}</span>
      </Link>
    )
}
    </nav>
  </div>
  )
}

export default Sidebar

/*

<nav className="flex-1 space-y-2 px-4 py-6">
      <a href="#" className="flex items-center space-x-3 rounded-lg bg-orange-50 p-3 font-medium text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>Profile</span>
      </a>

      <a href="#" className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 00-2 2" />
        </svg>
        <span>Order</span>
      </a>

      <a href="#" className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
        <span>StampCard</span>
      </a>

      <a href="#" className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9.247a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM11.667 14.167h-3.334a1.667 1.667 0 01-1.666-1.667v-3.333a1.667 1.667 0 011.666-1.667h3.334a1.667 1.667 0 011.666 1.667v3.333a1.667 1.667 0 01-1.666 1.667zM18 19.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
        </svg>
        <span>Help</span>
      </a>

      <a href="#" className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.827 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.827 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.827-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.827-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Setting</span>
      </a>

      <a href="#" className="flex items-center space-x-3 rounded-lg p-3 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span>Log Out</span>
      </a>
    </nav>
*/