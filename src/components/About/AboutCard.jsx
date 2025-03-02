import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const animationVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const AboutCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:py-24 py-16">
      <div className="flex justify-center w-full">
        {' '}
        <Pill text="Smooth Process" />{' '}
      </div>
      <h1 className="md:text-4xl text-xl font-bold text-center mb-8 p-1">
        Simplifying Documentation for a Smarter Future
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <motion.div
          className="flex flex-col space-y-8"
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={animationVariants}
        >
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-300">
            <h2 className="md:text-xl text-lg font-bold mb-4">Fast & Hassle-Free Processes</h2>
            <p className="text-gray-700 md:text-base text-xs">
              Save time and effort with our streamlined documentation services, designed to
              eliminate long queues and paperwork.
            </p>
          </div>
          <div className="bg-orange-100 rounded-lg shadow-md p-6">
            <h2 className="md:text-xl text-lg font-bold mb-4">Secure Online Access</h2>
            <p className="text-gray-700 md:text-base text-xs">
              We prioritize your privacy with state-of-the-art security to ensure your documents are
              safe and accessible.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732423504/3_mbfrjp.gif"
            alt="Documentation Services"
            className="w-2/3 rounded-full shadow-lg"
            width={400}
            loading="lazy"
            height={400}
          />
        </motion.div>

        <motion.div
          className="flex flex-col space-y-8"
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={animationVariants}
        >
          <div className="bg-orange-100 rounded-lg shadow-md p-6">
            <h2 className="md:text-xl text-lg font-bold mb-4">Innovative Solutions</h2>
            <p className="text-gray-700 md:text-base text-xs">
              We bring cutting-edge technology to modernize the way documents are created, managed,
              and accessed.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-orange-300">
            <h2 className="md:text-xl text-lg font-bold mb-4">User-Friendly Interface</h2>
            <p className="text-gray-700 md:text-base text-xs">
              Enjoy a seamless experience with our intuitive platform designed for all levels of
              users.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutCard;
