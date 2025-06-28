import React from 'react'
import { assets } from '../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <div className="shadow-md bg-white">
        <div className="py-4 px-6 flex justify-between items-center border-b">
          <img
            onClick={() => navigate('/')}
            className="w-40 max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="text-gray-700 font-medium max-sm:hidden">Welcome, Lohith</p>
            <div className="relative group">
              <img
                className="w-9 h-9 object-cover border-2 border-gray-300 rounded-full cursor-pointer"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute top-full right-0 mt-2 hidden group-hover:block z-20">
                <ul className="bg-white border shadow-lg rounded-md text-sm text-gray-700 min-w-[120px]">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="min-h-[calc(100vh-64px)] w-60 bg-white border-r">
          <ul className="flex flex-col items-start pt-6 text-gray-800 font-medium">
            <NavLink
              to="/dashboard/add-job"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 w-full hover:bg-gray-100 transition-all ${
                  isActive ? 'bg-blue-100 border-r-4 border-blue-500 text-blue-600 font-semibold' : ''
                }`
              }
            >
              <img className="w-5 h-5" src={assets.add_icon} alt="" />
              <p className='max-sm:hidden'>Add Job</p>
            </NavLink>

            <NavLink
              to="/dashboard/manage-jobs"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 w-full hover:bg-gray-100 transition-all ${
                  isActive ? 'bg-blue-100 border-r-4 border-blue-500 text-blue-600 font-semibold' : ''
                }`
              }
            >
              <img className="w-5 h-5" src={assets.home_icon} alt="" />
              <p className='max-sm:hidden'>Manage Jobs</p>
            </NavLink>

            <NavLink
              to="/dashboard/view-applications"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 w-full hover:bg-gray-100 transition-all ${
                  isActive ? 'bg-blue-100 border-r-4 border-blue-500 text-blue-600 font-semibold' : ''
                }`
              }
            >
              <img className="w-5 h-5" src={assets.person_tick_icon} alt="" />
              <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
