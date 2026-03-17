import React from 'react'
import NavLink from './navlink'

type NavItem = {
  href: string
  title: string
}

type overlayProps = {
    links : NavItem[]
}

function Overlay({ links }: overlayProps) {
  return (
    <ul className="flex flex-col items-center">
        {links.map((link, index) => (
            <li key={index}>
                <NavLink href={link.href} title={link.title} />
            </li>
        ))}
    </ul>

  )
}

export default Overlay