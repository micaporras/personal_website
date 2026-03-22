"use client";
import Navbar from "./Components/NavBar/navbar";
import Landing from "./Components/Landing/landing";
import About from './Components/About/about';
import Skills from './Components/Skills/skills';
import Projects from './Components/Projects/projects';
import ContactMe from './Components/ContactMe/contactme';

export default function Home() {
  return (
    <main className="flex flex-col md:px-10 px-2">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
}
