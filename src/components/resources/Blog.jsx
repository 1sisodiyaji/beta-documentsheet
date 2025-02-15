'use client'
import Blogs from '../../data/Blogs'
import TruncateText from '../../utils/TruncateText'
import TimeCalculator from '../../utils/TimeCalculator'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const ShareButton = dynamic(() => import('../../utils/ShareButton'), {
  ssr: false,
})
const Blog = () => {
  const largeIndex = [3, 6, 10, 13]

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 max-w-7xl mx-auto my-16 p-2 md:p-8">
      {Blogs.map((blog, index) => {
        const shouldSpan = largeIndex.includes(index)

        return (
          <div
            key={blog.id}
            className={`relative rounded-lg border border-gray-200 hover:border-orange-300 hover:scale-105 hover:cursor-pointer ${shouldSpan ? 'md:col-span-2' : ''}`}
          >
            <div>
              <div className="relative">
                <img
                  loading="lazy"
                  src={blog.image || 'default_image_url.jpg'} // Fallback image
                  alt={blog.title}
                  className="w-full md:h-48 h-36 transition-all group-hover:scale-95"
                />
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-600">
                    <TimeCalculator text={blog.createdOn} />{' '}
                    {/* Use a timestamp here */}
                  </div>
                  <ShareButton
                    url={`https://documentsheet.com/resources/${blog.slug}`}
                  />
                </div>
                <Link href={`/resources/${blog.slug}`}>
                  <h5 className="mt-2 md:text-lg text-md font-semibold text-gray-900 hover:text-green-600 transition-colors">
                    {blog.title}
                  </h5>
                </Link>
                <p className="text-gray-600 font-light mt-2 md:text-sm text-xs">
                  <TruncateText text={blog.description} maxLength={105} />
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Blog
