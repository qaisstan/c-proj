'use client'
import { useState, useEffect } from 'react'

const TradingSimulator = () => {
  const [balance, setBalance] = useState(10000) // Starting with $10,000
  const [positions, setPositions] = useState([])
  const [selectedCrypto, setSelectedCrypto] = useState('BTC')
  const [orderType, setOrderType] = useState('market')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  // Mock data - in real app, would fetch from API
  const cryptos = [
    { symbol: 'BTC', price: 45000 },
    { symbol: 'ETH', price: 3000 },
    { symbol: 'BNB', price: 300 }
  ]

  const executeOrder = () => {
    const orderAmount = parseFloat(amount)
    const currentPrice = cryptos.find(c => c.symbol === selectedCrypto).price
    const orderPrice = orderType === 'market' ? currentPrice : parseFloat(price)

    if (isNaN(orderAmount) || orderAmount <= 0) return

    const totalCost = orderAmount * orderPrice
    if (totalCost > balance) return // Insufficient funds

    // Execute trade
    setBalance(prev => prev - totalCost)
    setPositions(prev => [
      ...prev,
      {
        crypto: selectedCrypto,
        amount: orderAmount,
        entryPrice: orderPrice,
        currentPrice: currentPrice,
        timestamp: new Date().toISOString()
      }
    ])

    // Reset form
    setAmount('')
    setPrice('')
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Trading Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cryptocurrency
            </label>
            <select
              value={selectedCrypto}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {cryptos.map(crypto => (
                <option key={crypto.symbol} value={crypto.symbol}>
                  {crypto.symbol} (${crypto.price})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Order Type
            </label>
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="market">Market Order</option>
              <option value="limit">Limit Order</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>

          {orderType === 'limit' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter price"
              />
            </div>
          )}

          <button
            onClick={executeOrder}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>

        {/* Portfolio Overview */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900">Account Balance</h3>
            <p className="text-3xl font-bold text-blue-600">
              ${balance.toFixed(2)}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Positions</h3>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{position.crypto}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(position.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Amount:</span>
                      <span className="ml-2">{position.amount}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Entry Price:</span>
                      <span className="ml-2">${position.entryPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingSimulator 