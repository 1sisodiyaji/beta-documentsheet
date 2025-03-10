import { motion } from 'framer-motion';
import Banner from '../components/common/Banner';
import Features from '../components/Pricing/Features';
import PricingSection from '../components/Pricing/PricingSection';
import Testimonial from '../components/Pricing/Testimonial';
import Contact from '../components/Pricing/Contact';
import { Helmet } from 'react-helmet';

const Pricing = () => {
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
        <title>Pricing - Document Sheet | Affordable Document Management Solutions</title>
        <meta
          name="description"
          content="Explore Document Sheet's pricing plans. Get premium document management features at competitive rates. Choose the plan that best fits your needs."
        />
        <meta
          name="keywords"
          content="document sheet pricing, document management cost, pricing plans, subscription plans, document storage pricing"
        />
        <meta property="og:title" content="Document Sheet Pricing - Choose Your Plan" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com/pricing" />
      </Helmet>

      <Banner
        title="Premium Document Package"
        text="Get 5 High-Quality Sheets with Secure Storage Solution"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-8 sm:py-12 md:py-16 space-y-16 sm:space-y-20 md:space-y-24"
      >
        <motion.div variants={itemVariants}>
          <Features />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingSection />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Testimonial />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm"
        >
          <Contact />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Pricing;
