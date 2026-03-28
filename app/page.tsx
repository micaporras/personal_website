"use client";
import Navbar from "./Components/navbar/NavBar";
import Landing from "./Components/landing/Landing";
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Projects from './Components/projects/Projects';
import ContactMe from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
