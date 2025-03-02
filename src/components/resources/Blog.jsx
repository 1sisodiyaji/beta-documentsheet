import { Link } from 'react-router-dom';
import Blogs from '../../data/Blogs';
import TruncateText from '../../utils/TruncateText';
import ShareButton from '../../utils/ShareButton';
import TimeCalculator from '../../utils/TimeCalculator';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique tags from all blogs
  const allTags = [
    'all',
    ...new Set(Blogs.flatMap((blog) => blog.tags.split(',').map((tag) => tag.trim()))),
  ];

  // Filter blogs based on selected tag and search query
  const filteredBlogs = Blogs.filter((blog) => {
    const matchesTag =
      selectedTag === 'all' || blog.tags.toLowerCase().includes(selectedTag.toLowerCase());
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      {/* Search and Filter Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-72 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex gap-3 overflow-x-auto scollbar-hide pb-2 w-full md:w-auto">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  ${
                    selectedTag === tag
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                onClick={() => setSelectedTag(tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Featured Blogs Section */}
      {featuredBlogs.length > 0 && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <Link to={`/resources/${blog.slug}`}>
                  <div className="relative h-64">
                    <img
                      src={blog.image || 'default_image_url.jpg'}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-sm text-gray-200">
                        <TruncateText text={blog.description} maxLength={120} />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Regular Blogs Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {regularBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/resources/${blog.slug}`}>
                <div className="relative h-48">
                  <img
                    loading="lazy"
                    src={blog.image || 'default_image_url.jpg'}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <TimeCalculator text={blog.description} />
                  </div>
                  <ShareButton url={`${window.location.origin}/resources/${blog.slug}`} />
                </div>

                <Link to={`/resources/${blog.slug}`}>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 hover:text-orange-600 transition-colors">
                    {blog.title}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-4">
                  <TruncateText text={blog.description} maxLength={120} />
                </p>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.split(',').map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-orange-50 text-orange-600 rounded-full"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
