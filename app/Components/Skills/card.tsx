import React from 'react'
import Image from 'next/image'
import { frontendAndBackend, tools, devPractices, softSkills } from '@/data'

type Props = {
    title: string,
}

function Card({title} : Props) {
  return (
    <div className="flex flex-col bg-(--white) rounded-md shadow-md p-2 items-center min-h-full">
        <h4 className="text-md text-(--prim) py-5">{title}</h4>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 pb-5 p-4">
            {title === "Frontend and Backend" && (
                <>
                {frontendAndBackend.map((skill, index) => {
                    return <div key={index} className="flex flex-col items-center justify-center gap hover:scale-110 transition-transform duration-200 cursor-pointer">
                        <Image 
                        src={skill.icon}
                        alt={skill.alt}
                        width={70}
                        height={70}
                        />
                        <p className="text-[10px] text-(--gray)">{skill.name}</p>
                    </div>
                })}
                </>
            )}

            {title === "Tools" && (
                <>
                {tools.map((skill, index) => {
                    return <div key={index} className="flex flex-col items-center justify-center gap hover:scale-110 transition-transform duration-200 cursor-pointer">
                        <Image 
                        src={skill.icon}
                        alt={skill.alt}
                        width={70}
                        height={70}
                        />
                        <p className="text-[10px] text-(--gray)">{skill.name}</p>
                    </div>
                })}
                </>
            )}
            

        </div>
    </div>
  )
}

export default Card