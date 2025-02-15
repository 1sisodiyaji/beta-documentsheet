import Link from 'next/link'

const CTA = ({ title, text, btnText }) => {
  return (
    <>
      <section className="my-12 ">
        <div className="max-w-7xl mx-auto text-center  py-8 px-6 rounded-lg bg-gray-100">
          <h2 className="md:text-4xl text-xl font-bold text-gray-800 mb-6 p-1">
            {title}
          </h2>
          <p className="text-gray-600 md:text-lg text-md mb-10">{text}</p>

          <div className="flex justify-center items-center p-1">
            <Link
              href="/create-new-sheet"
              className="inline-flex items-center justify-center md:px-5 px-3 py-3 mr-3 md:text-base text-xs font-medium text-center text-white rounded-3xl bg-[#219B9D] hover:bg-[#A7E4CD] hover:text-black group focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              {btnText}
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
              href="/pricing"
              className="inline-flex items-center justify-center md:px-5 px-3 py-3 mr-3 md:text-base text-xs  font-medium text-center text-black rounded-3xl  border border-[#219B9D] hover:bg-[#A7E4CD] hover:text-black group focus:ring-2 focus:ring-green-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              See Our Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA
