import React from 'react'
import Link from 'next/link'
import { Icons } from '../common/Icons'
const Empowering = () => {
  return (
    <>
      <div className="my-24 p-1 max-w-7xl mx-auto">
        <section className="flex md:flex-row flex-col justify-around items-center ">
          <article className="space-y-6 md:w-1/2">
            <h1 className="md:text-3xl text-xl font-semibold py-1">
              Empowering Your Transactions, Simplifying Processes
            </h1>
            <p className="md:text-lg">
              Document Sheet is designed to support real estate professionals,
              business owners, citizens, and legal entities with secure,
              efficient document management.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-3xl bg-[#219B9D] hover:bg-[#A7E4CD] hover:text-black group focus:ring-2 focus:ring-green-300"
            >
              See How We Make Difference
              <svg
                className="w-5 h-5 ml-2 -mr-1 group-hover:translate-x-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </article>

          <div className="md:w-1/2 md:mt-0 mt-6 relative p-1">
            <div className="absolute left-40 top-0 w-32 h-32 p-3 drop-shadow-lg rounded-md border border-orange-500">
              {' '}
              <Icons.Owners className=" w-full h-full " />{' '}
            </div>
            <div className="absolute right-40 top-0 w-32 h-32 p-3 z-2 drop-shadow-lg rounded-md border border-green-500">
              {' '}
              <Icons.Legal className=" w-full h-full " />{' '}
            </div>
            <div className="absolute left-10 bottom-0 w-32 h-32 p-3 z-2 rounded-md bg-green-100 drop-shadow-lg hover:scale-110 border border-green-300">
              {' '}
              <Icons.HomeDocument className=" w-full h-full " />{' '}
            </div>
            <div className="absolute right-10 bottom-0 w-32 h-32 p-3 drop-shadow-lg hover:scale-110 rounded-md border bg-orange-200 border-orange-300">
              {' '}
              <Icons.Citizen className=" w-full h-full " />{' '}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex justify-center items-center md:mt-12 mt-6">
          <video
            src="https://res.cloudinary.com/dlgyf2xzu/video/upload/v1732279479/8b_6_mgqvbl.mp4"
            loop
            autoPlay
            muted
            className="max-w-5xl h-48 md:h-96 border border-[#1A776F] rounded-2xl shadow-xl"
          ></video>
        </section>
      </div>
    </>
  )
}

export default Empowering
