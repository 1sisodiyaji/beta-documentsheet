import { Helmet } from 'react-helmet';
import FiveCards from '../components/home/FiveCards';
import Hero from '../components/home/Hero';
import Cards from '../components/home/Cards';
import Scan from '../components/home/Scan';
import Empowering from '../components/home/Empowering';
import Testimonial from '../components/common/Testimonial';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Document Sheet - Your Digital Document Manager</title>
        <meta
          name="description"
          content="Document Sheet is your ultimate note management solution. Easily store, organize, and access your documents and notes."
        />

        <meta property="og:title" content="Document Sheet - Your Digital Document Manager" />
        <meta
          property="og:description"
          content="Organize and manage your notes with ease using Document Sheet. Create, share, and collaborate on notes."
        />
        <meta property="og:image" content="https://documentsheet.com/android-chrome-192x192.png" />
        <meta property="og:url" content="https://documentsheet.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Document Sheet - Your Digital Document Manager" />
        <meta
          name="twitter:description"
          content="Organize and manage your notes with ease using Document Sheet. Create, share, and collaborate on notes."
        />
        <meta name="twitter:image" content="https://documentsheet.com/android-chrome-192x192.png" />
        <meta name="twitter:url" content="https://documentsheet.com" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com" />
        <meta name="author" content="Somashekhar chalavadi" />
      </Helmet>
      <Hero />
      <Cards />
      <Scan />
      <Empowering />
      <FiveCards />
      <Testimonial />
      <FAQ />
    </>
  );
};

export default Home;
