'use client'
import { useState, useEffect } from 'react'
import { fetchBlogPosts } from '@/app/lib/api/blogPosts'
import BlogCard from '@/app/components/blog/BlogCard'
import Loading from '@/app/components/shared/Loading'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsData = await fetchBlogPosts()
        setPosts(postsData)
      } catch (error) {
        console.error('Error loading blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) return <Loading />

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Crypto Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
} 