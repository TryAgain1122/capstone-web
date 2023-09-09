'use client'
import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative mx-auto my-0">
        <Image 
          src="/images/banner.jpg"
          alt="banner"
          width={1450}
          height={100}
          objectFit="cover"
          className="w-full h-[30rem] overflow-hidden object-cover object-center backdrop-opacity-5"
        />
       
        <div className="absolute bottom-0 h-full py-20">
            <h1 className="text-center text-5xl sm:text-6x1 pt-[1rem] px-[2em] text-gray-300 font-bold max-w-x1">Deca tower edsa mandaluyong</h1>
        </div>
    </div>
  )
}

export default Banner