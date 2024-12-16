import { newsData } from '@/app/lib/data/newsData'
import NewsCard from '@/app/components/news/NewsCard'

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Crypto News</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  )
} 