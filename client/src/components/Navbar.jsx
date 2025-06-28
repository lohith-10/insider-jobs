import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { user, isSignedIn } = useUser()

  const navigate=useNavigate()

  const {setShowRecruiterLogin} = useContext(AppContext)

  const handleLogin = () => {
    if (!isSignedIn) {
      openSignIn()
    }
  }

  return (
    <div className="shadow-md py-4 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 2xl:px-20 flex flex-wrap justify-between items-center gap-y-3">
        {/* Logo */}
        <img onClick={()=> navigate('/')} src={assets.logo} alt="Insiderjobs Logo" className="h-10 cursor-pointer" />

        {isSignedIn ? (
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 text-sm sm:text-base">
            {/* View Applications Link */}
            <Link
              to="/applications"
              className="text-gray-700 hover:text-blue-600 transition duration-300 hover:underline underline-offset-4"
            >
              View My Applications
            </Link>

            {/* Welcome Text */}
            <p
              className="text-gray-600 hover:text-black transition duration-300 max-w-full"
              title={`${user.fullName}`}
            >
              Welcome,&nbsp;
              <span className="font-semibold text-blue-700">
                {user.firstName} {user.lastName}
              </span>
            </p>

            {/* User Avatar */}
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    'ring-2 ring-blue-500 hover:ring-blue-700 transition duration-300',
                },
              }}
            />
          </div>
        ) : (
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
            <button onClick={e => setShowRecruiterLogin(true)}
              className="text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-lg transition transform hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Recruiter Portal
            </button>

            <button
              onClick={handleLogin}
              className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg transition transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
