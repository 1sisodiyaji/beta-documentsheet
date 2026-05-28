import Banner from '../components/common/Banner';
import { Helmet } from 'react-helmet';
const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy | Document Sheet</title>
        <meta name="description" content="Read our refund policy to understand the terms for returning unused document sheets and refund processing." />
        <meta name="keywords" content="refund policy, document sheet refund, return policy, digital documents" />
        <meta name="author" content="Document Sheet" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Refund Policy | Document Sheet" />
        <meta property="og:description" content="Read our refund policy to understand the terms for returning unused document sheets and refund processing." />
        <meta property="og:image" content="./logo.png" />
        <meta property="og:url" content="https://www.documentsheet.com/refund-policy" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refund Policy | Document Sheet" />
        <meta name="twitter:description" content="Read our refund policy to understand the terms for returning unused document sheets and refund processing." />
        <meta name="twitter:image" content="./logo.png" />
      </Helmet>
      <div className="min-h-screen">
        <Banner title={'Refund Policy'} text={'Read our terms and conditions for more details.'} />

        <div className="md:mx-36 md:py-12  pb-20 pt-6 leading-relaxed px-4 md:text-lg text-sm text-justify">
          <h3 className="font-semibold text-xl mb-2 mt-4">Return & Refund Policy</h3>
          <ul>
            <li>👉🏻 if approved, refund will be credited to your bank account within 10 days</li>
            <li>
              👉🏻 Users who do not utilize a purchased document sheet can return it within <strong>7 days</strong> and receive a <strong>90% refund</strong>, provided that complete and valid information is submitted.
            </li>
            <li>👉🏻 Refund requests made after the stipulated time will not be entertained.</li>
            <li>👉🏻 Refunds will be processed as per our internal policies and applicable legal frameworks.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
