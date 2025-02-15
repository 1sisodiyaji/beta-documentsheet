import React from 'react'
import TextAnimation from './TextAnimation'
const Banner = ({ title, text }) => {
  return (
    <>
      <div className="flex justify-center items-center md:h-72 h-48 bg-gradient-to-b from-[#F8E7C9] to-[#D7EFE3]">
        <div className="text-center">
          <h1 className="md:text-3xl text-xl font-semibold text-gray-800 p-1">
            <TextAnimation content={title} />
          </h1>
          <p className="mt-4">{text}</p>
        </div>
      </div>
    </>
  )
}

export default Banner
