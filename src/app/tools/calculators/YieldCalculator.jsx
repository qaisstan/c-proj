'use client'
import { useState } from 'react'

const YieldCalculator = () => {
  const [principal, setPrincipal] = useState('')
  const [apy, setApy] = useState('')
  const [timeframe, setTimeframe] = useState('365') // days
  const [compoundingFrequency, setCompoundingFrequency] = useState('365') // daily

  const calculateYield = () => {
    const p = parseFloat(principal)
    const r = parseFloat(apy) / 100
    const t = parseFloat(timeframe) / 365
    const n = parseFloat(compoundingFrequency)

    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(n)) return 0

    // Compound interest formula: A = P(1 + r/n)^(nt)
    const amount = p * Math.pow(1 + (r/n), n * t)
    return amount.toFixed(2)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Principal Amount
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full"
            placeholder="1000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            APY (%)
          </label>
          <input
            type="number"
            value={apy}
            onChange={(e) => setApy(e.target.value)}
            className="w-full"
            placeholder="5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Timeframe
          </label>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="w-full"
          >
            <option value="30">30 Days</option>
            <option value="90">90 Days</option>
            <option value="180">180 Days</option>
            <option value="365">1 Year</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Compounding Frequency
          </label>
          <select
            value={compoundingFrequency}
            onChange={(e) => setCompoundingFrequency(e.target.value)}
            className="w-full"
          >
            <option value="1">Yearly</option>
            <option value="12">Monthly</option>
            <option value="52">Weekly</option>
            <option value="365">Daily</option>
          </select>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Expected Return</div>
          <div className="text-2xl font-bold text-blue-600">
            ${calculateYield()}
          </div>
          <div className="text-sm text-gray-500">
            Profit: ${(calculateYield() - parseFloat(principal || 0)).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default YieldCalculator 