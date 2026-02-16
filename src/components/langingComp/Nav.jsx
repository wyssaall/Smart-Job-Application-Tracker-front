import React from 'react'
import logo from '../../assets/images/bg-remove.png'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <header className="w-full border-b border-gray-200 fixed top-0 z-50 bg-white/70">
      <div className="max-w-7xl mx-auto px-8 py-2 flex items-center">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="TrackHire" className="w-16 h-16" />
          <h3 className="font-extrabold text-lg tracking-tight text-gray-900 ">
            TrackHire
          </h3>
        </div>

        <div className="flex-1"></div>

        <nav className="flex gap-6 items-center">
          <Link to="/login" className="border-red-700 border-2 px-5 py-1.5 rounded-lg font-medium cursor-pointer text-red-700 hover:bg-red-700 hover:text-white transition shadow-sm active:opacity-80">
            Login
          </Link >
          <Link to="/register" className="bg-red-700 text-white px-5 py-2 rounded-lg font-medium cursor-pointer hover:bg-red-800 transition shadow-sm active:opacity-80">
            Signup
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Nav
