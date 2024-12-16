import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/app/lib/utils/formatters'

const BlogCard = ({ post }) => {
  const {
    id,
    title,
    excerpt,
    imageUrl,
    publishedAt,
    author,
    category,
    readTime
  } = post

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-500">{readTime} min read</span>
        </div>
        
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          {title}
        </h2>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">{author}</span>
            <span className="text-xs text-gray-500">{formatDate(publishedAt)}</span>
          </div>
          
          <Link
            href={`/blog/${id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Read More
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard 