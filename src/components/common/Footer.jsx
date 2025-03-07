import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="bg-[#C2E9DB] rounded-lg shadow">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center">
          <span className="text-sm text-black sm:text-center">
            {' '}
            2025{' '}
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

    </>
  );
};

export default Footer;
