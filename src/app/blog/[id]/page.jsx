'use client'
import { useState, useEffect } from 'react'
import { fetchBlogPosts } from '@/app/lib/api/blogPosts'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/app/lib/utils/formatters'
import Loading from '@/app/components/shared/Loading'
import ShareButtons from '@/app/components/shared/ShareButtons'

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        // For now, we'll fetch all posts and find the one we need
        const posts = await fetchBlogPosts()
        const currentPost = posts.find(p => p.id === parseInt(params.id))
        setPost(currentPost)
      } catch (error) {
        console.error('Error loading blog post:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [params.id])

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = post?.title

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  }

  if (loading) return <Loading />
  if (!post) return <div>Post not found</div>

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back to Blog Button */}
      <Link 
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600">
          <span className="font-medium">{post.author}</span>
          <span>•</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {post.category}
          </span>
        </div>
      </header>

      {/* Enhanced Social Share Buttons */}
      <div className="mb-8">
        <ShareButtons url={shareUrl} title={post.title} />
      </div>

      {/* Featured Image */}
      {post.imageUrl && (
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          {post.excerpt}
        </p>
        
        {/* This would be your actual blog content */}
        <div className="text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </article>
  )
} 