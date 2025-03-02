import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Pill from '../common/Pill';

const Pricing = () => {
  const features = [
    '5 Premium Quality Sheets',
    'Waterproof & Fireproof File',
    'Professional Format',
    '24/7 Priority Support',
    '30-Day Money-back Guarantee',
    'Free Express Delivery',
  ];

  const benefits = [
    {
      title: 'Secure & Reliable',
      description: 'Bank-grade security for your documents with 99.9% uptime guarantee',
      icon: '',
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing workflow and tools',
      icon: '',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to help you with any questions',
      icon: '',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMGEyOCAyOCAwIDEgMCAtNTYgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjE5QjlEIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Pill text={'Simple Pricing'} />
          <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            Start Managing Your Documents Today
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with our comprehensive package that includes everything you need
          </p>
        </motion.div>

        {/* Main pricing card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#219B9D]"
          >
            <div className="p-8">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900">Professional Package</h3>
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#219B9D] to-[#A7E4CD] opacity-20"></div>
              </div>

              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">100</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>

              <p className="mt-4 text-gray-600">
                Everything you need to manage your documents efficiently
              </p>

              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gradient-to-r from-[#219B9D] to-[#A7E4CD] rounded-full text-white p-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/pricing"
                  className="block w-full py-4 px-6 text-center text-white font-medium bg-gradient-to-r from-[#219B9D] to-[#A7E4CD] rounded-full hover:opacity-90 transition-opacity duration-200 text-lg"
                >
                  Get Started Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Benefits section */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-900 mb-12"
          >
            Why Choose Document Sheet?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Money back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg">
            <p className="text-gray-600">
              <span className="font-semibold">100% money-back guarantee</span> • Cancel anytime •{' '}
              <span className="text-[#219B9D]">No hidden fees</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
