'use client';

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";


const Clients = () => {
  return(
    <div
      id="testimonials"
      className="py-20 flex flex-col items-center justify-center"
    >
      <h2 
        className="
          uppercase tracking-widest text-xs text-center 
          text-red-800 
          my-12
        "
      >
          This section is just for fun [comming soon]
        </h2>
      <h1 className="heading">
        Kind words from &nbsp;
        <span className="text-purple uppercase">
          satisfied clients
        </span>
      </h1>
    
      <div 
        className="flex flex-col items-center"
      >
        <div 
          className="
            relative
            h-[50vh] md:h-[30rem] 
            rounded-md 
            flex flex-col items-center 
            overflow-hidden 
            antialiased
            max-lg:mt-10
            
          "
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className=""
          />
          
        </div>
        <div 
          className="
            flex flex-wrap items-center justify-center
            gap-8 md:gap-12 
            max-w-[100vw]
            
          "
        >
          {companies.map(({
            id,
            name,
            img,
            nameImg
          }) => (
            <div
              key={id}
              className="
                flex
                md:max-w-60 max-w-32
                gap-2
              "
            >
              <Image
                src={img}
                alt={name}
                height={64}
                width={64}
                className="md:w-12 w-12"
              />
              <Image
                src={nameImg}
                alt={name}
                height={64}
                width={64}
                className="md:w-24 w-12"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;