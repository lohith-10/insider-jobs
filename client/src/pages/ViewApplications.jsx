import React, { useState } from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index)
  }

  return (
    <div className="px-4 py-6">
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="min-w-full bg-white text-sm text-gray-700">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3 font-medium">#</th>
              <th className="px-4 py-3 font-medium">User Name</th>
              <th className="px-4 py-3 font-medium">Job Title</th>
              <th className="px-4 py-3 font-medium">Location</th>
              <th className="px-4 py-3 font-medium">Resume</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr
                key={index}
                className={`border-t ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-gray-100`}
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img
                    src={applicant.imgSrc}
                    alt=""
                    className="w-9 h-9 rounded-full object-cover transition-all duration-200 transform hover:scale-105 hover:ring-2 hover:ring-blue-400 cursor-pointer"
                  />
                  <span className="whitespace-nowrap">{applicant.name}</span>
                </td>
                <td className="px-4 py-3">{applicant.jobTitle}</td>
                <td className="px-4 py-3">{applicant.location}</td>
                <td className="px-4 py-3">
                  <a
                    href=""
                    target="_blank"
                    className="text-blue-600 flex items-center gap-1 hover:underline"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt=""
                      className="w-4 h-4"
                    />
                  </a>
                </td>
                <td className="px-4 py-3 relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="px-2 py-1 rounded hover:bg-gray-200"
                  >
                    •••
                  </button>
                  {openDropdown === index && (
                    <div className="absolute right-0 z-10 mt-2 bg-white border border-gray-200 rounded shadow-md w-24">
                      <button className="block w-full px-4 py-2 text-sm text-green-600 hover:bg-green-50 text-left">
                        Accept
                      </button>
                      <button className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left">
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewApplications
