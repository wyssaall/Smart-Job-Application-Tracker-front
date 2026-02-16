import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 px-6 md:px-20 py-14">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Column 1 - Branding */}
        <div className="flex flex-col gap-4 md:max-w-xs">
          <h2 className="text-2xl font-bold text-white">
            JobTracker
          </h2>
          <p className="text-gray-400">
            Organize your job search
          </p>
          <p className="text-sm text-gray-500 mt-4">
            © 2026 TrackHire. All rights reserved.
          </p>
        </div>

        {/* Column 2 - Product */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white mb-2">
            Product
          </h3>
          <a href="#" className="hover:text-red-500 transition-colors duration-200">
            Features
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-200">
            Free (MVP)
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-200">
            FAQ
          </a>
        </div>

        {/* Column 3 - Legal & Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white mb-2">
            Legal & Contact
          </h3>
          <a href="#" className="hover:text-red-500 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-200">
            Terms of Service
          </a>
          <a href="mailto:support@jobtracker.com" className="hover:text-red-500 transition-colors duration-200">
            Contact / Support
          </a>
        </div>

      </div>

      {/* Bottom subtle divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        Built with ❤️ for job seekers.
      </div>

    </footer>
  )
}

export default Footer
