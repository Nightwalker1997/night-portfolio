'use client';

import React from 'react'
import { Spotlight } from '@/components/ui/Spotlight';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* from Aceternity */}
      <div className=''>
        <Spotlight 
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight 
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight 
          className="top-23 left-53 h-[80vh] w-[40vw]"
          fill="white"
        />
      </div>

      <div 
        className="
          h-screen w-full 
          dark:bg-black-100 bg-white 
          dark:bg-dot-white/[0.8] bg-dot-black/[0.8] 
          relative 
          flex items-center justify-center
        "
      >
        {/* Radial gradient for the container to give a faded look */}
        <div 
          className="
            absolute 
            pointer-events-none 
            inset-0 
            flex items-center justify-center 
            dark:bg-black-100 bg-white 
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
          " 
        /> 
        
      </div>
    </div>
  )
}

export default Hero;
