import React from 'react'
import Link from 'next/link'

type NavlinkProps = {
  href: string
  title: string
}

function Navlink({ href, title }: NavlinkProps) {
  return (
    <Link href={href} className="block inter text-lg text-(--prim) font-semibold p-2 hover:opacity-75 active:opacity-75">{title}</Link>
  )
}

export default Navlink