import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const Values = () => (
  <motion.section
    className="md:py-24 py-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center w-full">
        {' '}
        <Pill text="Our Core Values" />{' '}
      </div>
      <h2 className="text-3xl font-bold text-center mb-12">
        Building Trust Through Integrity & Excellence
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: '🎯',
            title: 'Innovation',
            description: 'Constantly pushing boundaries to create better solutions',
          },
          {
            icon: '🤝',
            title: 'Trust',
            description: 'Building lasting relationships through reliability and transparency',
          },
          {
            icon: '⚡',
            title: 'Excellence',
            description: 'Committed to delivering the highest quality in everything we do',
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Values;
