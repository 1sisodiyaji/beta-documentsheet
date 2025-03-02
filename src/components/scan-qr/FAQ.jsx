import { motion } from 'framer-motion';
import Accordion from '../common/Accordion';
import Pill from '../common/Pill';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: 'How secure is the QR code scanning process?',
      answer:
        'Our QR code scanning process uses advanced encryption and secure protocols to ensure your documents remain protected. Each QR code is uniquely generated and can be set with access permissions.',
    },
    {
      question: 'Can I access documents offline after scanning?',
      answer:
        'Yes, you can enable offline access for specific documents. Once cached, these documents will be available even without an internet connection.',
    },
    {
      question: 'What types of documents can I share via QR codes?',
      answer:
        'You can share virtually any type of document including PDFs, Word documents, images, and more. Our system supports all common file formats used in real estate transactions.',
    },
    {
      question: 'How long are QR codes valid?',
      answer:
        'You can set custom expiration dates for your QR codes. By default, they remain valid until you explicitly disable them through your account settings.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Pill text={'FAQ'} />
          <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            Common Questions About QR Scanning
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl space-y-4 mx-auto text-black"
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              heading={faq.question}
              content={faq.answer}
              isFirst={index === 0}
              isLast={index === faqs.length - 1}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#219B9D] to-[#A7E4CD] text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-200"
            >
              <Link to="/contact-us">Contact Support</Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
