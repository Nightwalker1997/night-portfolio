'use client';

import React from 'react'
import Link from 'next/link';

import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import MagicButton from '@/components/ui/MagicButton';
import SpotLights from './SpotLights';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
  
  return (
    <div className="pb-20 pt-36">
      
      <SpotLights />

      <div 
        className="
          h-screen w-full 
          dark:bg-black-100 bg-white 
          dark:bg-dot-white/[0.5] bg-dot-black/[0.5] 
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
            [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]
          " 
        /> 
        
        <div 
          className="flex justify-center relative my-24 z-10"
        >
          <div
            className="
              max-w-[80vw] md:max-w-2xl lg:max-w-[50vw]
              flex flex-col items-center justify-center
            "
          >
            <h2 
              className="
                uppercase tracking-widest text-xs text-center 
                text-blue-100 
                max-w-80
              "
            >
              Dynamic Web Magic with [ Next.js ]
            </h2>
            <TextGenerateEffect
              className="text-center text-4xl md:text-5xl lg:text-6xl"
              words="Transform Concepts into Seamless Experiences"
            />
            <p 
              className="
                text-center 
                md:tracking-widest 
                mb-4 mt-1
                text-sm md:text-lg lg:text-2xl 
                font-extralight
                
              "
            >
              Hi, I&apos;m GholamReza Falahzade, a Next.JS Developer.
            </p>
            <Link href="#about">
              <MagicButton 
                title="Show my work"
                icon={<FaLocationArrow />}
                postion='right'
                otherClasses='gap-4 px-8 leading-10 text-base font-extralight'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
