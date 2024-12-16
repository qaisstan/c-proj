'use client'
import { useState, useEffect } from 'react'

const PriceCalculator = () => {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('BTC')
  const [price, setPrice] = useState(null)
  const [loading, setLoading] = useState(false)

  const currencies = [
    { symbol: 'USD', name: 'US Dollar' },
    { symbol: 'BTC', name: 'Bitcoin' },
    { symbol: 'ETH', name: 'Ethereum' },
    { symbol: 'USDT', name: 'Tether' },
    { symbol: 'BNB', name: 'Binance Coin' }
  ]

  // Mock price data (in real app, would fetch from API)
  const mockPrices = {
    'BTC': 45000,
    'ETH': 3000,
    'USDT': 1,
    'BNB': 300
  }

  const calculatePrice = () => {
    if (!amount) return
    
    setLoading(true)
    setTimeout(() => {
      const baseAmount = parseFloat(amount)
      if (isNaN(baseAmount)) {
        setPrice(null)
        setLoading(false)
        return
      }

      let result
      if (fromCurrency === 'USD') {
        result = baseAmount / mockPrices[toCurrency]
      } else if (toCurrency === 'USD') {
        result = baseAmount * mockPrices[fromCurrency]
      } else {
        const usdAmount = baseAmount * mockPrices[fromCurrency]
        result = usdAmount / mockPrices[toCurrency]
      }

      setPrice(result.toFixed(8))
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    calculatePrice()
  }, [amount, fromCurrency, toCurrency])

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full"
            >
              {currencies.map(currency => (
                <option 
                  key={currency.symbol} 
                  value={currency.symbol}
                  disabled={currency.symbol === toCurrency}
                >
                  {currency.name} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full"
            >
              {currencies.map(currency => (
                <option 
                  key={currency.symbol} 
                  value={currency.symbol}
                  disabled={currency.symbol === fromCurrency}
                >
                  {currency.name} ({currency.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Converted Amount</div>
          {loading ? (
            <div className="text-center py-2">Loading...</div>
          ) : price ? (
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {price} {toCurrency}
              </div>
              <div className="text-sm text-gray-500">
                1 {fromCurrency} = {(mockPrices[toCurrency] / mockPrices[fromCurrency]).toFixed(8)} {toCurrency}
              </div>
            </div>
          ) : (
            <div className="text-sm text-gray-500">
              Enter an amount to convert
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PriceCalculator 