'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CryptoPrices = ({ fullWidth = false, showMore = false }) => {
  const [prices, setPrices] = useState([
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      current_price: 45000,
      price_change_percentage_24h: 2.5,
      image: '/images/crypto/btc.png'
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      current_price: 3000,
      price_change_percentage_24h: 1.8,
      image: '/images/crypto/eth.png'
    },
    // Add more mock data...
  ])

  const displayCount = showMore ? prices.length : 5

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${fullWidth ? 'w-full' : 'max-w-4xl mx-auto'}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4">#</th>
              <th className="text-left py-4">Name</th>
              <th className="text-right py-4">Price</th>
              <th className="text-right py-4">24h %</th>
            </tr>
          </thead>
          <tbody>
            {prices.slice(0, displayCount).map((crypto, index) => (
              <tr key={crypto.id} className="border-b hover:bg-gray-50">
                <td className="py-4">{index + 1}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={crypto.image}
                      alt={crypto.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="font-medium">{crypto.name}</span>
                    <span className="text-gray-500">{crypto.symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td className="text-right py-4">
                  ${crypto.current_price.toLocaleString()}
                </td>
                <td className={`text-right py-4 ${
                  crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!showMore && (
        <div className="mt-4 text-center">
          <Link
            href="/prices"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Prices →
          </Link>
        </div>
      )}
    </div>
  )
}

export default CryptoPrices 