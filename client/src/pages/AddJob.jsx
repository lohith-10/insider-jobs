import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import { JobCategories, JobLocations } from '../assets/assets';


const AddJob = () => {

const [title, setTitle] = useState('');
const [location, setLocation] = useState('Bangalore');
const [category, setCategory] = useState('Programming');
const [level, setLevel] = useState('Beginner level');
const [salary, setSalary] = useState(0);

const editorRef = useRef(null)
const quillRef = useRef(null)

useEffect(()=>{
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current,{
        theme:'snow',
      })
    }
},[])


  return (
    <form className="bg-white p-8 rounded-xl max-w-4xl mx-auto shadow-md space-y-8">
  <div>
    <p className="text-gray-700 font-semibold mb-2">Job Title</p>
    <input
      type="text"
      placeholder="Type here"
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      required
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  <div>
    <p className="text-gray-700 font-semibold mb-2">Job Description</p>
    <div
      ref={editorRef}
      className="min-h-[150px] border border-gray-300 rounded-md p-2"
    ></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <p className="text-gray-700 font-semibold mb-2">Job Category</p>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {JobCategories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>

    <div>
      <p className="text-gray-700 font-semibold mb-2">Job Location</p>
      <select
        onChange={(e) => setLocation(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {JobLocations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>

    <div>
      <p className="text-gray-700 font-semibold mb-2">Job Level</p>
      <select
        onChange={(e) => setLevel(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="Beginner Level">Beginner Level</option>
        <option value="Intermediate Level">Intermediate Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <p className="text-gray-700 font-semibold mb-2">Job Salary</p>
      <input
        onChange={(e) => setSalary(e.target.value)}
        type="number"
        placeholder="2500"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  </div>

  <button
    type="submit"
    className="w-full md:w-1/3 bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
  >
    ADD
  </button>
</form>

  )
}

export default AddJob
