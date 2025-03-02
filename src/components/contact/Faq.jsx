import React from 'react';
import { motion } from 'framer-motion';
import Pill from '../common/Pill';

const FAQ = () => (
  <motion.section
    className="py-12 bg-gray-50"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex justify-center">
        <Pill text={'FAQ'} />
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          {
            question: 'What are your support hours?',
            answer: 'Our support team is available Monday to Friday, 9:00 AM to 6:00 PM IST.',
          },
          {
            question: 'How quickly do you respond to inquiries?',
            answer: 'We aim to respond to all inquiries within 24 hours during business days.',
          },
          {
            question: 'Do you offer emergency support?',
            answer:
              'Yes, we provide priority support for urgent issues related to document access or security concerns.',
          },
        ].map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default FAQ;
