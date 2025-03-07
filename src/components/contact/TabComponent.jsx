import { Link } from 'react-router-dom';

const TabComponent = () => {
  return (
    <div className="md:max-w-7xl w-full mx-auto flex md:flex-row flex-col gap-6 md:py-12 items-center justify-stretch">
      <Link
        to="tel:9916566269"
        className="xl:w-96 md:h-64  h-auto p-2 flex flex-col justify-center items-center bg-white  border-dashed border-orange-200 border-4 rounded-lg shadow hover:bg-orange-100 hover:scale-95"
      >
        <i className="fi fi-rr-circle-phone  text-3xl"></i>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Call us Now</h5>
        <p className="text-gray-600 hover:underline">9916566269</p>
      </Link>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0000000000005!2d75.10900000000001!3d15.365000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf657e00000001%3A0x0000000000000000!2sOld%20Hubli%2C%20Hubli%2C%20Karnataka%20580024%2C%20India!5e0!3m2!1sen!2sin!4v1684478482503!5m2!1sen!2sin"
        // width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Contact-page"
        className="rounded-lg shadow-lg xl:w-96 md:h-64 h-auto "
      ></iframe>

      <Link
        to="mailto:help@documentsheet.com"
        className="xl:w-96 md:h-64 p-2  h-auto  flex flex-col justify-center items-center bg-white  border-dashed border-orange-200 border-4 rounded-lg shadow hover:bg-orange-100 hover:scale-95"
      >
        <i className="fi fi-rr-envelope text-3xl"></i>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Drop an Email</h5>
        <p className="font-normal text-gray-700 "> help@documentsheet.com</p>
      </Link>
    </div>
  );
};

export default TabComponent;
