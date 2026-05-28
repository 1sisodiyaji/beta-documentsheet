import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Blogs from '../data/Blogs';
import ShareButton from '../utils/ShareButton';
import TimeCalculator from '../utils/TimeCalculator';
import TruncateText from '../utils/TruncateText';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const SingleBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = Blogs.find((b) => b.slug === slug);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h2>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <button onClick={() => navigate('/resources')} className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          Back to Articles
        </button>
      </div>
    );
  }

  const parsedDate = new Date(blog.createdOn.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$1-$2'));
  const formattedDate = parsedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Helmet>
        <title>{blog.title} - Document Sheet</title>
        <meta name="description" content={blog.description} />

        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content="https://documentsheet.com/android-chrome-192x192.png" />
        <meta property="og:url" content={`https://documentsheet.com/resources/${blog.slug}`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content="https://documentsheet.com/android-chrome-192x192.png" />
        <meta name="twitter:url" content={`https://documentsheet.com/resources/${blog.slug}`} />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={`https://documentsheet.com/resources/${blog.slug}`} />

        <meta name="author" content="Somashekhar Chalavadi" />
      </Helmet>

      <motion.article className="max-w-4xl mx-auto px-4 py-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/resources" className="hover:text-orange-500">
            Resources
          </Link>
          <span>/</span>
          <span className="text-gray-900">{blog.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <motion.h1 className="text-4xl font-bold text-gray-900 mb-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            {blog.title}
          </motion.h1>

          <motion.div className="flex flex-wrap items-center gap-4 text-sm text-gray-500" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formattedDate}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <TimeCalculator text={blog.description} />
            </div>
            <ShareButton url={window.location.href} />
          </motion.div>
        </header>

        {/* Featured Image */}
        <motion.div className="relative rounded-xl overflow-hidden mb-12 shadow-xl" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <img src={blog.image} alt={blog.title} className="w-full h-[400px] object-cover" />
        </motion.div>

        {/* Content */}
        <motion.div className="prose prose-lg max-w-none blog-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} dangerouslySetInnerHTML={{ __html: blog.description }}></motion.div>

        <style>{`
          .blog-content {
            color: #374151;
            line-height: 1.8;
          }
          
          .blog-content h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;
            color: #1F2937;
          }
          
          .blog-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 1rem;
            color: #1F2937;
          }
          
          .blog-content p {
            margin-bottom: 1.5rem;
            font-size: 1.125rem;
          }
          
          .blog-content ul, .blog-content ol {
            margin: 1.5rem 0;
            padding-left: 1.5rem;
          }
          
          .blog-content li {
            margin: 0.5rem 0;
            font-size: 1.125rem;
          }
          
          .blog-content ul li {
            list-style-type: disc;
          }
          
          .blog-content ol li {
            list-style-type: decimal;
          }
          
          .blog-content a {
            color: #F97316;
            text-decoration: underline;
            transition: color 0.2s;
          }
          
          .blog-content a:hover {
            color: #EA580C;
          }
          
          .blog-content blockquote {
            border-left: 4px solid #F97316;
            padding-left: 1rem;
            margin: 1.5rem 0;
            font-style: italic;
            color: #4B5563;
          }
          
          .blog-content code {
            background-color: #F3F4F6;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-family: monospace;
          }
          
          .blog-content pre {
            background-color: #F3F4F6;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1.5rem 0;
          }
          
          .blog-content img {
            border-radius: 0.5rem;
            margin: 1.5rem 0;
            max-width: 100%;
            height: auto;
          }
          
          .blog-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
          }
          
          .blog-content th, .blog-content td {
            border: 1px solid #E5E7EB;
            padding: 0.75rem;
            text-align: left;
          }
          
          .blog-content th {
            background-color: #F9FAFB;
            font-weight: 600;
          }
          
          .blog-content hr {
            border: 0;
            border-top: 1px solid #E5E7EB;
            margin: 2rem 0;
          }
          
          @media (max-width: 768px) {
            .blog-content h2 {
              font-size: 1.75rem;
            }
            
            .blog-content h3 {
              font-size: 1.25rem;
            }
            
            .blog-content p, .blog-content li {
              font-size: 1rem;
            }
          }
        `}</style>

        {/* Tags */}
        <motion.div className="mt-12" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
          <h3 className="text-lg font-semibold mb-4">Topics</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.split(',').map((tag, index) => (
              <span key={index} className="px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                {tag.trim()}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.section className="mt-16" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Blogs.filter((b) => b.slug !== slug)
              .slice(0, 2)
              .map((relatedBlog, index) => (
                <motion.div key={index} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ y: -5 }}>
                  <Link to={`/resources/${relatedBlog.slug}`} className="block">
                    <div className="relative h-48">
                      <img src={relatedBlog.image} alt={relatedBlog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-lg font-semibold mb-2">{relatedBlog.title}</h3>
                        <p className="text-sm text-gray-200">
                          <TruncateText text={stripHtml(blog.description)} maxLength={120} />
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.section>

        {/* Back to Articles */}
        <motion.div className="mt-16 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <Link to="/resources" className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Articles
          </Link>
        </motion.div>
      </motion.article>
    </>
  );
};

export default SingleBlog;
