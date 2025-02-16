import React, { useState } from 'react';

const Accordion = ({ heading, content }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage accordion visibility

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the accordion state
  };

  return (
    <div className="accordion">
      <h2>
        <button
          type="button"
          onClick={toggleAccordion}
          className={`flex items-center justify-between md:w-[40vw] w-full  p-5 font-medium rtl:text-right text-black border ${
            isOpen ? 'border-[#1A776F]' : 'border-[#1A776F] rounded-t-xl'
          } rounded-md  hover:bg-green-100 gap-3`}
          aria-expanded={isOpen}
        >
          <span>{heading}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            viewBox="0 0 10 6"
          >
            <path
              fill="green"
              d="M5 6 0 0h10L5 6z" // Updated to make a filled triangle pointing down/up
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div className="p-5 border md:w-[40vw] w-full border-green-200 ">
          <p className="text-gray-500">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
