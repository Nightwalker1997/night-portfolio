'use client';

import { useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from './GlobeDemo';
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(`
          grid  
          grid-cols-1 md:grid-cols-9 lg:grid-cols-5
          gap-4 
          max-w-7xl mx-auto
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleClassName,
  description,
  icon,
  id,
  img, 
  imgClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText('gholamreza.fallah2208@gmail.com');
    setCopied(true);
  }

  return (
    <div
      className={cn(`
        relative overflow-hidden
        row-span-1 
        rounded-3xl 
        group/bento 
        hover:shadow-xl 
        transition 
        duration-200 
        shadow-input dark:shadow-none 
        border 
        border-white/40 
        flex flex-col justify-between 
        space-y-4
      `,
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(30deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image 
              src={img}
              height={1080}
              width={1920}
              alt=""
              className={cn(
                imgClassName,
                "w-full h-full object-cover object-center"
              )}
            />
          )}
        </div>
        <div className={cn(
            `absolute right-0 -bottom-5`,
            id === 5 && "w-full opacity-95"
          )}
        >
          {spareImg && (
            <Image
              src={spareImg}
              height={1080}
              width={1920}
              alt=""
              className={"w-full h-full object-cover object-center"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div 
              className="
                absolute 
                z-50 
                flex items-center justify-center 
                text-white font-bold
              " 
            />
          </BackgroundGradientAnimation>
        )}

        <div 
          className={cn(
            titleClassName, 
            `group-hover/bento:translate-x-2 transition duration-200 
            relative 
            md:h-full min-h-40 
            flex flex-col 
            px-5 p-5 lg:p-10`
          )}
        >

          <div 
            className="
              font-sans font-extralight 
              text-neutral-600 
              text-xs 
              dark:text-neutral-300">
            {description}
          </div>
          <div 
            className={`
              font-sans font-bold text-lg
              text-neutral-600 dark:text-neutral-200 
              lg:text-3xl max-w-96 z-10
              ${titleClassName}
            `}>
            {title}
          </div>

          {id === 2 && (
            <GlobeDemo />
          )}

          {id === 3 && (
            <div 
              className="
                flex items-center
                gap-1 lg:gap-5 
                w-fite 
                absolute 
                -right-3 lg:-right-2
              "
            >
              <div className="flex flex-col gap-2">
                {
                  ['React.JS', 'Next.JS', 'TypeScript'].map((item, index) => (
                    <span 
                      key={index} 
                      className="
                        py-2 lg:py-4 px-3 
                        text-xs lg:text-base 
                        opacity-50 lg:opacity-100 
                        rounded-lg text-center bg-[#282a4f]
                      "
                    >
                      {item}
                    </span>
                  ))
                }
                <span 
                  className="
                    py-4 px-3 
                    rounded-lg 
                    text-center 
                    bg-[#282a4f]
                  " 
                />
              </div>

              <div className="flex flex-col gap-2">
                <span 
                  className="
                    py-4 px-3 
                    rounded-lg 
                    text-center 
                    bg-[#282a4f]
                  " 
                />
                {
                  ['PWA', 'TailwindCSS', 'Prisma'].map((item, index) => (
                    <span 
                      key={index} 
                      className="
                        py-2 lg:py-4 px-3 
                        text-xs lg:text-base 
                        opacity-50 lg:opacity-100 
                        rounded-lg text-center bg-[#282a4f]
                      "
                    >
                      {item}
                    </span>
                  ))
                }

              </div>

            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -mb-5 right-0`}>
                <Lottie 
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                />
              </div>
              
              <MagicButton 
                title={copied ? "Email Copied" : "Copy my Email"}
                icon={<IoCopyOutline />}
                postion="left"
                otherClasses="!bg-[#161a31] gap-2"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        
   
        

      </div>
    </div>
  );
};
