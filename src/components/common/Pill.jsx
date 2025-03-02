import React from 'react';
import { motion } from 'framer-motion';

const Pill = ({ text }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-block text-[#219B9D] text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-[#219B9D]/10 cursor-pointer"
    >
      {text}
    </motion.span>
  );
};

export default Pill;
