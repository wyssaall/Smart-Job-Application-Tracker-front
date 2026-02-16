import React from 'react';
import prob from '../../assets/icons/problem.png';
import sol from '../../assets/icons/solution.png';

function Problem() {
  return (
    <section className="flex flex-col items-center px-6 md:px-20 py-16 bg-gray-50">
      
      {/* Titre */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
        Job Hunting Shouldn't Feel Like Chaos
      </h1>

     
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">

        {/* Problems */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Problems</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <img src={prob} alt="problem icon" className="w-5 h-5 mt-1" />
              <p className="text-gray-700">Tracking 20+ applications in Excel? It gets messy fast</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={prob} alt="problem icon" className="w-5 h-5 mt-1"/>
              <p className="text-gray-700">You forgot to follow up and lost a great opportunity</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={prob} alt="problem icon" className="w-5 h-5 mt-1"/>
              <p className="text-gray-700">Hard to tell if you're making progress or just spinning your wheels</p>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-green-600 mb-4">Solutions</h2>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-start gap-3">
              <img src={sol} alt="solution icon" className="w-5 h-5 mt-1"/>
              <p className="text-gray-700">Organize your applications in one dashboard with status tracking</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={sol} alt="solution icon" className="w-5 h-5 mt-1"/>
              <p className="text-gray-700">Get automated reminders so you never miss a follow-up again</p>
            </div>
            <div className="flex items-start gap-3">
              <img src={sol} alt="solution icon" className="w-5 h-5 mt-1"/>
              <p className="text-gray-700">Visual dashboard shows your stats: applications sent, interviews scheduled, offers received</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Problem;
