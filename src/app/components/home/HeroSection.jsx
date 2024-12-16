'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { fetchCryptoNews } from '@/app/lib/api/cryptoNews'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-24 pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Explore the World of Cryptocurrency
        </h1>
        <p className="text-xl mb-8 text-blue-100">
          Learn, Track, and Stay Updated on All Things Crypto
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/learn" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Learning
          </Link>
          <Link 
            href="/blog" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Read Blog Posts
          </Link>
        </div>

        {/* Latest News Button */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
        >
          <span className="animate-pulse">🔴</span>
          Latest Crypto News
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection 