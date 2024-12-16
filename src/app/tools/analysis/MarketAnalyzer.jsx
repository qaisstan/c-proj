'use client'
import { useState } from 'react'

const MarketAnalyzer = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC')
  const [timeframe, setTimeframe] = useState('24h')
  const [analysis, setAnalysis] = useState(null)

  const cryptos = [
    { symbol: 'BTC', name: 'Bitcoin' },
    { symbol: 'ETH', name: 'Ethereum' },
    { symbol: 'BNB', name: 'Binance Coin' },
    { symbol: 'XRP', name: 'Ripple' }
  ]

  const timeframes = [
    { value: '1h', label: '1 Hour' },
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' }
  ]

  // Mock market analysis data
  const mockAnalysis = {
    BTC: {
      price: 45000,
      change: 2.5,
      volume: '24.5B',
      marketCap: '857.8B',
      indicators: {
        rsi: 58,
        macd: 'Bullish',
        ma: 'Above 200 MA',
        volume: 'Above Average'
      },
      sentiment: {
        overall: 'Bullish',
        social: 'Very Bullish',
        fear_greed: 65
      }
    }
  }

  const analyzeMarket = () => {
    // Simulate API call
    setTimeout(() => {
      setAnalysis(mockAnalysis[selectedCrypto])
    }, 500)
  }

  const getIndicatorColor = (value) => {
    if (typeof value === 'number') {
      if (value > 70) return 'text-red-600'
      if (value < 30) return 'text-green-600'
      return 'text-yellow-600'
    }
    if (value.includes('Bullish')) return 'text-green-600'
    if (value.includes('Bearish')) return 'text-red-600'
    return 'text-yellow-600'
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        {/* Selection Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cryptocurrency
            </label>
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {cryptos.map(crypto => (
                <option key={crypto.symbol} value={crypto.symbol}>
                  {crypto.name} ({crypto.symbol})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timeframe
            </label>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {timeframes.map(tf => (
                <option key={tf.value} value={tf.value}>
                  {tf.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={analyzeMarket}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Analyze Market
        </button>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-6">
            {/* Price Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Price</div>
                <div className="text-xl font-bold">${analysis.price.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">24h Change</div>
                <div className={`text-xl font-bold ${analysis.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {analysis.change}%
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Volume</div>
                <div className="text-xl font-bold">${analysis.volume}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Market Cap</div>
                <div className="text-xl font-bold">${analysis.marketCap}</div>
              </div>
            </div>

            {/* Technical Indicators */}
            <div>
              <h3 className="text-lg font-medium mb-4">Technical Indicators</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(analysis.indicators).map(([key, value]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">{key.toUpperCase()}</div>
                    <div className={`text-lg font-bold ${getIndicatorColor(value)}`}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Sentiment */}
            <div>
              <h3 className="text-lg font-medium mb-4">Market Sentiment</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(analysis.sentiment).map(([key, value]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">{key.replace('_', ' ').toUpperCase()}</div>
                    <div className={`text-lg font-bold ${getIndicatorColor(value)}`}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MarketAnalyzer 