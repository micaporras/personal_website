import React from 'react'
import Image from 'next/image'
import { RiUserLine, RiGroupLine, RiExternalLinkFill, RiGithubFill, RiGitlabFill } from '@remixicon/react'

type Props = {
    title: string,
    collaboration: string,
    description: string,
    img: string,
    stack: string[],
    website: string,
    github: string,
    isDeployed: boolean,
    isInGitHub: boolean
}

function Card({ title, collaboration, description, img, stack, website, github, isDeployed, isInGitHub }: Props) {
  return (
    <div className="group relative bg-(--white) shadow-md rounded-md overflow-hidden min-h-full">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
            <span className="absolute top-4 left-4 bg-neutral-300 text-(--gray) px-3 py-1 text-sm rounded-xl flex flex-row gap-2 items-center">
                {collaboration === 'Personal' ? <RiUserLine className="w-4 h-4"/> : <RiGroupLine className="w-4 h-4"/>} {collaboration}
            </span>
            <Image 
            src={img}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
            />
        </div>

        {/* Content Section */}
        <div className="p-6">
            <h4 className="text-xl font-semibold pb-2 group-hover:text-(--prim) transition-colors duration-300 cursor-pointer">{title}</h4>
            <p className="text-sm text-(--gray) pb-4 text-justify">{description}</p>

            {/* Stack and Links Section */}
            <div className="flex flex-wrap gap-2 pb-4 md:pb-6">
                {stack.map((tech) => {
                    return <span key={tech} className="text-xs px-3 py-1 rounded-2xl bg-(--prim-light) text-(--prim)">{tech}</span>
                })}
            </div>

            <div className="flex flex-row gap-3 w-full">
                {isDeployed && 
                <button 
                onClick={() => window.open(website, '_blank')} 
                className="text-sm text-(--white) font-normal w-full bg-(--prim) px-3 py-1 rounded-md cursor-pointer flex flex-row items-center justify-center gap-2 hover:opacity-80 transition-opacity duration-300"
                aria-label={`View ${title} website`}
                >
                    <RiExternalLinkFill className="w-4 h-4"/> Live Demo
                </button>}
                <button 
                onClick={() => window.open(github, '_blank')} 
                className="text-sm text-(--prim) font-normal w-full bg-transparent border px-3 py-1 rounded-md cursor-pointer flex flex-row items-center justify-center gap-2 hover:opacity-80 transition-opacity duration-300"
                aria-label={`View ${title} github repository`}
                >
                    {isInGitHub ? <RiGithubFill className="w-4 h-4"/> : <RiGitlabFill className="w-4 h-4"/>} Repo
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card