import Link from 'next/link'
import React from 'react'

const Scan = () => {
  return (
    <>
      <div className="my-24 bg-[#A7E4CD] flex md:justify-around items-center p-3">
        <section className="flex md:flex-row flex-col justify-around items-center md:w-[80vw] max-w-screen">
          <article className="space-y-6 md:w-1/2 ">
            <h1 className="md:text-3xl text-xl font-semibold py-1">
              Instant Access with Just a Scan
            </h1>
            <p className="md:text-lg ">
              Say goodbye to paper trails. Our integrated QR code technology
              ensures <br /> that your documents are accessibleanytime, <br />{' '}
              anywhere—fast, secure, and reliable.
            </p>

            <Link
              href="/scan-qr"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-3xl bg-[#219B9D] hover:bg-[#279193] hover:text-black group focus:ring-2 focus:ring-green-300"
            >
              Experience Instant Access
              <svg
                className="w-5 h-5 ml-2 -mr-1 group/hover:translate-x-2"
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

          <div className="md:w-1/2 ">
            <iframe
              src="https://lottie.host/embed/49e3d58e-ac39-4682-8f7c-c8819d119729/d27xe9l4PZ.json"
              className="w-full md:h-[40vh]"
              title="Lottie Animation"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  )
}

export default Scan
