import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JobCard from '../components/JobCard'
import { assets } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'

const ApplyJob = () => {
  const { id } = useParams()
  const [jobData, setJobData] = useState(null)
  const { jobs } = useContext(AppContext)

  const fetchJob = () => {
    const data = jobs.find(job => job._id === id)
    if (data) setJobData(data)
  }

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob()
    }
  }, [id, jobs])

  return jobData ? (
    <>
      <Navbar />
      <div className="min-h-screen px-4 py-12 sm:px-8 lg:px-20 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Job Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-blue-50 border border-blue-300 p-8 rounded-xl shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-6">
                <img
                  src={jobData.companyId.image}
                  alt="Company"
                  className="h-20 w-20 rounded-xl bg-white border p-2 shadow"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{jobData.title}</h1>
                  <div className="flex flex-wrap gap-4 mt-3 text-gray-600 text-sm">
                    <span className="flex items-center gap-2">
                      <img src={assets.suitcase_icon} className="w-4 h-4" />
                      {jobData.companyId.name}
                    </span>
                    <span className="flex items-center gap-2">
                      <img src={assets.location_icon} className="w-4 h-4" />
                      {jobData.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <img src={assets.person_icon} className="w-4 h-4" />
                      {jobData.level}
                    </span>
                    <span className="flex items-center gap-2">
                      <img src={assets.money_icon} className="w-4 h-4" />
                      CTC: {kconvert.convertTo(jobData.salary)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:text-right">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition text-sm">
                  Apply Now
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Posted {moment(jobData.date).fromNow()}
                </p>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white p-8 rounded-xl shadow border">
              <h2 className="text-xl font-semibold mb-4">Job description</h2>
              <div
                className="space-y-4 leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              />
              <div className="mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Right: Related Jobs */}
          <div className="bg-white p-6 rounded-xl shadow border h-fit">
            <h3 className="text-lg font-semibold mb-4">
              More jobs from {jobData.companyId.name}
            </h3>
            <div className="space-y-6">
              {jobs
                .filter(
                  job =>
                    job.companyId._id === jobData.companyId._id &&
                    job._id !== jobData._id
                )
                .slice(0, 3)
                .map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  )
}

export default ApplyJob
