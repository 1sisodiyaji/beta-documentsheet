import { useState } from 'react';

const FlipCard = ({ title, text, src }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className={`relative md:w-[45vw] h-72 w-96   rounded-lg transition-transform duration-500  transform ${isFlipped ? 'rotate-y-180' : ''} `}>
      {/* Front Side */}
      <div className={`absolute inset-0 bg-gradient-to-l from-[#D1E1D0] to-[#EFC989] p-3 rounded-lg transition-opacity duration-500 flex flex-col justify-center items-center  ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
        <article className="space-y-3 md:py-6 ">
          <h1 className="text-3xl font-semibold p-1">{title}</h1>
          <p className="text-xl font-regular">{text}</p>
        </article>
        <div className="w-full flex justify-end">
          <div onClick={handleCardFlip} aria-label="Flip Card" role="button" className="border-4 border-orange-300 rounded-full w-16 h-16 flex justify-center items-center animate-pulse cursor-pointer">
            <i className="fi fi-rr-arrow-small-right text-4xl"></i>
          </div>
        </div>
      </div>

      {/* Back Side */}
      <div className={`absolute inset-0 bg-white p-4 overflow-hidden rounded-lg transition-opacity duration-500 border border-orange-300 flex flex-col justify-end items-end shadow-orange-300 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
        <div className="p-3 md:w-36 rounded-lg mx-auto">
          <img src={src} width={1000} height={1000} loading="lazy" alt={title} className="w-36 mx-auto" />
        </div>
        <div className="flex flex-col justify-end items-end">
          <div onClick={handleCardFlip} aria-label="Close" role="button" className="border-4 border-orange-300 rounded-full w-16 h-16 flex justify-center items-center cursor-pointer text-black">
            <i className="fi fi-rr-cross text-xl text-red-500"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
