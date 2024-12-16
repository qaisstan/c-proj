'use client'
import { useState, useEffect } from 'react'
import { newsData } from '@/app/lib/data/newsData'
import Link from 'next/link'
import Image from 'next/image'

const NewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const latestNews = newsData.slice(0, 5) // Get latest 5 news items

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % latestNews.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [latestNews.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % latestNews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + latestNews.length) % latestNews.length)
  }

  return (
    <div className="relative w-full h-[400px] bg-gray-900 rounded-xl overflow-hidden">
      {/* Slides */}
      {latestNews.map((news, index) => (
        <div
          key={news.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-end">
            <div className="p-8 text-white">
              <div className="mb-2">
                <span className="text-blue-400">{news.category}</span>
                <span className="mx-2">•</span>
                <span className="text-gray-300">{news.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
              <p className="text-gray-200 mb-4 line-clamp-2">{news.summary}</p>
              <Link
                href={`/news/${news.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {latestNews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default NewsCarousel 