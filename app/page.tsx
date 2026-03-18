import Navbar from "./Components/NavBar/navbar";
import Image from "next/image";
import {  RiExternalLinkLine } from '@remixicon/react'


export default function Home() {
  return (
    <main className="flex flex-col md:px-10">
      <Navbar />
      <section className="mt-15 p-2 flex md:flex-row flex-col justify-center items-center">
        <div className="flex flex-col w-full justify-center items-center">
          <Image 
          src = "/images/grad-image.png"
          alt = "Profile Picture"
          width = {300}
          height = {200}
          className="w-80 sm:w-60 md:w-100 lg:w-170 h-auto"
          sizes="(max-width: 640px) 10rem, (max-width: 768px) 14rem, (max-width: 1024px) 18rem, 420px"
          />
        </div>

        <div className="flex flex-col w-full justify-center items-center md:items-start">
          <h1 className="font-extrabold text-(--prim) lg:text-7x md:text-5xl text-2xl md:pt-0 py-3">Hello! I am Mica Lorraine</h1>
          <p className="p-2 md:p-0 md:pr-2 font-light tracking-wide text-justify">With experience in software development and building technology-driven applications. 
            Skilled in both frontend and backend systems, with strong problem-solving and collaboration abilities. 
            Passionate about creating efficient, scalable, and user-friendly applications.
          </p>

          <div className="flex flex-row gap-2 md:pt-4 pt-2 font-semibold">
            <button 
            className="px-3 py-2 border-(--prim) border-2 text-(--prim) rounded-md hover:bg-(--sec) hover:text-white cursor-pointer"
            >
              Contact Me
            </button>
            <a
            className="flex flex-row justify-center items-center gap-2 px-3 py-2 bg-(--prim) text-white rounded-md hover:bg-(--sec) cursor-pointer"
            href = "https://drive.google.com/file/d/1BizoDvm-xRE7g77thdzbh99uYSQnA43Y/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            >
              < RiExternalLinkLine className="h-5 w-5"/> Resume
            </a>
          </div>

        </div>

        
      </section>
    </main>
  );
}
