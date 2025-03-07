import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Home, ScanBarcode, IndianRupee, Phone, Info } from 'lucide-react';

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const pathname = window.location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/scan-qr', label: 'Scan QR', icon: ScanBarcode },
    { href: '/about', label: 'About', icon: Home },
    { href: '/resources', label: 'Resources', icon: Info },
    { href: '/pricing', label: 'Pricing', icon: IndianRupee },
    { href: '/contact-us', label: 'Contact Us', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setScrollWidth(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header>
        <nav
          className={`fixed w-full z-50 top-0 start-0 ${
            isScrolled ? 'bg-white shadow-md text-black duration-300' : 'bg-transparent text-black'
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732386338/WhatsApp_Image_2024-11-21_at_14.55.25_edab2be6_gtoaak-removebg-preview_dnynlk.png"
                width={40}
                height={40}
                loading="lazy"
                alt="logo"
                className="w-10 h-10 object-contain"
              />
              <span className="self-center text-2xl font-regular whitespace-nowrap hidden md:flex">
                Document Sheet
              </span>
            </Link>

            <div className="hidden lg:flex space-x-6 rtl:space-x-reverse font-regular">
             
             {!isMenuOpen && ( navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-2 px-3 flex items-center gap-2  hover:text-[#219B9D] transition-colors ${
                    pathname === link.href ? 'text-[#219B9D] font-medium' : 'text-gray-700'
                  }`}
                >
                  {link.label} 
                </Link>
              )))}
            </div>

            {/* Right Section */}
            <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
              <Link to="/create-new-sheet">
                <button
                  type="button"
                  className="text-white bg-[#219B9D] hover:bg-[#219B9D]/90 font-medium rounded-3xl text-sm px-5 md:px-2 md:py-1 lg:px-5 lg:py-2.5 text-center hidden lg:flex items-center gap-2 transition-all duration-200 hover:scale-105"
                >
                  Get Your Sheet
                </button>
              </Link>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#219B9D]"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="h-0.5  absolute bottom-0 left-0 w-full">
            <div
              className="h-full bg-[#219B9D] transition-all duration-200"
              style={{ width: `${scrollWidth}%` }}
            />
          </div>
        </nav>

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="self-end p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo in Sidebar */}
            <div className="flex items-center gap-3 px-2 mb-6">
              <img
                src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732386338/WhatsApp_Image_2024-11-21_at_14.55.25_edab2be6_gtoaak-removebg-preview_dnynlk.png"
                width={40}
                height={40}
                loading="lazy"
                alt="logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-medium">Document Sheet</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    pathname === link.href
                      ? 'bg-[#219B9D]/10 text-[#219B9D]'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Create New Sheet Button in Sidebar */}
            <Link to="/create-new-sheet" className="mt-6">
              <button
                type="button"
                className="w-full text-white bg-[#219B9D] hover:bg-[#219B9D]/90 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200"
              >
                Get Your Sheet
              </button>
            </Link>

            {/* Footer Links in Sidebar */}
            <div className="mt-auto border-t pt-4">
              <div className="flex flex-col space-y-2 text-sm text-gray-600">
                <Link to="/refund-policy" className="hover:text-[#219B9D]">
                  Refund Policy
                </Link>
                <Link to="/privacy-policy" className="hover:text-[#219B9D]">
                  Privacy Policy
                </Link>
                <Link to="/terms-condition" className="hover:text-[#219B9D]">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all"
          ></div>
        )}
      </header>
    </>
  );
};

export default Navbar;
