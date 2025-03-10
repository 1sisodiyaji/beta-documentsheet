import TabComponent from '../components/contact/TabComponent';
import ContactPageMessage from '../components/contact/ContactPageMessage';
import Banner from '../components/common/Banner';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Faq from '../components/contact/Faq';
import Pill from '../components/common/Pill';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Document Sheet | Get Support & Assistance</title>
        <meta
          name="description"
          content="Get in touch with Document Sheet's support team. We're here to help you with any questions about our document management solutions and services."
        />
        <meta
          name="keywords"
          content="contact document sheet, customer support, help desk, document management support, technical assistance, contact us"
        />
        <meta property="og:title" content="Contact Document Sheet - Get Support & Assistance" />
        <meta
          property="og:description"
          content="Need help with Document Sheet? Our support team is ready to assist you with any questions about our document management solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com/contact" />
      </Helmet>

      <Banner title={'Contact Us'} text={'Get in Touch with Our Team'} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 space-y-12 max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="w-full max-w-4xl"
          >
            <TabComponent />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Pill text={'Query section'} />
            </motion.div>
          </div>

          <motion.h2
            variants={itemVariants}
            className="md:text-2xl text-lg text-center font-semibold text-gray-800"
          >
            Got a query? Let us know, and we&apos;ll respond promptly!
          </motion.h2>

          <div className="flex justify-center items-center">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ContactPageMessage />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <Faq />
      </motion.div>
    </>
  );
};

export default Contact;
