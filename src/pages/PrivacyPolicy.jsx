import Banner from '../components/common/Banner';
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>

      <Helmet>
        <title>Privacy Policy | Document Sheet</title>
        <meta
          name="description"
          content="Learn how Document Sheet collects, uses, and protects your data. Your privacy is our priority."
        />
        <meta
          name="keywords"
          content="privacy policy, data security, user privacy, document sheet, personal information"
        />
        <meta name="author" content="Document Sheet" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Privacy Policy | Document Sheet" />
        <meta
          property="og:description"
          content="Learn how Document Sheet collects, uses, and protects your data. Your privacy is our priority."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.documentsheet.com/privacy-policy" />
        <meta property="og:image" content="./logo.png" />
      </Helmet>
      <div className="min-h-screen">
        <Banner
          title={'Your Privacy, Our Commitment'}
          text={'We protect your data. Read our privacy policy to learn more.'}
        />

        <div className="md:mx-36 md:py-12  pb-20 pt-6 leading-relaxed px-4 md:text-lg text-sm text-justify">
          <h1 className='font-bold text-2xl mb-2'>Privacy Policy</h1>

          <p className='text-base'>At <strong>Document Sheet</strong>, we prioritize the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your information when you interact with our platform. By using our services, you agree to the practices described below.</p>

          <h2 className='font-semibold text-xl my-2'>Information We Collect</h2>
          <p className='text-base'>We only collect essential information to provide and improve our services. This includes:</p>
          <ul>
            <li className='text-base'><strong>Name:</strong> To identify the user associated with a document sheet.</li>
            <li className='text-base'><strong>Place:</strong> To record the location where the document is used.</li>
            <li className='text-base'><strong>Reason:</strong> To log the purpose of the document sheet usage.</li>
            <li className='text-base'><strong>Date:</strong> To maintain accurate usage records.</li>
          </ul>
          <p className='text-base mt-2'><strong>Note:</strong> We do not collect or use cookies to store any data.</p>

          <h2 className='font-semibold text-xl mb-2 mt-4'>How We Use Your Information</h2>
          <p className='text-base'>The collected data is used for the following purposes:</p>
          <ul>
            <li>👉🏻 To generate and personalize document sheets with accurate details.</li>
            <li>👉🏻 To store and maintain a secure record of all document sheets in our database.</li>
            <li>👉🏻 To validate document sheets using unique serial numbers or QR codes.</li>
            <li>👉🏻 To process refunds for unused document sheets.</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2 mt-4'>Data Security</h2>
          <p className='text-base'>We implement advanced security measures to protect your information:</p>
          <ul>
            <li>👉🏻 Secure servers and encryption to prevent unauthorized access.</li>
            <li>👉🏻 Restricted access to user data, ensuring confidentiality.</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2 mt-4'>User Rights</h2>
          <p className='text-base'>You have the right to:</p>
          <ul>
            <li>👉🏻 Access and validate your document sheet using the serial number or QR code.</li>
            <li>👉🏻 Request a refund for unused sheets.</li>
            <li>👉🏻 Contact us for data-related inquiries or support.</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2 mt-4'>Legal Compliance</h2>
          <p className='text-base'>We strictly adhere to government regulations and do not promote or support any illegal activities.</p>

          <h2 className='font-semibold text-xl mb-2 mt-4'>Contact Us</h2>
          <p className='text-base'>For questions about our Privacy Policy, reach out to us at:</p>
          <ul>
            <li><strong>Phone:</strong> <a href="tel:+919916566269">+919916566269</a></li>
            <li><strong>Email:</strong> <a href="mailto:contact@documentsheet.com">contact@documentsheet.com</a></li>
          </ul>

          <p className='text-xl mb-2 mt-4'><strong>Your trust is our priority, and we are committed to safeguarding your data at all times.</strong></p>

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
