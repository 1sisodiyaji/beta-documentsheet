import { motion } from 'framer-motion';
import { useState } from 'react';
import Pill from './Pill';

const Testimonials = ({ text, name, location }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed mb-8">{text}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#219B9D] to-[#A7E4CD] flex items-center justify-center text-white font-bold text-xl">
              {name[0]}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
              <p className="text-gray-600">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Real Estate Agent',
      company: 'Prime Properties',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        "Document Sheet has revolutionized how I handle property documentation. The QR code feature makes accessing and sharing documents incredibly easy. It's a game-changer for real estate professionals.",
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Business Owner',
      company: 'Sharma Enterprises',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'The efficiency and security that Document Sheet provides is unmatched. Managing business documents has never been easier. The customer support team is always ready to help.',
    },
    {
      id: 3,
      name: 'Anand Patel',
      role: 'Property Manager',
      company: 'Cityscape Realty',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'Document Sheet is an essential tool for our property management needs. The ability to quickly access and verify documents through QR codes has significantly improved our workflow.',
    },
    {
      id: 4,
      name: 'Raghavendra Kumar',
      role: 'Real Estate Agent',
      company: 'Prime Properties',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'ಭೂ ವಿವಾದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ದಾಖಲೆಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿ ಪಡೆದುಕೊಳ್ಳಲು ಈ ಸೇವೆ ನಮಗೆ ಬಹಳ ಸಹಾಯ ಮಾಡಿತು!',
    },
    {
      id: 5,
      name: 'Shanthi Gowda',
      role: 'Business Owner',
      company: 'Sharma Enterprises',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'ನಾನೇ ವರ್ಷಗಳಿಂದ ಭೂ ದಾಖಲೆಗಳೊಂದಿಗೆ ಹೋರಾಟ ಮಾಡುತ್ತಿದ್ದೆ. ಅವರ ಸೇವೆಯಿಂದ, ಎಲ್ಲವೂ ಈಗ ಸುಗಮವಾಗಿದೆ! ಧನ್ಯವಾದಗಳು!',
    },
    {
      id: 6,
      name: 'Vijay Prasad',
      role: 'Property Manager',
      company: 'Cityscape Realty',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'ಭೂ ದಾಖಲೆಗಳಲ್ಲಿ ಅವರ ಪರಿಣತಿ ನನಗೆ ಹೆಚ್ಚಿನ ಸಮಯ ಮತ್ತು ಒತ್ತಡವನ್ನು ಉಳಿಸಿತು. ಅವರ ಸೇವೆಯನ್ನು ಉತ್ಸಾಹದಿಂದ ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ. ನಿಮಗೆ ಸಹಾಯವಾಗಬಹುದು!',
    },
    {
      id: 7,
      name: 'Divya Shetty',
      role: 'Real Estate Agent',
      company: 'Prime Properties',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'ನಾನು ಇಲ್ಲಿನ ಸೇವೆಯನ್ನು ಬಳಸಿದ್ದೇನೆ ಮತ್ತು ಅವರು ಭೂ ದಾಖಲೆಗಳನ್ನೂ ಸಹಾಯ ಮಾಡಿದ್ದಾರೆ. ಪ್ರಾಮಾಣಿಕತೆಯೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವ ಅವರು ನಮಗೆ ಉತ್ತಮ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತಾರೆ.',
    },
    {
      id: 8,
      name: 'Karthik Raj',
      role: 'Business Owner',
      company: 'Sharma Enterprises',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'ಅವರ ಸೇವೆ ಪ್ರಾಮಾಣಿಕವಾಗಿದ್ದು, ನನಗೆ ಭರವಸೆ ನೀಡಿತು. ನಾನು ಅವರ ಸೇವೆಗಳಿಂದ ತುಂಬಾ ಸಂತೋಷಗೊಂಡಿದ್ದೇನೆ. ಧನ್ಯವಾದಗಳು!',
    },
    {
      id: 9,
      name: 'Megha Desai',
      role: 'Property Manager',
      company: 'Cityscape Realty',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'ಅದ್ಭುತ ಸೇವೆ! ನಿರಂತರ ಪ್ರಗತಿ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಅವರ ತ್ವರಿತ ಮತ್ತು ವೃತ್ತಿಪರ ಸೇವೆ ನಮಗೆ ಸಮಯ ಉಳಿಸಿತು.',
    },
    {
      id: 10,
      name: 'Arun Kumar',
      role: 'Real Estate Agent',
      company: 'Prime Properties',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'ನಿಮ್ಮ ಸೇವೆ ನನಗೆ ಬಹಳ ಉಪಯುಕ್ತವಾಗಿದೆ, ಧನ್ಯವಾದಗಳು! ನೀವು ಈ ಸೇವೆಯನ್ನು ಬಳಸಿದರೆ, ನಿಮ್ಮ ಭೂ ದಾಖಲೆಗಳ ಸಮಸ್ಯೆಗೆ ಶ್ರೇಷ್ಠ ಪರಿಹಾರ ಸಿಗುತ್ತದೆ.',
    },
    {
      id: 11,
      name: 'Nandini Rao',
      role: 'Business Owner',
      company: 'Sharma Enterprises',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      content:
        'ಸೇವೆಯ ಗುಣಮಟ್ಟ ಮತ್ತು ಸ್ವಚ್ಛತೆ ನಿಮಗೆ ಶ್ರೇಷ್ಠ ಅನುಭವ ನೀಡುತ್ತದೆ. ಈ ಸೇವೆಯನ್ನು ನನ್ನ ಸ್ನೇಹಿತರಿಗೆ ಮತ್ತು ಕುಟುಂಬದವರಿಗೆ ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMGEyOCAyOCAwIDEgMCAtNTYgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjE5QjlEIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Pill text={'Testimonials'} />
          <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with Document Sheet
          </p>
        </motion.div>

        <div className="relative">
          {/* Large quote mark */}
          <div className="absolute -top-6 left-0 z-20 text-9xl text-[#219B9D]/10 font-serif">"</div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed mb-8">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#219B9D] to-[#A7E4CD] flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].name[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prev}
                    className="p-2 rounded-full bg-gray-100 hover:bg-[#219B9D] hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={next}
                    className="p-2 rounded-full bg-gray-100 hover:bg-[#219B9D] hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-[#219B9D]' : 'bg-gray-300 hover:bg-[#219B9D]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Trusted by <span className="font-semibold text-[#219B9D]">500+ businesses</span> across
            India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
