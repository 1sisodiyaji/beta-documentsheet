import Banner from '../components/common/Banner';
import { Helmet } from "react-helmet";

const TermsCondition = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Document Sheet</title>
        <meta name="description"    content="Read our terms and conditions to understand the guidelines for using Document Sheet services."  />
        <meta name="keywords"  content="terms and conditions, document sheet, usage policy, guidelines, legal terms" />
        <meta name="author" content="Document Sheet" />
        <meta property="og:title" content="Terms and Conditions | Document Sheet" />
        <meta property="og:description"  content="Read our terms and conditions to understand the guidelines for using Document Sheet services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.documentsheet.com/terms-conditions" />
        <meta property="og:image" content="./logo.png" />
      </Helmet>

      <div className="min-h-screen">
        <Banner
          title={'Terms and Conditions of Use'}
          text={'Read our terms and conditions for more details.'}
        />

        <div className="md:mx-36 md:py-12  pb-20 pt-6 leading-relaxed px-4 md:text-lg text-sm text-justify">
          <h1 className='font-bold text-2xl mb-2'>Policy & Guidelines</h1>

          <h2 className='font-semibold text-xl mb-2'>Introduction</h2>
          <p className='text-base'>Welcome to Document Sheet. We are committed to ensuring a secure and transparent process for the issuance and use of our digital and physical document sheets. This Policy & Guidelines page outlines the terms, conditions, and ethical use of our services.</p>
          <p className='text-base'>By accessing and utilizing our website and services, you agree to abide by these policies, ensuring compliance with all applicable laws and regulations.</p>

          <h2 className='font-semibold text-xl mb-2 mt-4'>Legal Compliance</h2>
          <p className='text-base'>Document Sheet operates in strict adherence to legal guidelines. Our document sheets are not stamp papers but serve as supplementary pages in bond agreements and other legal documentation.</p>
          <p className='text-base'>We comply with all government regulations, including <strong>GST Registration</strong> and <strong>MSME Registration</strong>, ensuring legitimacy and reliability.</p>

          <h2 className='font-semibold text-xl mb-2 mt-4'>Authorized Use</h2>
          <p className='text-base'>Our document sheets are intended for various formal purposes, such as:</p>
          <ul>
            <li>👉🏻 Private company records</li>
            <li>👉🏻 Biodata</li>
            <li>👉🏻 Applications</li>
            <li>👉🏻 Agreements</li>
            <li>👉🏻 Stories and novels</li>
          </ul>
          <p className='text-base mt-3'>The information entered on our website, including Name, Date, Place, Purpose, State, and District, is securely stored and becomes a permanent part of the document’s history. Users are responsible for providing accurate information, as any errors cannot be rectified once recorded.</p>

          <h2 className='font-semibold text-xl mb-2 mt-4'>Key Policies</h2>

          <h3 className='font-semibold text-xl mb-2 mt-4'>1. Document Sheet Usage</h3>
          <ul>
            <li>👉🏻 Each document sheet is issued with a unique serial number and QR code, ensuring authenticity and preventing duplication.</li>
            <li>👉🏻 Once used, the document sheet’s details remain securely stored in our database and cannot be modified.</li>
            <li>👉🏻 Misuse, forgery, or unauthorized replication of document sheets violates our policies and may lead to legal consequences.</li>
          </ul>

          <h3 className='font-semibold text-xl mb-2 mt-4'>2. Data Security & Confidentiality</h3>
          <ul>
            <li>👉🏻 We prioritize the security of user data and do not use cookies for storage.</li>
            <li>👉🏻 User information is encrypted and protected from unauthorized access.</li>
            <li>👉🏻 Retrieval of document sheet details is available through QR code scanning or serial number search, with a minimal service fee for downloading a Validation Certificate.</li>
          </ul>

          <h3 className='font-semibold text-xl mb-2 mt-4'>3. Return & Refund Policy</h3>
          <ul>
            <li>👉🏻 Users who do not utilize a purchased document sheet can return it within <strong>7 days</strong> and receive a <strong>90% refund</strong>, provided that complete and valid information is submitted.</li>
            <li>👉🏻 Refund requests made after the stipulated time will not be entertained.</li>
            <li>👉🏻 Refunds will be processed as per our internal policies and applicable legal frameworks.</li>
          </ul>

          <h3 className='font-semibold text-xl mb-2 mt-4'>4. Purchase & Delivery</h3>
          <ul>
            <li>👉🏻 Customers can purchase a <strong>Document Sheet Package</strong> for <strong>INR 100</strong>, which includes five high-quality document sheets and a fireproof and waterproof storage file.</li>
            <li>👉🏻 Orders can be placed via our website, and products will be shipped to the provided address.</li>
            <li>👉🏻 Our services are available across India, ensuring accessibility to all users.</li>
          </ul>

          <h3 className='font-semibold text-xl mb-2 mt-4'>5. Liability & Disclaimers</h3>
          <ul>
            <li>👉🏻 We do not guarantee the accuracy, completeness, or suitability of the information provided on the website.</li>
            <li>👉🏻 Users must independently assess whether the document sheet meets their specific legal or personal requirements.</li>
            <li>👉🏻 Unauthorized use, fraudulent activities, or tampering with the document sheet will result in permanent revocation of services.</li>
            <li>👉🏻 Force majeure events, including natural disasters or technical failures, absolve us of any liability.</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2 mt-4'>Terms of Service Agreement</h2>
          <p className='text-base'>By using our website and availing of our services, users enter into a legally binding agreement with Document Sheet. This agreement ensures that users:</p>
          <ul>
            <li>👉🏻 Acknowledge and accept all policies and guidelines outlined herein.</li>
            <li>👉🏻 Take full responsibility for the accuracy of the information they provide.</li>
            <li>👉🏻 Understand that unauthorized use of document sheets may result in legal consequences.</li>
            <li>👉🏻 Agree to periodic updates of policies without prior notification.</li>
            <li>👉🏻 Adhere to all applicable laws in India governing the usage of document sheets.</li>
          </ul>

          <h2 className='font-semibold text-xl mb-2 mt-4'>Customer Support & Contact Information</h2>
          <p className='text-base'>For any queries, concerns, or refund requests, users can contact us via:</p>
          <ul>
            <li><strong>Phone:</strong> <a href="tel:+919916566269">+919916566269</a></li>
            <li><strong>Email:</strong> <a href="mailto:contact@documentsheet.com">contact@documentsheet.com</a></li>
          </ul>

          <p className='text-base'>We are committed to providing a secure and user-friendly experience for all our customers. By following these policies and guidelines, we aim to maintain the integrity and authenticity of our document sheets, ensuring a reliable service for all users.</p>

          <p><strong>Thank you for choosing Document Sheet. This association has contributed to develop this product in this business</strong></p>

        </div>
      </div>
    </>
  );
};

export default TermsCondition;
