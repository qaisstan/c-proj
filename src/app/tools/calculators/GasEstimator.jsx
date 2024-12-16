'use client'
import { useState } from 'react'

const GasEstimator = () => {
  const [network, setNetwork] = useState('ethereum')
  const [gasLimit, setGasLimit] = useState('21000') // Default ETH transfer
  const [gasPrice, setGasPrice] = useState('')

  // Mock data - in real app, would fetch from API
  const networks = [
    { id: 'ethereum', name: 'Ethereum', baseGas: '30' },
    { id: 'bsc', name: 'BSC', baseGas: '5' },
    { id: 'polygon', name: 'Polygon', baseGas: '50' }
  ]

  const calculateFee = () => {
    const limit = parseFloat(gasLimit)
    const price = parseFloat(gasPrice) || parseFloat(networks.find(n => n.id === network).baseGas)
    
    if (isNaN(limit) || isNaN(price)) return '0'
    
    return ((limit * price) / 1e9).toFixed(6)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Network
          </label>
          <select
            value={network}
            onChange={(e) => setNetwork(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {networks.map(net => (
              <option key={net.id} value={net.id}>
                {net.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gas Limit
          </label>
          <input
            type="number"
            value={gasLimit}
            onChange={(e) => setGasLimit(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter gas limit"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gas Price (Gwei)
          </label>
          <input
            type="number"
            value={gasPrice}
            onChange={(e) => setGasPrice(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder={`Current: ${networks.find(n => n.id === network).baseGas} Gwei`}
          />
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Estimated Fee</div>
          <div className="text-2xl font-bold text-blue-600">
            {calculateFee()} ETH
          </div>
          <div className="text-sm text-gray-500">
            ≈ ${(calculateFee() * 3000).toFixed(2)} USD
          </div>
        </div>
      </div>
    </div>
  )
}

export default GasEstimator 