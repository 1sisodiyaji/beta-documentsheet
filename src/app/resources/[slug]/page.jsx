'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Blogs from '../../../data/Blogs'
import ShareButton from '../../../utils/ShareButton'
import TimeCalculator from '../../../utils/TimeCalculator'
import TruncateText from '../../../utils/TruncateText'
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar'
import Link from 'next/link'

const SingleBlog = () => {
  const { slug } = useParams()
  const blog = Blogs.find((b) => b.slug === slug)

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Blog not found.
      </div>
    )
  }
  const parsedDate = new Date(
    blog.createdOn.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$1-$2')
  )

  return (
    <>
      <div className="max-w-7xl mx-auto my-24 flex md:flex-row flex-col">
        <div className="p-4 md:w-2/3">
          <div className="flex md:flex-row flex-col gap-2">
            <h1 className="md:text-3xl text-lg font-semibold mb-4 p-1">
              {blog.title}
            </h1>

            <div className="flex md:flex-col  md:justify-center justify-end items-center md:w-24 w-full">
              <TimeCalculator text={blog.description} />
              <ShareButton url={blog.slug} />
            </div>
          </div>

          <img
            src={blog.image}
            alt={blog.title}
            width={800}
            height={400}
            loading="lazy"
            className="rounded-lg mb-4"
          />
          <p className="text-gray-600 md:text-lg text-sm leading-relaxed">
            {blog.description}
          </p>
        </div>

        <div className="md:w-1/3 w-full md:p-0 p-4">
          <h2 className="text-xl font-bold mb-4">Related Articles</h2>
          {Blogs.filter((b) => b.slug !== slug)
            .slice(0, 5)
            .map((relatedBlog, index) => (
              <div
                key={index}
                className="mb-4 border p-4 border-gray-200 rounded-lg"
              >
                <Link href={`/resources/${relatedBlog.slug}`}>
                  <h3 className="text-sm font-semibold text-gray-800 hover:underline">
                    {relatedBlog.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm">
                  <TruncateText
                    text={relatedBlog.description}
                    maxLength={105}
                  />
                </p>
                <div className="flex items-center my-2">
                  <TimeCalculator text={relatedBlog.description} />

                  <p className="text-xs">
                    {relatedBlog.tags.split(',').map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 text-black px-2 py-1 rounded-3xl mx-2"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}

          <p className="text-sm">
            {blog.tags.split(',').map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-green-200 text-black px-4 py-2 rounded-3xl mr-2"
              >
                {tag.trim()}
              </span>
            ))}
          </p>
          <div className="mt-4">
            <p className="flex items-center justify-center">
              <Calendar value={parsedDate} />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
