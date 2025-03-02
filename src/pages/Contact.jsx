import TabComponent from '../components/contact/TabComponent';
import ContactPageMessage from '../components/contact/ContactPageMessage';
import Banner from '../components/common/Banner';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Faq from '../components/contact/Faq';
import Pill from '../components/common/Pill';

const Contact = () => {
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
        className="py-12 p-1 space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <TabComponent />
          </motion.div>
        </div>

        <div className="flex justify-center">
          <Pill text={'Query section'} />
        </div>
        <motion.h2
          className="md:text-2xl text-lg text-center font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Got a query? Let us know, and we'll respond promptly!
        </motion.h2>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <ContactPageMessage />
          </motion.div>
        </div>
      </motion.div>
      <Faq />
    </>
  );
};

export default Contact;
