import { motion } from "framer-motion";

const Banner = ({ title, text }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative md:min-h-[60vh] min-h-[40vh] flex items-center justify-center text-center bg-gradient-to-r from-green-100 via-white to-green-100 overflow-hidden px-6 md:px-12"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute right-0 top-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute left-0 bottom-0 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30"
        />
      </div>

      {/* Content */}
      <motion.div variants={itemVariants} className="max-w-4xl md:space-y-6 space-y-2 py-6 z-10">
        <motion.img
          src="/assets/Banner.png"
          alt="Logo"
          loading="lazy"
          className="w-32 md:w-40 mx-auto"
          variants={itemVariants}
        />

        <motion.h1
          className="text-xl md:text-6xl font-extrabold text-gray-800 leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto"
          variants={itemVariants}
        >
          {text}
        </motion.p>

        <motion.h3
          className="text-2xl md:text-4xl font-bold text-green-600"
          variants={itemVariants}
        >
          Go Green, Keep It Clean
        </motion.h3>
      </motion.div>

      {/* Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C480,120 960,-40 1440,40"
            stroke="rgba(134, 239, 172, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,60 C480,140 960,-20 1440,60"
            stroke="rgba(134, 239, 172, 0.1)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Banner;
