import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="container px-4 2xl:px-20 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-5 text-center sm:text-left">
        
        {/* Logo */}
        <img 
          width={160} 
          src={assets.logo} 
          alt="Insiderjobs Logo" 
          className="mx-auto sm:mx-0" 
        />

        {/* Copyright Text */}
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-600">LOHITH</span> | All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {[assets.facebook_icon, assets.twitter_icon, assets.instagram_icon].map((icon, index) => (
            <img
              key={index}
              width={32}
              src={icon}
              alt="social-icon"
              className="transition-all duration-300 transform animate-pulse hover:animate-none hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
