import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="border-b-neutral-400 border-b-2">
      <div className="flex flex-wrap items-center justify-between mx-1 p-2">
        <Link href={"/"} className="text-4xl text-[var(--prim)] font-extrabold pl-3">mclrrn</Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            <li>
              <Link href={"/about"} className="block text-lg text-(--prim) font-bold p-2">About</Link>
            </li>
            {/* <li>
              <Link href={"/stack"} className="text-lg text-(--prim) font-bold hover:text-opacity-50">Stack</Link>
            </li>
            <li>
              <Link href={"/projects"} className="text-lg text-(--prim) font-bold hover:text-opacity-50">Projects</Link>
            </li>
            <li>
              <Link href={"/contact"} className="text-lg text-(--prim) font-bold hover:text-opacity-50">Contact Me</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar