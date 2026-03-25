import React from 'react'
import Image from 'next/image'

type Props = {
    title: string
}

function Card({title} : Props) {
  return (
    <div className="flex flex-col bg-(--white) rounded-md shadow-md p-2 items-center min-h-full">
        <h4 className="text-md text-(--prim) py-5">{title}</h4>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 pb-5 p-4">
            <div>
                <Image 
                src="/icons/react.svg"
                alt="React logo"
                width={70}
                height={70}
                />
            </div>

            <div>
                <Image 
                src="/icons/javascript.svg"
                alt="React logo"
                width={70}
                height={70}
                />
            </div>

            <div>
                <Image 
                src="/icons/javascript.svg"
                alt="React logo"
                width={70}
                height={70}
                />
            </div>

            <div>
                <Image 
                src="/icons/javascript.svg"
                alt="React logo"
                width={70}
                height={70}
                />
            </div>

            <div>
                <Image 
                src="/icons/react.svg"
                alt="React logo"
                width={70}
                height={70}
                />
            </div>
        </div>
    </div>
  )
}

export default Card