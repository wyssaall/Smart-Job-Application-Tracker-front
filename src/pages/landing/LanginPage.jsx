import React from 'react'
import Nav from '../../components/langingComp/Nav.jsx';
import Hero from '../../components/langingComp/hero.jsx';
import Problem from '../../components/langingComp/Problem.jsx';
import Features from '../../components/langingComp/Features.jsx';

function LanginPage() {
  return (
   <div className='flex flex-col min-h-screen'>
        <Nav /> 
        <main className="pt-20"> 
          <Hero />
          <Problem />
          <Features />
        </main>
    </div>
  )
}

export default LanginPage