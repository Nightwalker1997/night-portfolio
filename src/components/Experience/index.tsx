'use client';

import { workExperience } from "@/data";
import MagicButton from "../ui/MagicButton";
import { Button } from "../ui/moving-border";
import Image from "next/image";

const Experience = () => {
  return (
    <div
      id="testimonials"
      className="py-20 flex flex-col items-center justify-center"
    >
      
      <h1 className="heading">
        My &nbsp; 
        <span className="text-purple uppercase">
          Work experience
        </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1">
        {workExperience.map(({
          id,
          title,
          desc,
          className,
          thumbnail
        }) => (
          <Button 
            key={id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="2rem"
            className="flex text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={thumbnail}
                alt=""
                height={64}
                width={64}
                className="lg:32 md:w-20 w-16"
              />
              <div className="lg:ms-5 ">
                <h1 
                  className="text-start text-xl md:text-2xl font-bold"
                >
                  {title}
                </h1>
                <p 
                  className="text-start text-white-100 mt-3 font-semibold"
                >
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experience;