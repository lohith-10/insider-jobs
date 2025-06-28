import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RecruiterLogin = ({ onClose }) => {
  const [state, setState] = useState('Login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false)
  const [image, setImage] = useState(false)

  const { setShowRecruiterLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmitHandlerr = (e) => {
    e.preventDefault()
    if (state === 'Signup' && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true)
    } else {
      // Simulate successful login or signup
      setShowRecruiterLogin(false)
      navigate('/dashboard')
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="absolute inset-0 z-10 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="relative w-full max-w-sm">
        {/* ❌ Cross Icon */}
        <img
          src={assets.cross_icon}
          alt="close"
          onClick={() => setShowRecruiterLogin(false)}
          className="absolute top-4 right-4 w-5 h-5 cursor-pointer z-10"
        />

        <form
          onSubmit={onSubmitHandlerr}
          className="bg-white w-full p-8 rounded-2xl shadow-md relative"
        >
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">
            Recruiter {state}
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Welcome back! Please sign in to continue
          </p>

          {!(state === 'Signup' && isTextDataSubmitted) && (
            <>
              {state !== 'Login' && (
                <div className="border px-4 py-3 flex items-center gap-2 rounded-full mb-4">
                  <img src={assets.person_icon} alt="" className="w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full text-sm outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="border px-4 py-3 flex items-center gap-2 rounded-full mb-4">
                <img src={assets.email_icon} alt="" className="w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email id"
                  className="w-full text-sm outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="border px-4 py-3 flex items-center gap-2 rounded-full mb-3">
                <img src={assets.lock_icon} alt="" className="w-5 h-5" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full text-sm outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {state === 'Login' && (
                <div className="text-right mb-4">
                  <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                    Forgot password?
                  </p>
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm font-semibold py-3 rounded-full hover:bg-blue-700 transition"
          >
            {state === 'Login'
              ? 'Login'
              : isTextDataSubmitted
              ? 'Create Account'
              : 'Next'}
          </button>

          <div className="text-center mt-5 text-sm text-gray-600">
            {state === 'Login' ? (
              <>
                Don’t have an account?{' '}
                <span
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => setState('Signup')}
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <span
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => setState('Login')}
                >
                  Login
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default RecruiterLogin
