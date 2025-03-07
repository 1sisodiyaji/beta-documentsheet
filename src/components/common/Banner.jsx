import { motion } from 'framer-motion';

const Banner = ({ title, text }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-[50vh] bg-gradient-to-br from-[#F8E7C9]/30 via-white to-[#D7EFE3]/30 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -right-20 -top-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -left-20 top-40 w-72 h-72 bg-[#F8E7C9] rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 relative">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 space-y-6 text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4"
            >
              <img
                src="/assets/Banner.png"
                alt="partner logo"
                loading="lazy"
                className="w-32 md:w-40 object-contain mx-auto lg:mx-0"
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              {text}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <h3 className="text-2xl md:text-4xl font-bold">
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                    Go Green Keep It Clean
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400/50 to-green-600/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </h3>
            </motion.div>
          </motion.div>

          {/* Right Decorative Section */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Animated Circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-full border-2 border-green-200/30" />
                </motion.div>
              ))}
              
              {/* Center Element */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-100 to-green-200 shadow-lg flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

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
