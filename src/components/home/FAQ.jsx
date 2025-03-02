import { motion } from 'framer-motion';
import Accordion from '../common/Accordion';
import Pill from '../common/Pill';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does Document Sheet ensure the security of my documents?',
      answer:
        'Document Sheet ensures the security of your documents through multiple layers of protection including unique QR codes, encrypted storage, and secure access controls. Each document is individually protected and can only be accessed by authorized users.',
    },
    {
      question: 'Can I access my documents from other devices?',
      answer:
        'Yes, you can access your documents from any device through our website using the QR code feature. Our platform is fully responsive and works seamlessly across desktop, tablet, and mobile devices.',
    },
    {
      question: 'What types of documents can I create with Document Sheet?',
      answer:
        'You can create various document types, including receipts, forms, contracts, and more. Our platform is especially designed for real estate documentation needs, with customizable templates and validation features.',
    },
    {
      question: 'How do I retrieve my document information using the QR code?',
      answer: `Simply scan the QR code using any QR code scanner or your device camera. You'll be instantly directed to your document's secure page where you can view and manage all the details.`,
    },
    {
      question: 'Is there a limit to the number of documents I can create?',
      answer:
        'The number of documents you can create depends on your subscription plan. Basic plans start with 50 documents, while our Enterprise plan offers unlimited document creation.',
    },
    {
      question: 'How can I share my documents with others?',
      answer:
        'You can share documents by sharing the unique QR code or generating a secure link. You have full control over access permissions and can track who views your documents.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMGEyOCAyOCAwIDEgMCAtNTYgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjE5QjlEIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] opacity-5" />

      <div className="max-w-5xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Pill text={'FAQ'} />
          <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about Document Sheet
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-sm"
            >
              <Accordion heading={faq.question} content={faq.answer} />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-r from-[#219B9D]/10 to-[#A7E4CD]/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900">Still have questions?</h3>
          <p className="mt-2 text-gray-600">
            Can't find what you're looking for? Please chat to our friendly team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-[#219B9D] to-[#A7E4CD] text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-200"
          >
            <Link to={'/contact-us'}> Contact Support </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
