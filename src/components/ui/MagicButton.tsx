'use client';

import clsx from "clsx";

type MagicButtonProps = {
  title: string, 
  icon?: React.ReactNode, 
  postion?: string, 
  handleClick?: () => void,
  otherClasses?: string
}

const MagicButton:React.FC<MagicButtonProps> = ({
  title, 
  icon, 
  postion, 
  handleClick,
  otherClasses
}) => {
  return (
    <div>
      <button 
        className="
        
          bg-slate-800 
          no-underline 
          group 
          cursor-pointer 
          relative 
          shadow-2xl shadow-zinc-900 
          rounded-xl 
          p-px 
          text-xs 
          font-semibold 
          leading-6  
          text-white 
          inline-block
        "
      >

        <span 
          className="
            absolute 
            inset-0 
            overflow-hidden 
            rounded-full
          "
        >
          <span 
            className="
              absolute 
              inset-0 
              rounded-xl 
              bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] 
              opacity-0 
              transition-opacity duration-500 
              group-hover:opacity-100
            " 
          />
        </span>
        
        <div 
          className={clsx(`
            relative 
            flex 
            space-x-2 
            items-center 
            z-10 
            rounded-xl 
            bg-zinc-950 
            py-1 px-6 
            ring-1 ring-white/10
          `, otherClasses)}
        >
            {postion == 'left' && icon}
            {title}
            {postion == 'right' && icon}
        
        </div>

        <span 
          className="
            absolute 
            -bottom-0 
            left-[1.125rem] 
            h-px w-[calc(100%-2.25rem)] 
            bg-gradient-to-r from-emerald-400/10 via-emerald-400/90 to-emerald-400/10 
            transition-opacity duration-500 
            group-hover:opacity-40
          " 
        />
      
      </button>
    </div>
  );
}

export default MagicButton;
