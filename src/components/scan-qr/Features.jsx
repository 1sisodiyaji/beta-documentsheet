import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const Features = () => {
  const features = [
    {
      title: 'Instant Access',
      description: 'Access your documents instantly with a simple QR code scan.',
      icon: '⚡',
    },
    {
      title: 'Secure Sharing',
      description: 'Share documents securely with controlled access permissions.',
      icon: '🔒',
    },
    {
      title: 'Version Control',
      description: 'Track and manage different versions of your documents.',
      icon: '📝',
    },
    {
      title: 'Mobile Friendly',
      description: 'Access documents on any device with our responsive interface.',
      icon: '📱',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Pill text={'Key Features'} />
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-5xl">
            Why Choose Our QR Solution
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
