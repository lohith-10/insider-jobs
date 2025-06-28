import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ManageJobs = () => {
  const navigate = useNavigate()

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      <div className="overflow-x-auto shadow rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Job Title</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Location</th>
              <th className="px-6 py-3 text-left">Applicants</th>
              <th className="px-6 py-3 text-left">Visible</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 text-gray-800 text-sm">
            {manageJobsData.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">{job.title}</td>
                <td className="px-6 py-4">{moment(job.date).format('ll')}</td>
                <td className="px-6 py-4">{job.location}</td>
                <td className="px-6 py-4">{job.applicants}</td>
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => navigate('/dashboard/add-job')}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all"
        >
          Add New Job
        </button>
      </div>
    </div>
  )
}

export default ManageJobs
