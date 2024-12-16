import Link from 'next/link'
import Image from 'next/image'

const NewsCard = ({ news }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-600">{news.category}</span>
            <span className="text-sm text-gray-500">{news.date}</span>
          </div>
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{news.title}</h2>
          <p className="text-gray-600 line-clamp-3">{news.summary}</p>
          <div className="mt-4 text-sm text-gray-500">
            By {news.author}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard 