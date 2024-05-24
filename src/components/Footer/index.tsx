'use client';

import Image from 'next/image';
import Link from 'next/link';
import MagicButton from '../ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full pt-20 pb-10"
    >
      <div className="w-full absolute left-0 -bottom-72">
        <Image
          src="/svg/footer-grid.svg"
          height={1234}
          width={1234}
          alt=""
          className=""
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to next level
        </h1>

        <Link
          href="mailto:gholamreza.fallah2208@gmail.com"
          className="mt-4"
        >
          <MagicButton
            title="let's get in touch"
            icon={<FaLocationArrow />}
            postion="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 fallahzade.
        </p>

        <div className="flex items-center md:gap-3 gap-4 md:mt-0 mt-4">
          {socialMedia.map(({
            id,
            img,
            link
          }) => (
            <Link
              key={id}
              href={link}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={img}
                height={20}
                width={20}
                alt=''
                className=""
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
