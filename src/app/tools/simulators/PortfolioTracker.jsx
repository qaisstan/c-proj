'use client'
import { useState } from 'react'

const PortfolioTracker = () => {
  const [assets, setAssets] = useState([
    { id: 1, coin: 'BTC', amount: 0.5, buyPrice: 45000 },
    { id: 2, coin: 'ETH', amount: 5, buyPrice: 3000 }
  ])

  // Mock current prices
  const currentPrices = {
    BTC: 47000,
    ETH: 3200,
    BNB: 320
  }

  const calculatePortfolioValue = () => {
    return assets.reduce((total, asset) => {
      return total + (asset.amount * currentPrices[asset.coin])
    }, 0)
  }

  const calculateTotalCost = () => {
    return assets.reduce((total, asset) => {
      return total + (asset.amount * asset.buyPrice)
    }, 0)
  }

  const calculateProfitLoss = () => {
    const currentValue = calculatePortfolioValue()
    const totalCost = calculateTotalCost()
    return currentValue - totalCost
  }

  const addAsset = () => {
    const newAsset = {
      id: assets.length + 1,
      coin: 'BTC',
      amount: 0,
      buyPrice: currentPrices.BTC
    }
    setAssets([...assets, newAsset])
  }

  const updateAsset = (id, field, value) => {
    setAssets(assets.map(asset => {
      if (asset.id === id) {
        return { ...asset, [field]: value }
      }
      return asset
    }))
  }

  const removeAsset = (id) => {
    setAssets(assets.filter(asset => asset.id !== id))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600">Portfolio Value</div>
            <div className="text-2xl font-bold text-blue-600">
              ${calculatePortfolioValue().toLocaleString()}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600">Total Cost</div>
            <div className="text-2xl font-bold">
              ${calculateTotalCost().toLocaleString()}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600">Profit/Loss</div>
            <div className={`text-2xl font-bold ${calculateProfitLoss() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${Math.abs(calculateProfitLoss()).toLocaleString()}
              {calculateProfitLoss() >= 0 ? ' ▲' : ' ▼'}
            </div>
          </div>
        </div>

        {/* Asset List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Assets</h3>
            <button
              onClick={addAsset}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Asset
            </button>
          </div>

          <div className="space-y-4">
            {assets.map(asset => (
              <div key={asset.id} className="p-4 border rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">Coin</label>
                    <select
                      value={asset.coin}
                      onChange={(e) => updateAsset(asset.id, 'coin', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="BNB">Binance Coin (BNB)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Amount</label>
                    <input
                      type="number"
                      value={asset.amount}
                      onChange={(e) => updateAsset(asset.id, 'amount', parseFloat(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Buy Price</label>
                    <input
                      type="number"
                      value={asset.buyPrice}
                      onChange={(e) => updateAsset(asset.id, 'buyPrice', parseFloat(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => removeAsset(asset.id)}
                      className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  Current Value: ${(asset.amount * currentPrices[asset.coin]).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioTracker 