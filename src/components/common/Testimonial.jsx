'use client'
import Link from 'next/link'
import { useState } from 'react'

const Testimonials = ({ text, name, location }) => {
  return (
    <Link
      href="#"
      className="md:max-w-sm flex-shrink-0 w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-orange-50"
    >
      <figure className="max-w-screen-md">
        <div className="flex items-center justify-center mb-4 text-yellow-300">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
        <blockquote>
          <p className="md:text-xl text-xs font-regular text-gray-900 text-center">
            {text}
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <div className="flex items-center divide-x-2 divide-gray-300">
            <cite className="pe-3 font-medium text-gray-900">{name}</cite>
            <cite className="ps-3 text-sm text-gray-500">{location}</cite>
          </div>
        </figcaption>
      </figure>
    </Link>
  )
}

const Testimonial = () => {
  const testimonials = [
    {
      text: 'ಭೂ ವಿವಾದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ದಾಖಲೆಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಪಡೆದುಕೊಳ್ಳಲು ಈ ಸೇವೆ ನಮಗೆ ಬಹಳ ಸಹಾಯ ಮಾಡಿತು!',
      name: 'Raghavendra Kumar',
      location: 'Bengaluru',
    },
    {
      text: 'ನಾನೇ ವರ್ಷಗಳಿಂದ ಭೂ ದಾಖಲೆಗಳೊಂದಿಗೆ ಹೋರಾಟ ಮಾಡುತ್ತಿದ್ದೆ. ಅವರ ಸೇವೆಯಿಂದ, ಎಲ್ಲವೂ ಈಗ ಸುಗಮವಾಗಿದೆ! ಧನ್ಯವಾದಗಳು!',
      name: 'Shanthi Gowda',
      location: 'Mysuru',
    },
    {
      text: 'ಭೂ ದಾಖಲೆಗಳಲ್ಲಿ ಅವರ ಪರಿಣತಿ ನನಗೆ ಹೆಚ್ಚಿನ ಸಮಯ ಮತ್ತು ಒತ್ತಡವನ್ನು ಉಳಿಸಿತು. ಅವರ ಸೇವೆಯನ್ನು ಉತ್ಸಾಹದಿಂದ ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ. ನಿಮಗೆ ಸಹಾಯವಾಗಬಹುದು!',
      name: 'Vijay Prasad',
      location: 'Hubballi',
    },
    {
      text: 'ನಾನು ಇಲ್ಲಿನ ಸೇವೆಯನ್ನು ಬಳಸಿದ್ದೇನೆ ಮತ್ತು ಅವರು ಭೂ ದಾಖಲೆಗಳನ್ನೂ ಸಹಾಯ ಮಾಡಿದ್ದಾರೆ. ಪ್ರಾಮಾಣಿಕತೆಯೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವ ಅವರು ನಮಗೆ ಉತ್ತಮ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತಾರೆ.',
      name: 'Divya Shetty',
      location: 'Mangaluru',
    },
    {
      text: 'ಅವರ ಸೇವೆ ಪ್ರಾಮಾಣಿಕವಾಗಿದ್ದು, ನನಗೆ ಭರವಸೆ ನೀಡಿತು. ನಾನು ಅವರ ಸೇವೆಗಳಿಂದ ತುಂಬಾ ಸಂತೋಷಗೊಂಡಿದ್ದೇನೆ. ಧನ್ಯವಾದಗಳು!',
      name: 'Karthik Raj',
      location: 'Belagavi',
    },
    {
      text: 'ಅದ್ಭುತ ಸೇವೆ! ನಿರಂತರ ಪ್ರಗತಿ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಅವರ ತ್ವರಿತ ಮತ್ತು ವೃತ್ತಿಪರ ಸೇವೆ ನಮಗೆ ಸಮಯ ಉಳಿಸಿತು.',
      name: 'Megha Desai',
      location: 'Tumakuru',
    },
    {
      text: 'ನಿಮ್ಮ ಸೇವೆ ನನಗೆ ಬಹಳ ಉಪಯುಕ್ತವಾಗಿದೆ, ಧನ್ಯವಾದಗಳು! ನೀವು ಈ ಸೇವೆಯನ್ನು ಬಳಸಿದರೆ, ನಿಮ್ಮ ಭೂ ದಾಖಲೆಗಳ ಸಮಸ್ಯೆಗೆ ಶ್ರೇಷ್ಠ ಪರಿಹಾರ ಸಿಗುತ್ತದೆ.',
      name: 'Arun Kumar',
      location: 'Davangere',
    },
    {
      text: 'ಸೇವೆಯ ಗುಣಮಟ್ಟ ಮತ್ತು ಸ್ವಚ್ಛತೆ ನಿಮಗೆ ಶ್ರೇಷ್ಠ ಅನುಭವ ನೀಡುತ್ತದೆ. ಈ ಸೇವೆಯನ್ನು ನನ್ನ ಸ್ನೇಹಿತರಿಗೆ ಮತ್ತು ಕುಟುಂಬದವರಿಗೆ ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ.',
      name: 'Nandini Rao',
      location: 'Hassan',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3

  const nextSlide = () => {
    if (currentIndex < testimonials.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const isPrevDisabled = currentIndex === 0
  const isNextDisabled = currentIndex >= testimonials.length - itemsPerPage

  return (
    <section className="my-12 p-1">
      <article>
        <h1 className="md:text-4xl text-xl font-semibold text-center p-1 capitalize">
          Let&apos;s hear what our customers are saying...
        </h1>
      </article>

      <section className="relative flex flex-col items-center my-12 mx-auto bg-gray-50 py-6 px-1">
        {/* Navigation Buttons */}
        <div className="flex justify-between w-full max-w-7xl items-center mb-6 gap-2">
          <button
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className={`px-4 py-2 rounded-full shadow ${
              isPrevDisabled
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            &lt;
          </button>

          <div className="flex gap-6 overflow-hidden w-full">
            {testimonials
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((testimonial, index) => (
                <Testimonials
                  key={index}
                  text={testimonial.text}
                  name={testimonial.name}
                  location={testimonial.location}
                />
              ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={isNextDisabled}
            className={`px-4 py-2 rounded-full shadow ${
              isNextDisabled
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            &gt;
          </button>
        </div>
      </section>
    </section>
  )
}

export default Testimonial
