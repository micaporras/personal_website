import React from 'react'
import { about } from '@/data' 

import { RiSchoolLine, RiBriefcaseLine } from '@remixicon/react'

type TimelineType = 'Education' | 'Experience'

function About() {
    const educationTimeline = about.filter((item) => item.type === 'Education')
    const experienceTimeline = about.filter((item) => item.type === 'Experience')

    const renderIcon = (type: TimelineType) => {
      if (type === 'Education') {
      return <RiSchoolLine className="h-4 w-4 text-(--sec)" />
      } else {
        return <RiBriefcaseLine className="h-4 w-4 text-(--sec)" />
      }
    }

    const renderTimeline = (
      items: typeof about,
      title: string,
      type: TimelineType) => {
      return (
        <div className="w-full">
          <h2 className="text-xl font-bold text-start md:text-left lg:pb-0 py-6 pl-2">{title}</h2>
          <div className="lg:hidden relative px-2 px-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-r from-(--prim) to-(--prim) -translate-x-1/2" />

          {items.map((item, index) => (
            <div key={index} className="relative flex flex-col gap-8 pb-8">
              <div className="absolute left-4 w-8 h-8 -translate-x-1/2 rounded-full bg-(--body) border-2 border-(--sec) flex items-center justify-center z-10">
                {renderIcon(type)}
              </div>

              <div className="pl-16">
                <div className="bg-(--white) shadow-xl rounded-md p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-(--white) pb-2">
                    <span className="px-3 py-1 rounded-full bg-(--prim) font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold pb-1">{item.title}</h4>
                  <p className="text-(--gray) text-sm pb-3">{item.place}</p>
                  <p className="text-(--gray) text-sm pb-4 text-justify">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {(item.tags ?? item.tags ?? []).map((tag: string) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-xl bg-(--prim-light) text-(--prim)">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div className="hidden lg:block">
            <div className="overflow-x-auto pb-2">
              <div className="relative min-w-max px-2 pt-10">
                <div className="absolute left-10 right-10 top-14 h-px bg-(--prim) opacity-35" />

                <div className="relative flex gap-6 xl:gap-20 justify-center">
                  {items.map((item, index) => (
                    <article key={index} className="w-80 shrink-0">
                      <div className="pb-3 flex items-center justify-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-(--body) border-2 border-(--sec)">
                          {renderIcon(type)}
                        </span>
                      </div>

                      <div className="bg-(--white) shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                        <div className="flex items-center gap-2 text-sm text-(--white) mb-2">
                          <span className="px-3 py-1 rounded-full bg-(--prim) font-medium">
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                        <p className="text-(--gray) text-sm mb-3">{item.place}</p>
                        <p className="text-(--gray) text-sm mb-4 text-justify">{item.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {(item.tags ?? item.tags ?? []).map((tag: string) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-xl bg-(--prim-light) text-(--prim)">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <section id="about" className="min-h-screen scroll-mt-18 pb-20">
          <h1 className="text-3xl font-bold text-center pb-6">About Me</h1>

          {renderTimeline(educationTimeline, 'Education', 'Education')}
          {renderTimeline(experienceTimeline, 'Experience', 'Experience')}
      </section>
    )
}

export default About