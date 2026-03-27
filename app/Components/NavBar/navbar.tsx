"use client"
import React, { useState } from 'react'
import Link from 'next/link'

import Navlink from './navlink'
import Overlay from './overlay'

import { RiMenuLine, RiCloseLine } from '@remixicon/react'

const navLinks = [
  {
    href: "#about",
    title: "About"
  },
  {
    href: "#skills",
    title: "Skills"
  },
  {
    href: "#projects",
    title: "Projects"
  },
  {
    href: "#contactme",
    title: "Contact Me"
  }
]

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleNavigate = () => setNavbarOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-(--body) shadow">
      <div className="flex flex-wrap items-center justify-between mx-1 p-2">
        <Link href={"/"} className="inter text-4xl text-[var(--prim)] font-extrabold pl-3">mclrrn</Link>
        
        <div className="menu-mobile md:hidden flex">
          {
            !navbarOpen ? (
              <button 
              onClick={() => setNavbarOpen(true)} 
              className="border-(--prim) border-2 rounded active:opacity-60 p-1.5"
              aria-label="Open Menu"
              >
                <RiMenuLine className="h-5 w-6 text-(--prim)"/>
              </button>
            ) : (
              <button 
              onClick={() => setNavbarOpen(false)} 
              className="active:opacity-60"
              aria-label="Close Menu"
              >
                <RiCloseLine className="h-8 w-10 text-(--prim)"/>
              </button>
            )
          }
        </div>
        
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-2 md:p-0 md:flex-row md:space-x-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.href} title={link.title} onNavigate={handleNavigate} />
              </li>
            ))}
          </ul>
        </div>

      </div>

      {navbarOpen ? <Overlay links={navLinks} onNavigate={handleNavigate} /> : null}
      
    </nav>
  )
}

export default Navbar