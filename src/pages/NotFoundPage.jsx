import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileX2, Home, PlusCircle, ScanBarcode, Phone } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FileX2 className="mx-auto h-24 w-24 text-[#219B9D] drop-shadow-lg" />
          </motion.div>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-900">Page Not Found</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 space-y-4"
        >
          <p className="text-sm sm:text-base font-medium text-gray-700">Try these useful links instead:</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {[
              { to: "/", icon: Home, text: "Home Page" },
              { to: "/create-new-sheet", icon: PlusCircle, text: "Create Sheet" },
              { to: "/scan-qr", icon: ScanBarcode, text: "Scan QR" },
              { to: "/contact-us", icon: Phone, text: "Contact Us" }
            ].map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={link.to}
                  className="group flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-[#219B9D] hover:bg-[#219B9D]/90 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <link.icon className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform" />
                  </motion.div>
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-sm sm:text-base text-gray-500"
        >
          <p>
            If you believe this is a mistake, please{' '}
            <Link
              to="/contact-us"
              className="text-[#219B9D] hover:text-[#219B9D]/80 font-medium hover:underline transition-all duration-200"
            >
              contact our support team
            </Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
