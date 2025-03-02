import { motion } from 'framer-motion';

const Banner = ({ title, text }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const pathVariants = {
    hidden: { strokeDasharray: 3000, strokeDashoffset: 3000 },
    visible: {
      strokeDashoffset: 0,
      transition: { duration: 5, ease: 'easeInOut' },
    },
    moving: {
      strokeDashoffset: -30, // Moves the dashes continuously
      transition: {
        duration: 4, // Adjust for speed
        ease: 'linear',
        repeat: Infinity, // Loops infinitely
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className=" relative flex justify-center items-center md:h-72 h-48 bg-gradient-to-b from-[#F8E7C9] to-[#D7EFE3]"
      >
        <div className="text-center">
          <motion.h1
            className="md:text-3xl text-xl font-semibold text-gray-800 p-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            variants={textVariants}
          >
            {title}
          </motion.h1>
          <p className="mt-4">{text}</p>

          <motion.div
            className="absolute bottom-0 left-0 -z-1 w-full"
            initial="hidden"
            animate="visible"
          >
            <svg
              width="1725"
              height="195"
              viewBox="0 0 1725 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <motion.path
                strokeWidth="1"
                variants={pathVariants}
                d="M1.2036 120.039C1.2036 120.039 349.204 55.9144 235.21 25.0394C121.216 -5.83563 153.71 83.0395 235.21 120.039C316.71 157.039 433.204 114.789 433.204 114.789C433.204 114.789 647.21 39.5393 649.204 112.164C651.197 184.79 760.697 179.54 865.204 109.539C969.71 39.5393 1173.7 54.7896 1240.71 99.0394C1307.72 143.289 1482.7 135.79 1513.2 101.664C1543.71 67.5393 1729.2 99.0394 1729.2 99.0394"
                stroke="whitesmoke"
              />
              <motion.path
                strokeWidth="1"
                variants={pathVariants}
                d="M3.2036 141.039C3.2036 141.039 351.204 76.9144 237.21 46.0394C123.216 15.1644 155.71 104.039 237.21 141.039C318.71 178.039 435.204 135.789 435.204 135.789C435.204 135.789 649.21 60.5393 651.204 133.164C653.197 205.79 762.697 200.54 867.204 130.539C971.71 60.5393 1175.7 75.7896 1242.71 120.039C1309.72 164.289 1484.7 156.79 1515.2 122.664C1545.71 88.5393 1731.2 120.039 1731.2 120.039"
                stroke="lightgreen"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Banner;
