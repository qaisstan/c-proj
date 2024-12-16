'use client'
import { useState, useEffect } from 'react'
import { fetchCoinDetails } from '@/app/lib/api/cryptoPrices'
import Loading from '@/app/components/shared/Loading'
import { formatCurrency, formatPercentage } from '@/app/lib/utils/formatters'
import CryptoIcon from '@/app/components/shared/CryptoIcon'
import Link from 'next/link'

export default function CoinPage({ params }) {
  const [coin, setCoin] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCoin = async () => {
      try {
        const data = await fetchCoinDetails(params.id)
        setCoin(data)
      } catch (error) {
        console.error('Error loading coin details:', error)
      } finally {
        setLoading(false)
      }
    }

    loadCoin()
  }, [params.id])

  if (loading) return <Loading />
  if (!coin) return <div>Coin not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <Link 
        href="/prices"
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
        Back to Prices
      </Link>

      {/* Coin Header */}
      <div className="flex items-center gap-4 mb-8">
        <CryptoIcon className="w-16 h-16" />
        <div>
          <h1 className="text-3xl font-bold">{coin.name}</h1>
          <p className="text-gray-600">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>

      {/* Price Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-2">Current Price</h3>
          <p className="text-2xl font-bold">{formatCurrency(coin.market_data.current_price.usd)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-2">Market Cap</h3>
          <p className="text-2xl font-bold">{formatCurrency(coin.market_data.market_cap.usd)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-2">24h Trading Volume</h3>
          <p className="text-2xl font-bold">{formatCurrency(coin.market_data.total_volume.usd)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-2">24h Change</h3>
          <p className={`text-2xl font-bold ${
            coin.market_data.price_change_percentage_24h >= 0 
              ? 'text-green-600' 
              : 'text-red-600'
          }`}>
            {formatPercentage(coin.market_data.price_change_percentage_24h)}
          </p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Price Chart</h2>
        <div className="h-96 flex items-center justify-center text-gray-500">
          Chart will be integrated later
        </div>
      </div>
    </div>
  )
} 