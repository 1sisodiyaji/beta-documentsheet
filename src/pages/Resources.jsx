import { Helmet } from 'react-helmet';
import Banner from '../components/common/Banner';
import Blog from '../components/resources/Blog';

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources | Document Sheet</title>
        <meta
          name="description"
          content="Stay updated with the latest insights, tips, and updates from Document Sheet. Explore blogs on productivity, document management, and more."
        />

        <meta property="og:title" content="Resources - Insights and Tips from Document Sheet" />
        <meta
          property="og:description"
          content="Explore engaging articles on productivity, note management, and digital organization. Stay informed with Document Sheet's blog."
        />
        <meta property="og:image" content="https://documentsheet.com/android-chrome-192x192.png" />
        <meta property="og:url" content="https://documentsheet.com/resources" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs - Insights and Tips from Document Sheet" />
        <meta
          name="twitter:description"
          content="Dive into our latest blogs for practical tips on document and note management, boosting productivity, and using Document Sheet."
        />
        <meta name="twitter:image" content="https://documentsheet.com/android-chrome-192x192.png" />
        <meta name="twitter:url" content="https://documentsheet.com/resources" />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://documentsheet.com/resources" />

        <meta name="author" content="Somashekhar Chalavadi" />
      </Helmet>

      <Banner title={'Resources'} text={'Insights, Updates, and Expert Articles.'} />
      <Blog />
    </>
  );
};

export default Resources;
