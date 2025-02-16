import { motion } from 'framer-motion';
import Accordion from '../common/Accordion';

const FAQ = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold p-1">FAQ</h1>
      <div className="my-12 md:py-0 py-12 p-1 md:max-w-7xl mx-auto">
        <motion.section
          className="md:space-y-12 space-y-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {/* First row of accordions */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-between items-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Accordion
              heading="How does Document Sheet ensure the security of my documents?"
              content="Document Sheet ensures the security of your documents by generating a unique QR code that gives you access to your files securely."
            />
            <Accordion
              heading="Can I access my documents from other devices?"
              content="Yes, you can access your documents from any device through our website using the QR code feature."
            />
          </motion.div>

          {/* Second row of accordions */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-between items-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Accordion
              heading="What types of documents can I create with Document Sheet?"
              content="You can create various document types, including receipts, forms, and more, and validate them securely."
            />
            <Accordion
              heading="How do I retrieve my document information using the QR code?"
              content="Simply scan the QR code using any device, and you'll be directed to our website to retrieve your document details."
            />
          </motion.div>

          {/* Third row of accordions */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-between items-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Accordion
              heading="Is there a limit to the number of documents I can create?"
              content="No, you can create an unlimited number of documents, depending on your chosen plan."
            />
            <Accordion
              heading="How can I share my documents with others?"
              content="You can share your documents by sharing the unique QR code associated with each document or sending a link via email."
            />
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default FAQ;
