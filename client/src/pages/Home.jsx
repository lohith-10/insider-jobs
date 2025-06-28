import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <Hero/>
        <JobListing/>
        <AppDownload/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
