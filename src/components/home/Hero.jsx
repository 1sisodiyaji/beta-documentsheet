import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="bg-[url('https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732252678/Home-BG_pwas2s.webp')] bg-cover bg-center flex justify-center items-center md:min-h-screen md:pt-0 pt-12">
        <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-6 p-1">
            <div>
              <div
                className="max-w-3xl mb-3 text-4xl font-semibold  md:text-5xl p-1 py-2"
                style={{ lineHeight: '68px' }}
              >
                Trusted Documents For Your Real Estate{' '}
                <span className="bg-orange-400 px-4 py-1 ms-2 rounded-3xl p-1">
                  needs
                </span>
              </div>
            </div>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Effortless and reliable document solutions for real estate <br />{' '}
              — because every detail matters.
            </p>
            <div className="flex ">
              <Link
                href="/create-new-sheet"
                className="inline-flex items-center justify-center md:px-5 px-3 py-3 mr-3 md:text-base text-xs font-medium text-center text-white rounded-3xl bg-[#219B9D] hover:bg-[#A7E4CD] hover:text-black group focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Create Your Sheet
                <svg
                  className="w-5 h-5 ml-2 -mr-1 group/hover:translate-x-2 transition-transform duration-300 ease-in-out"
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

              <Link
                href="/scan-qr"
                className="inline-flex items-center justify-center px-12  py-3 md:text-base text-xs font-medium text-center text-black border border-green-400 rounded-lg hover:bg-green-100"
              >
                <i className="fi fi-rs-qr-scan pe-2"></i> Scan QR
              </Link>
            </div>
          </div>
          <div className=" lg:mt-16 lg:col-span-6 flex justify-end items-end">
            <img
              src={
                'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734618574/Group_15_1_vxoqtz_bpyt44.webp'
              }
              width={1000}
              height={1000}
              loading="lazy"
              alt="Hero Section"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
