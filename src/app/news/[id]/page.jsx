import { newsData } from '@/app/lib/data/newsData'
import Link from 'next/link'
import Image from 'next/image'

export default function NewsArticlePage({ params }) {
  const news = newsData.find(n => n.id === parseInt(params.id))

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Article not found</h1>
          <Link href="/news" className="text-blue-600 hover:underline mt-4 inline-block">
            ← Back to News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <Link href="/news" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Back to News
      </Link>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-96">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-blue-600">{news.category}</span>
            <span className="text-gray-500">{news.date}</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
          <div className="text-gray-500 mb-8">By {news.author}</div>

          <div className="prose max-w-none">
            {news.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
} 