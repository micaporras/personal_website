import React, { ReactNode } from 'react'

type Props = {
    icon: ReactNode,
    href: string,
}

function IconCard({icon, href}: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
    className="flex items-center justify-center text-(--prim) p-2 rounded-full bg-(--white) shadow-md hover:scale-110 hover:text-(--prim-light) transition-all duration-200 cursor-pointer">
        {icon}
    </a>
  )
}

export default IconCard