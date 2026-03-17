"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Navlink from './navlink'

const navLinks = [
  {
    href: "#about",
    title: "About"
  },
  {
    href: "#stack",
    title: "Stack"
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
  return (
    <nav className="border-b-neutral-300 border-b-2 fixed top-0 left-0 right-0 z-10 bg-neutral-100">
      <div className="flex flex-wrap items-center justify-between mx-1 p-2">
        <Link href={"/"} className="text-4xl text-[var(--prim)] font-extrabold pl-3">mclrrn</Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-2 md:p-0 md:flex-row md:space-x-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar