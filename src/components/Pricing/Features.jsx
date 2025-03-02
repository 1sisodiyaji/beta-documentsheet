import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const Features = () => (
  <motion.section
    className="max-w-7xl mx-auto md:py-24 py-16 px-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex justify-center">
      <Pill text={'Why We'} />
    </div>
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Package?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: '🛡️',
          title: 'Premium Quality',
          description: 'Made with high-grade materials for lasting durability',
        },
        {
          icon: '🔒',
          title: 'Secure Storage',
          description: 'Waterproof and fireproof file protection included',
        },
        {
          icon: '✨',
          title: 'Professional Format',
          description: 'Designed to meet industry standards and requirements',
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg hover:border hover:shadow-xl hover:shadow-orange-100 transition-shadow"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Features;
