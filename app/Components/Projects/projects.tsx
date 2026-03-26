import React from 'react'
import { projects } from '@/data' 
import Card from './card'

function Projects() {
    return (
      <section id="projects" className="min-h-screen scroll-mt-24 pb-20">
        <h1 className="text-3xl font-bold text-center">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[85%] md:w-full 2xl:w-[85%] px-auto pt-10 md:pt-15 mx-auto">
          {projects.map((project, index) => {
            return <div key={index}>
              <Card {...project}/>
            </div>
          })}
        </div>
      </section>
    )
}

export default Projects