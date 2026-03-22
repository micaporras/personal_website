import React from 'react'
import Link from 'next/link'

type NavlinkProps = {
  href: string
  title: string
  onNavigate?: () => void
}

function Navlink({ href, title, onNavigate }: NavlinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) {
      onNavigate?.()
      return
    }

    event.preventDefault()
    const targetId = href.slice(1)
    const targetElement = document.getElementById(targetId)

    if (!targetElement) {
      onNavigate?.()
      return
    }

    const navbarOffset = 84
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
    const scrollPosition = Math.max(elementPosition - navbarOffset, 0)

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
    window.history.replaceState(null, '', href)
    onNavigate?.()
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="block inter text-lg text-(--prim) font-semibold p-2 hover:opacity-75 active:opacity-75"
    >
      {title}
    </Link>
  )
}

export default Navlink