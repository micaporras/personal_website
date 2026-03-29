"use client";
import Image from "next/image";
import {  RiExternalLinkLine, RiCircleFill  } from '@remixicon/react';
import { TypeAnimation } from 'react-type-animation';

function Landing() {
    const handleScrollToContact = () => {
        const targetElement = document.getElementById('contactme')
        if (!targetElement) return

        const navbarOffset = 84
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
        const scrollPosition = Math.max(elementPosition - navbarOffset, 0)

        window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
        window.history.replaceState(null, '', '#contactme')
    }

    return (
        <section className="min-h-screen md:pt-0 pt-20 pb-20 md:px-10 px-2 lg:px-10 flex md:flex-row flex-col md:justify-center items-center gap-6 md:gap-4 lg:gap-8">
            <div className="flex flex-col w-full justify-center items-center pt-3 md:pt-5 gap-4 xl:gap-10">
                <Image 
                src = "/images/grad-img.png"
                alt = "Profile Picture"
                width = {300}
                height = {300}
                className="w-80 sm:w-60 md:w-100 2xl:w-130 h-auto"
                sizes="(max-width: 640px) 10rem, (max-width: 768px) 14rem, (max-width: 1024px) 18rem, 420px"
                />

                <span className="flex flex-row gap-2 justify-center items-center border border-(--gray) rounded-full text-(--gray) px-3 py-1 text-[10px] font-bold"> 
                    <RiCircleFill className="w-3 h-3 text-green-600"/> Available for Opportunities
                </span>
            </div>

            <div className="flex flex-col w-full justify-center items-center md:items-start">
                <h1 className="font-extrabold text-(--prim) 2xl:text-6xl lg:text-5xl text-3xl md:pt-0 md:pb-3 pt-3 pb-1">I'm Mica Lorraine</h1>
                
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'A Computer Engineer',
                    1000, 
                    'A Software Developer',
                    1000,
                    'A System Developer',
                    1000,
                    'A Tech Enthusiast',
                    1000,
                    'A Problem Solver',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inter font-extrabold text-(--gray) 2xl:text-4xl lg:text-3xl text-xl md:pt-0 md:pb-3"
                />

                <p className="p-2 md:p-0 md:pr-2 xl:text-lg text-sm text-(--gray) font-medium tracking-wide text-justify">
                With a strong foundation in software development and a passion for building efficient, user-friendly applications. 
                I have experience working on both frontend and backend systems, creating technology-driven solutions that improve workflows and user experience. 
                I enjoy learning new technologies, solving problems, and bringing ideas to life through code.
                </p>

                <div className="flex md:flex-row flex-col w-full gap-2 md:pt-4 pt-5 font-semibold px-15 md:px-0">
                    <button 
                    onClick={handleScrollToContact}
                    className="px-3 py-2 border-(--prim) border-2 text-(--prim) rounded-md hover:bg-(--prim) hover:text-white cursor-pointer"
                    aria-label="Contact Me Button"
                    >
                        Contact Me
                    </button>
                    <a
                    className="flex flex-row justify-center items-center gap-2 px-3 py-2 bg-(--prim) text-white rounded-md hover:opacity-70 cursor-pointer"
                    href = "https://drive.google.com/file/d/1BizoDvm-xRE7g77thdzbh99uYSQnA43Y/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                    aria-label="Resume Link"
                    >
                        < RiExternalLinkLine className="h-5 w-5"/> Resume
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Landing