'use client';

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";


const RecentProjects = () => {
  return(
    <div
      id="projects"
      className="py-20"
    >
      <h1 className="heading">
        A Small selection of &nbsp;
        <span className="text-purple uppercase">
          recent projects
        </span>
      </h1>
      
      <div 
        className="
          flex flex-wrap items-center justify-center 
          p-4 gap-x-32 gap-y-24 mt-10
        "
      >
        {projects.map(({
          id,
          title,
          des,
          img,
          iconLists,
          link,
        }) => (

          <div 
            key={id}
            className="lg:min-h-[24rem] h-[24rem] 
              flex items-center justify-center
              sm:w-[36rem] w-[90vw]
            "
          >
            <PinContainer
              title={link}
              href={link}
            >
              <div 
                className="
                  relative 
                  flex items-center justify-center 
                  sm:w-[32rem] w-[80vw] 
                  h-[20vh] lg:h-[30vh] 
                  overflow-hidden 
                  mb-10
                "
              >
                <div 
                  className="
                    relative
                    w-full h-full
                    overflow-hidden 
                    lg:rounded-3xl 
                    bg-[#13162d]
                  "
                >
                  <Image 
                    src="/icons/bg.png"
                    fill
                    alt=""
                    className="object-cover"
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  height={4532}
                  width={324}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 
                className="
                  font-bold 
                  lg:text-2xl md:text-xl text-base 
                  line-clamp-1
                "
              >
                {title}
              </h1>
              <p 
                className="
                  lg:text-xl text-sm
                  lg:font-normal font-light  
                  line-clamp-2
                "
              >
                  {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="
                        flex items-center justify-center
                        border border-white/20
                        rounded-full aspect-square
                        bg-black-100
                        shadow shadow-red-100
                        gap-1
                      "
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`
                      }}
                    >
                      <Image
                        src={icon}
                        width={32}
                        height={32}
                        className="p-1"
                        alt=""
                      />
                    </div>

                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex lg:text-lg md:text-base text-sm text-purple">
                    Check out live site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects;