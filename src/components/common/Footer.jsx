import { Home, PlusCircleIcon, ScanBarcodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Footer = () => {
  const pathname = window.location.pathname;
  return (
    <>
      <footer className="bg-[#C2E9DB] rounded-lg shadow hidden md:block">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
          <span className="text-sm text-black sm:text-center">
            © 2024{' '}
            <Link to="/" className="hover:underline">
              Document Sheet
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-regular sm:mt-0 justify-evenly">
            <li>
              <Link to="/privacy-policy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-condition" className="hover:underline me-4 md:me-6">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:underline me-4 md:me-6">
               Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <motion.footer
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="fixed -bottom-1 left-0 right-0 bg-gray-100 text-white flex justify-around px-4 py-4 md:hidden shadow-3xl rounded-t-2xl"
          >

              {/* Home Button */}
              <motion.a
              className={`flex flex-col items-center group w-1/3 text-xs ${pathname === "/" ? 'text-orange-500' : 'text-gray-500'}`}
              href='/'
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2, color: '#FACC15' }}
            >
              <div className="w-6">
                {pathname === "/" ? (
                   <Home  className="w-full h-full transition-transform duration-300 ease-in-out" />
                ) : (
                  <Home  className="w-full h-full transition-transform duration-300 ease-in-out" />
                )}
              </div>
              Home
            </motion.a>


            {/* Create-new sheet  Button */}
            <motion.a
              className={`flex flex-col items-center  w-1/3 group text-xs ${pathname === "/create-new-sheet" ? 'text-orange-500' : 'text-gray-500'}`}
              href='/create-new-sheet'
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2, color: '#FACC15' }}
            >
              <div className="w-6">
                {pathname === "/create-new-sheet" ? (
                  <PlusCircleIcon className='w-full h-full transition-transform duration-300 ease-in-out' />
                ) : (
                  <PlusCircleIcon className='w-full h-full transition-transform duration-300 ease-in-out' />
                )}
                
                 <small className='text-xs'></small>
              </div>
              <p>Create </p>
            </motion.a>

          

            {/* Settings Button */}
            <motion.a
              className={`flex flex-col items-center  w-1/3  group text-xs ${pathname === "/scan-qr" ? 'text-orange-500' : 'text-gray-500'}`}
             href='/scan-qr'
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2, color: '#FACC15' }}
            >
              <div className="w-6">
                {pathname === "/scan-qr" ? (
                  <ScanBarcodeIcon className="w-full h-full transition-transform duration-300 ease-in-out" />
                ) : (
                  <ScanBarcodeIcon className="w-full h-full transition-transform duration-300 ease-in-out" />
                )}
              </div>  
              Scan
            </motion.a>
          </motion.footer>
    </>
  );
};

export default Footer;
