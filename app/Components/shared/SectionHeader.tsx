import React from 'react'

type Props = {
    title: string
}

function SectionHeader({ title } : Props) {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center">{title}</h1>
    </div>
  )
}

export default SectionHeader