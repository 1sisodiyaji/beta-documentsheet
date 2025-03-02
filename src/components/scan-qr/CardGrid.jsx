import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Pill from '../common/Pill';

const CardGrid = () => {
  return (
    <section className="md:py-24 py-16 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Pill text={'Document Management'} />
        <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
          Streamline Your Workflow
        </h2>
      </motion.div>

      <div className="grid grid-cols-4 md:gap-6 gap-2 p-1">
        <motion.div
          className="col-span-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center items-center md:min-h-64 p-5 bg-gradient-to-r from-orange-600 to-orange-300 border border-orange-200 rounded-lg shadow hover:scale-95 hover:shadow-lg transition-transform duration-300">
            <h5 className="mb-2 md:text-3xl text-md font-bold tracking-tight text-white p-1">
              Manage Your Documents Seamlessly
            </h5>
            <p className="font-normal text-white md:text-md text-xs">
              Quickly access, organize, and share your document sheets with an intuitive and secure
              interface.
            </p>
            <Link
              to={'/create-new-sheet'}
              className="md:my-4 my-1 md:px-8 px-3 md:py-2 py-1 md:text-lg text-xs border border-dashed border-green-200 rounded-lg text-orange-100 shadow-md bg-orange-500 hover:bg-orange-400"
            >
              Create New Sheet
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <section className="flex justify-center items-center bg-[#78C1D7] rounded-lg hover:scale-95 transition-transform duration-300 md:min-h-64 h-full">
            <video
              src="https://res.cloudinary.com/dlgyf2xzu/video/upload/v1732423499/8b_2_e3ccwi.mp4"
              autoPlay
              loop
              muted
              className="w-full h-auto rounded-lg mb-4"
            />
          </section>
        </motion.div>

        <motion.div
          className="col-span-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center items-center md:min-h-72 md:p-6 p-5 bg-gradient-to-r from-[#5ba375] to-[#1A776F] border border-orange-200 rounded-lg shadow hover:scale-95 hover:shadow-lg transition-transform duration-300">
            <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-white">
              Track, Update, and Collaborate
            </h5>
            <p className="font-normal text-white md:text-base text-xs text-center">
              Stay on top of your document sheets with real-time updates and collaborative tools for
              teams.
            </p>
            <Link
              to={'/pricing'}
              className="md:my-4 my-1 md:px-8 px-3 md:py-2 py-1 md:text-lg text-xs border border-dashed border-green-200 rounded-lg text-white shadow-md bg-green-500 hover:bg-green-400"
            >
              See our pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CardGrid;
