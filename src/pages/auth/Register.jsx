import React from 'react'
import logo from '../../assets/images/bg-remove.png'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="bg-gradient-to-r from-red-100 to-red-400 flex items-center justify-center w-full min-h-screen px-4 py-8">
      
      {/* CARD */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8">

        {/* HEAD */}
        <div className="flex flex-col items-center justify-center mb-6">
          
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="TrackHire" className="w-10 h-10" />
            <h3 className="font-extrabold text-lg tracking-tight text-gray-900">
              TrackHire
            </h3>
          </div>

          <h1 className="text-xl font-bold text-gray-900">
            Create your account
          </h1>
          <p className="text-gray-500 text-sm mt-1 text-center">
            Start organizing your job applications today
          </p>

        </div>

        {/* FORM */}
        <form className="flex flex-col gap-4">

          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="px-3 py-2 rounded-lg border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-red-500 
                         focus:border-red-500 transition text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-red-500 
                         focus:border-red-500 transition text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="px-3 py-2 rounded-lg border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-red-500 
                         focus:border-red-500 transition text-sm"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="px-3 py-2 rounded-lg border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-red-500 
                         focus:border-red-500 transition text-sm"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-xs text-gray-600">
            <input type="checkbox" className="accent-red-600 mt-0.5" />
            <span>
              I agree to the{" "}
              <a href="#" className="text-red-600 hover:underline font-medium">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-red-600 hover:underline font-medium">
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Register Button */}
          <button
            type="submit"
            className="mt-1 bg-red-600 text-white py-2 rounded-lg 
                       font-semibold hover:bg-red-700 
                       transition-all duration-300 
                       shadow-md hover:shadow-lg 
                       active:scale-95 cursor-pointer text-sm"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 
                       border border-gray-300 py-2 rounded-lg 
                       hover:bg-gray-50 transition 
                       font-medium text-gray-700 cursor-pointer text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.74 1.22 9.25 3.6l6.9-6.9C35.64 2.37 30.2 0 24 0 14.82 0 6.96 5.48 3.44 13.44l8.04 6.24C13.48 13.18 18.28 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.14 24.5c0-1.6-.14-3.14-.4-4.63H24v9.27h12.4c-.54 2.9-2.18 5.36-4.64 7.02l7.18 5.6c4.2-3.88 6.6-9.6 6.6-16.26z"/>
              <path fill="#FBBC05" d="M11.48 28.68A14.47 14.47 0 019.5 24c0-1.63.28-3.2.78-4.68l-8.04-6.24A23.96 23.96 0 000 24c0 3.87.93 7.53 2.58 10.72l8.9-6.04z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.92-2.14 15.9-5.82l-7.18-5.6c-2 1.36-4.56 2.17-8.72 2.17-5.72 0-10.52-3.68-12.52-8.68l-8.9 6.04C6.96 42.52 14.82 48 24 48z"/>
            </svg>
            Continue with Google
          </button>

        </form>

        {/* Login */}
        <p className="text-xs text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600 font-semibold hover:underline">
            Log in
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Register