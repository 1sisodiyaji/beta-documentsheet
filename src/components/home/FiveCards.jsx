import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const FiveCards = () => {
  const steps = [
    {
      number: 1,
      title: 'Create Your Sheet',
      image: 'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1733941760/image_19_gsh3ic.png',
      color: 'bg-emerald-50',
      accent: 'bg-emerald-100',
    },
    {
      number: 2,
      title: 'Pay Online',
      image: 'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734194029/image_16_iokvq8.png',
      color: 'bg-orange-50',
      accent: 'bg-orange-100',
    },
    {
      number: 3,
      title: 'Share Your Experience',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734190122/Simplification_2_agko2f.png',
      color: 'bg-blue-50',
      accent: 'bg-blue-100',
    },
    {
      number: 4,
      title: 'Access Your Sheet',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      color: 'bg-purple-50',
      accent: 'bg-purple-100',
    },
    {
      number: 5,
      title: 'Create Another Sheet',
      image:
        'https://res.cloudinary.com/dlgyf2xzu/image/upload/v1734025428/Simplification_mlxmlr.png',
      color: 'bg-pink-50',
      accent: 'bg-pink-100',
      isLink: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Pill text={' How It Works'} />
          <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            Simple Steps to Get Started
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We've made your journey simple and innovative for a better experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`relative group rounded-2xl ${step.color} p-8 shadow-lg overflow-hidden`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-2xl transform rotate-45"></div>

              {step.isLink ? (
                <Link
                  to="/create-new-sheet"
                  className="flex flex-col items-center space-y-4 relative"
                >
                  <motion.div
                    className={`w-12 h-12 ${step.accent} rounded-full flex items-center justify-center text-lg font-semibold`}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fi fi-rr-add text-5xl"></i>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-center">Start a new document sheet journey</p>
                </Link>
              ) : (
                <div className="flex flex-col items-center space-y-4 relative">
                  <div
                    className={`w-12 h-12 ${step.accent} rounded-full flex items-center justify-center text-lg font-semibold`}
                  >
                    {step.number}
                  </div>
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-24 h-24 object-contain"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#219B9D] to-transparent rounded-full"></div>
                </div>
              )}

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-gray-300"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FiveCards;
