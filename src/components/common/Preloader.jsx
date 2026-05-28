import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Document Animation */}
        <motion.div
          className="w-24 h-32 bg-white border-2 border-[#219B9D] rounded-lg relative overflow-hidden"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Document Lines Animation */}
          <motion.div
            className="absolute top-4 left-4 w-16 h-2 bg-[#219B9D]/20 rounded"
            animate={{
              width: ['4rem', '2rem', '4rem'],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-8 left-4 w-12 h-2 bg-[#219B9D]/20 rounded"
            animate={{
              width: ['3rem', '1.5rem', '3rem'],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          />
          <motion.div
            className="absolute top-12 left-4 w-14 h-2 bg-[#219B9D]/20 rounded"
            animate={{
              width: ['3.5rem', '2rem', '3.5rem'],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />

          {/* QR Code Corner Animation */}
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-8 border-2 border-[#219B9D] rounded"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute inset-1 grid grid-cols-2 gap-1">
              <div className="bg-[#219B9D]/60"></div>
              <div className="bg-[#219B9D]/60"></div>
              <div className="bg-[#219B9D]/60"></div>
              <div className="bg-[#219B9D]/60"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6 text-center text-[#219B9D] font-medium">
          Welcome to Document Sheet...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
