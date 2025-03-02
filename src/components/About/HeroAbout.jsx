import Pill from '../common/Pill';

const HeroAbout = () => {
  return (
    <>
      <section className="md:py-24 py-16 p-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Section */}
          <div className="relative">
            <div className="absolute bg-orange-100 w-full h-full rounded-full -top-10 -left-10 z-0"></div>
            <div className="relative z-10">
              <div className="flex space-x-4">
                <img
                  src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732434259/1a__4_-removebg-preview_gmm7s1.png"
                  alt="Lady in Car 1"
                  className="w-2/3 rounded-lg"
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
                <img
                  src="https://res.cloudinary.com/dlgyf2xzu/image/upload/v1732545539/1_keu1x0.png"
                  alt="Lady in Car 2"
                  className="w-1/3 rounded-lg shadow-lg"
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div>
            <Pill text={'Who we are'} />
            <h2 className="md:text-4xl text-xl font-bold text-gray-800 mt-2 p-1">
              Simplifying Document Management for You
            </h2>
            <p className="text-gray-600 mt-4 md:text-base text-xs">
              We specialize in providing high-quality, customizable document sheets tailored to meet
              your needs. Whether you&apos;re managing data, creating templates, or organizing
              records, our services ensure a seamless experience with unparalleled reliability and
              precision.
            </p>
            <div className="mt-8 space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m0 0l-3 3m3-3H9m-6 0h3M21 12h-3m0 0a2 2 0 002 2m-6 0a2 2 0 01-2-2m0-4a2 2 0 00-2-2m6 0a2 2 0 002-2"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="md:text-lg text-md font-semibold text-gray-800">
                    Customizable Templates
                  </h3>
                  <p className="text-gray-600 md:text-base text-xs">
                    Create and customize templates to fit your unique business needs. From invoices
                    to reports, we’ve got you covered.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6M9 8h6"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="md:text-lg text-md font-semibold text-gray-800">
                    Seamless Integration
                  </h3>
                  <p className="text-gray-600 md:text-base text-xs">
                    Our document sheets can be easily integrated into your existing workflows,
                    ensuring a smooth and hassle-free experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAbout;
