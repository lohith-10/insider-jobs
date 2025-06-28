import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useContext, useRef } from 'react'

const Hero = () => {

    const {setSearchFilter, setIsSearched} = useContext(AppContext)

    const titleRef= useRef(null)
    const locationRef= useRef(null)

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        setIsSearched(true)
    }

  return (
    <div className="flex flex-col items-center px-4 py-10">
      {/* Purple Hero Box */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-purple-800 to-indigo-900 text-white rounded-2xl px-6 py-14 text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Over 10,000+ jobs to apply</h2>
        <p className="text-sm md:text-base font-medium mb-10 leading-relaxed" >
          Your Next Big Career Move Starts Right Here - Explore The Best Job Opportunities<br />
          And Take The First Step Toward Your Future!
        </p>

        {/* Search Bar Inside Purple Box */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-lg max-w-3xl mx-auto w-full overflow-hidden">
          {/* Job Search */}
          <div className="flex items-center px-4 py-3 gap-2 flex-1 border-b md:border-b-0 md:border-r border-gray-300">
            <img src={assets.search_icon} alt="Search" className="w-5 h-5 opacity-60" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="w-full text-sm text-gray-700 placeholder-gray-500 outline-none bg-transparent"
              ref={titleRef}
            />
          </div>

          {/* Location */}
          <div className="flex items-center px-4 py-3 gap-2 flex-1 border-b md:border-b-0 md:border-r border-gray-300">
            <img src={assets.location_icon} alt="Location" className="w-5 h-5 opacity-60" />
            <input
              type="text"
              placeholder="Location"
              className="w-full text-sm text-gray-700 placeholder-gray-500 outline-none bg-transparent"
              ref={locationRef}
            />
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto">
            <button onClick={onSearch} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 w-full md:rounded-none">
              Search
            </button>
          </div>
        </div>
      </div>

     {/* Trusted By Section Outside Purple Box */}
<div className="w-full max-w-6xl mt-10 bg-white rounded-xl shadow-md px-6 py-6 flex items-center justify-center gap-4 text-gray-600 text-sm">
  <div className="flex items-center flex-wrap gap-4">
    <span className="font-medium whitespace-nowrap">Trusted by</span>
    <div className="flex flex-wrap items-center gap-6">
      <img className="h-6" src={assets.microsoft_logo} alt="Microsoft" />
      <img className="h-6" src={assets.walmart_logo} alt="Walmart" />
      <img className="h-6" src={assets.accenture_logo} alt="Accenture" />
      <img className="h-6" src={assets.amazon_logo} alt="Amazon" />
      <img className="h-6" src={assets.samsung_logo} alt="Samsung" />
      <img className="h-6" src={assets.adobe_logo} alt="Adobe" />
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero
