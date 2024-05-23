'use client';

import { Spotlight } from '@/components/ui/Spotlight';


const SpotLights = () => {
  return (
    <div>
       <Spotlight 
          className="top-0 left-0 h-screen w-[100vw]"
          fill="white"
        />
        <Spotlight 
          className="top-24 left-full h-[80vh] w-[70vw]"
          fill="white"
        />
        <Spotlight 
          className="bottom-24 left-1/2 h-[80vh] w-[40vw]"
          fill="white"
        /> 
    </div>
  )
}

export default SpotLights;
