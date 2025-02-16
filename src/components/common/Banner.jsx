import { motion } from 'framer-motion';

const Banner = ({ title, text }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  return (
    <>
      <div className="flex justify-center items-center md:h-72 h-48 bg-gradient-to-b from-[#F8E7C9] to-[#D7EFE3]">
        <div className="text-center">
          <motion.h1
            className="md:text-3xl text-xl font-semibold text-gray-800 p-1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {title.split('').map((char, index) => (
              <motion.span key={index} variants={child} className=" py-2">
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p className="mt-4">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
