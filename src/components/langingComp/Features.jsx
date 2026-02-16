import React from 'react'

function Features() {
  return (
    <section className="px-6 md:px-20 py-16  bg-gray-50">
      
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-14">
        Everything You Need to Stay Organized
      </h1>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        
        <div className="group bg-red-700/10 rounded-2xl p-8 flex-1 max-w-sm 
                        shadow-sm hover:shadow-xl 
                        transform hover:-translate-y-3 
                        transition-all duration-300 ease-out cursor-pointer">
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4 
                         transition-colors duration-300 
                         group-hover:text-red-700">
            Application Tracking
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Track every application by status: <br />
            Applied → Interview → Offer → Rejected
          </p>

          <p className="text-gray-600">
            See all your applications in one place
          </p>
        </div>


        <div className="group bg-red-700/10 rounded-2xl p-8 flex-1 max-w-sm 
                        shadow-sm hover:shadow-xl 
                        transform hover:-translate-y-3 
                        transition-all duration-300 ease-out cursor-pointer">
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4 
                         transition-colors duration-300 
                         group-hover:text-red-700">
            Smart Follow-Up Reminders
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Get automated email reminders if you haven't heard back
          </p> 

          <p className="text-gray-600">
            Never miss a follow-up opportunity
          </p>
        </div>


        <div className="group bg-red-700/10 rounded-2xl p-8 flex-1 max-w-sm 
                        shadow-sm hover:shadow-xl 
                        transform hover:-translate-y-3 
                        transition-all duration-300 ease-out cursor-pointer">
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4 
                         transition-colors duration-300 
                         group-hover:text-red-700">
            Simple Dashboard
          </h2>

          <p className="text-gray-700 mb-3 leading-relaxed">
            Visual overview of your job search progress
          </p>

          <p className="text-gray-600">
            See how many applications, interviews, and offers at a glance
          </p>
        </div>

      </div>
    </section>  
  )
}

export default Features
