import React from 'react';
import hero from '../../assets/images/hero.jpg';

function Hero() { 
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-50">
      
     
      <div className="flex-1 flex flex-col gap-6 md:gap-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Stop Losing Track of Your Job Applications
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700">
          Track Your Job Applications. Never Miss a Follow-Up Again.
        </h2>
        <p className="text-gray-600 max-w-md">
          A simple and smart job tracking system with automated reminders.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="border-red-700 border-2 px-6 py-2 rounded-lg font-semibold text-red-700 hover:bg-red-700 hover:text-white transition shadow-md active:opacity-80 cursor-pointer">
            Login
          </button>
          <button className="bg-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-800 transition shadow-md active:opacity-80 cursor-pointer">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex-1 mt-10 md:mt-0 md:ml-10 flex justify-center">
        <img
          className="w-full max-w-lg h-auto rounded-xl shadow-lg object-cover"
          src={hero}
          alt="hero"
        />
      </div>
    </section>
  );
}

export default Hero;
