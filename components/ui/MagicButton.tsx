import React from 'react'

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode | (() => React.ReactNode);
  position: 'left' | 'right';
  handleClick?: ()=> void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({title, icon, position, handleClick, otherClasses}) => {
  //Determina conteúdo do ícone
  const renderIcon = () => (typeof icon === 'function' ? icon() : icon)

  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#510BFF_55%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm gap-2 font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
            {position === 'left' && renderIcon()}
            {title}
            {position === 'right' && renderIcon()}
        </span>
    </button>
  )
}

export default MagicButton;
