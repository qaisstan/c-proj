'use client'
import { useState } from 'react'

const BlogCarousel = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: "Getting Started with Cryptocurrency",
      excerpt: "Learn the basics of cryptocurrency and blockchain technology...",
      image: "/images/blog1.jpg"
    },
    // More blog posts will be added later
  ])

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Blog Posts</h2>
        <div className="flex overflow-x-auto gap-6 pb-4">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              className="min-w-[300px] bg-white rounded-lg shadow-md p-4"
            >
              <h3 className="font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <button className="text-blue-600 hover:text-blue-800">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogCarousel 