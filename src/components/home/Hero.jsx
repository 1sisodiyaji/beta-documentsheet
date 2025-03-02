import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { number: 10000, label: 'Active Users' },
  { number: 50000, label: 'Documents Created' },
  { number: 99.9, label: 'Satisfaction Rate' },
];

const StatCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duration in milliseconds
    const startTime = performance.now();

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = elapsed / duration;
      if (progress < 1) {
        const currentCount = start + (value - start) * progress;
        setCount(currentCount);
        requestAnimationFrame(animate);
      } else {
        setCount(value); // Ensure it ends at the exact value
      }
    };

    animate();
  }, [value]);

  return (
    <div className="text-2xl font-bold text-[#219B9D]">
      {value % 1 !== 0 ? count.toFixed(1) + '%' : Math.floor(count).toLocaleString()}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="bg-[url('/assets/bg-cover.webp')] bg-cover bg-center flex justify-center items-center md:min-h-screen pt-12 md:pt-0 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>
      </motion.div>

      <div className="grid max-w-7xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
        {/* Left Section */}
        <motion.div
          className="mr-auto place-self-center lg:col-span-6 p-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="max-w-3xl mb-3 text-4xl font-bold md:text-5xl text-center md:text-start"
            style={{ lineHeight: '75px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Trusted Documents For Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Real Estate
            </span>
            <motion.span
              className="inline-block bg-orange-400 px-4 py-1 ms-2 mt-4 md:mt-0 rounded-3xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              needs
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mb-8 text-gray-600 text-lg lg:text-xl text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Effortless and reliable document solutions for real estate{' '}
            <br className="hidden md:block" /> — because every detail matters.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/create-new-sheet"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white rounded-full bg-gradient-to-r from-[#219B9D] to-[#219B9D]/80 hover:from-[#A7E4CD] hover:to-[#A7E4CD]/80 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Create Your Sheet
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/scan-qr"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-black bg-white border-2 border-green-400 rounded-full hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <motion.i
                  className="fi fi-rs-qr-scan pe-2"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                Scan QR
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 1 }}
              >
                <StatCounter value={stat.number} />
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="lg:col-span-6 flex justify-end items-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={'/assets/homepage_hero.webp'}
            width={1000}
            height={1000}
            loading="lazy"
            alt="Hero Section"
            className="w-full h-auto max-w-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
