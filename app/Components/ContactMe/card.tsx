import React,  {ReactNode } from 'react'

type Props = {
    icon: ReactNode,
    label: string,
    value: string,
    href: string,
}

function Card({icon, label, value, href}  : Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
    className="flex flex-row items-center gap-4 bg-(--white) shadow-md rounded-md p-3 hover:scale-105 transition-all duration-300 group cursor-pointer">
        <div className="w-8 h-8 bg-(--prim-light) p-1 text-(--prim) rounded">{icon}</div>
        <div className="flex flex-col justify-center">
            <p className="text-[10px] text-(--gray)">{label}</p>
            <p className="text-sm font-bold">{value}</p>
        </div>
    </a>
  )
}

export default Card