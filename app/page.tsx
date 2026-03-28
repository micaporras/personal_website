"use client";
import Navbar from "./components/navbar/NavBar";
import Landing from "./components/landing/Landing";
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import ContactMe from './components/contact-me/ContactMe';
import Footer from './components/footer/Footer';

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
