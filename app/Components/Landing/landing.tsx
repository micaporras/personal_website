"use client";
import Image from "next/image";
import {  RiExternalLinkLine } from '@remixicon/react';
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
        <section className="min-h-screen md:pt-0 pt-20 pb-10 lg:px-10 flex md:flex-row flex-col md:justify-center items-center md:gap-4 lg:gap-10">
            <div className="flex flex-col w-full justify-center items-center pt-3 md:pt-5">
                <Image 
                src = "/images/grad-image-2.png"
                alt = "Profile Picture"
                width = {300}
                height = {200}
                className="w-80 sm:w-60 md:w-100 lg:w-130 h-auto"
                sizes="(max-width: 640px) 10rem, (max-width: 768px) 14rem, (max-width: 1024px) 18rem, 420px"
                />
            </div>

            <div className="flex flex-col w-full justify-center items-center md:items-start">
                <h1 className="inter font-extrabold text-(--prim) lg:text-7xl md:text-5xl text-3xl md:pt-0 md:pb-3 pt-3 pb-1">Hi! I am Mica Lorraine</h1>
                
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'A Computer Engineer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'A Software Developer',
                    1000,
                    'A Tech Enthusiast',
                    1000,
                    'A Lifelong Learner',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inter font-extrabold text-(--sec) lg:text-5xl md:text-3xl text-xl md:pt-0 md:pb-3"
                />

                <p className="p-2 md:p-0 md:pr-2 playfair md:text-lg text-sm font-medium tracking-wide text-justify">
                With experience in software development and building technology-driven applications. 
                Skilled in both frontend and backend systems, with strong problem-solving and collaboration abilities. 
                Passionate about creating efficient, scalable, and user-friendly applications.
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
                    className="flex flex-row justify-center items-center gap-1 px-3 py-2 bg-(--prim) text-white rounded-md hover:opacity-70 cursor-pointer"
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