import React from 'react'
import Sidebar from '../components/Sidebar'

const Profile = () => {
  return (
    <div className='flex mb-24'>
    <Sidebar />
    <div className="w-4/5 mx-auto p-5">
    <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-semibold">Profile</h2>
      
      <div className="mb-4 rounded-lg border border-dashed border-gray-400 p-4">
        <label className="mb-1 flex items-center text-lg font-semibold text-gray-800">
          <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 1116 0H2z" />
          </svg>
          Name :
        </label>
        <input type="text" placeholder="Mark Jecno" className="w-full rounded-md  px-3 py-2 text-base text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>
      
      <div className="mb-4 rounded-lg border border-dashed border-gray-400 p-4">
        <label className="mb-1 flex items-center text-lg font-semibold text-gray-800">
          <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v1l-8 5-8-5V4z" />
            <path d="M2 8l8 5 8-5v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
          </svg>
          Email:
        </label>
        <input type="email" placeholder="mark-jecno@gmail.com" className="w-full rounded-md  px-3 py-2 text-base text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>
      
      <div className="rounded-lg border border-dashed border-gray-400 p-4">
        <label className="mb-1 flex items-center text-lg font-semibold text-gray-800">
          <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C6.686 2 4 4.686 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.314-2.686-6-6-6zM10 10a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          Address
        </label>
        <input type="text" placeholder="93, Songbird Cir, Blackville, South Carolina, USA-29817" className="w-full rounded-md  px-3 py-2 text-base text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>
    
    </div>

    <div className="flex justify-end mt-10 mb-20">
    <button className='px-16 py-4 bg-primary text-white rounded-lg '>Update</button>
    </div>
    <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-semibold">Change Password</h2>
      
      <div className="mb-4 rounded-lg border border-dashed border-gray-400 p-4">
        <label className="mb-1 flex items-center text-lg font-semibold text-gray-800">
          <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C6.477 2 2 4.239 2 9c0 2.604 1.298 4.748 3.083 6.45.805.758 1.687 1.38 2.626 1.878C8.82 18.045 9.4 18.5 10 18.5s1.18-.455 2.291-1.172a10.353 10.353 0 002.626-1.878C16.702 13.748 18 11.604 18 9c0-4.761-4.477-7-8-7zM10 11a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          Current Password:
        </label>
        <input type="password" placeholder="********" className="w-full rounded-md  px-3 py-2 text-base text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>
      
      <div className="mb-4 rounded-lg border border-dashed border-gray-400 p-4">
        <label className="mb-1 flex items-center text-lg font-semibold text-gray-800">
          <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C6.477 2 2 4.239 2 9c0 2.604 1.298 4.748 3.083 6.45.805.758 1.687 1.38 2.626 1.878C8.82 18.045 9.4 18.5 10 18.5s1.18-.455 2.291-1.172a10.353 10.353 0 002.626-1.878C16.702 13.748 18 11.604 18 9c0-4.761-4.477-7-8-7zM10 11a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          New Password:
        </label>
        <input type="password" placeholder="********" className="w-full rounded-md  px-3 py-2 text-base text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>
      
      <div className="rounded-lg border border-dashed border-gray-400 p-4">
        <label className="mb-1 flex items-center text-lg font-semibold text-gray-800">
          <svg className="mr-2 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C6.477 2 2 4.239 2 9c0 2.604 1.298 4.748 3.083 6.45.805.758 1.687 1.38 2.626 1.878C8.82 18.045 9.4 18.5 10 18.5s1.18-.455 2.291-1.172a10.353 10.353 0 002.626-1.878C16.702 13.748 18 11.604 18 9c0-4.761-4.477-7-8-7zM10 11a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
          Confirm Password:
        </label>
        <input type="password" placeholder="********" className="w-full rounded-md  px-3 py-2 text-base text-gray-600 focus:ring-2 focus:ring-orange-400 focus:outline-none" />
      </div>
    </div>
    <div className="flex justify-end mt-10 mb-20">
    <button className='px-16 py-4 bg-primary text-white rounded-lg '>Save Changes</button>
    </div>
  </div>

    </div>
  )
}

export default Profile
