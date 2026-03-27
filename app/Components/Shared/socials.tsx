import React, { ReactNode } from 'react'

type Props = {
    icon: ReactNode,
    href: string,
    size?: 'normal' | 'small',
}

function Socials({icon, href, size = 'normal'}: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
    className={`flex items-center justify-center text-(--prim) p-2 rounded-full bg-(--white) shadow-md hover:scale-110 hover:text-(--prim-light) transition-all duration-200 cursor-pointer ${size === 'small' ? 'w-8 h-8' : ''}`}>
        {icon}
    </a>
  )
}

export default Socials