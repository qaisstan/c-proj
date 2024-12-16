'use client'
import { useState } from 'react'

const RiskAssessment = () => {
  const [portfolio, setPortfolio] = useState([
    { asset: 'BTC', allocation: 40 },
    { asset: 'ETH', allocation: 30 },
    { asset: 'USDT', allocation: 20 },
    { asset: 'Other', allocation: 10 }
  ])

  const [riskScore, setRiskScore] = useState(null)
  const [recommendations, setRecommendations] = useState([])

  const calculateRisk = () => {
    // Mock risk calculation
    const score = portfolio.reduce((acc, curr) => {
      const riskFactors = {
        'BTC': 8,
        'ETH': 7,
        'USDT': 2,
        'Other': 6
      }
      return acc + (curr.allocation * riskFactors[curr.asset] / 100)
    }, 0)

    setRiskScore(score)
    
    // Generate recommendations based on score
    if (score > 6) {
      setRecommendations([
        'Consider increasing stablecoin allocation',
        'Implement stop-loss orders',
        'Review portfolio frequently'
      ])
    } else if (score > 4) {
      setRecommendations([
        'Portfolio is moderately balanced',
        'Monitor market conditions',
        'Consider DCA strategy'
      ])
    } else {
      setRecommendations([
        'Portfolio is conservative',
        'Could increase exposure to growth assets',
        'Look for yield opportunities'
      ])
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        {/* Portfolio Allocation */}
        <div>
          <h3 className="text-lg font-medium mb-4">Portfolio Allocation</h3>
          <div className="space-y-4">
            {portfolio.map((item, index) => (
              <div key={item.asset} className="flex items-center gap-4">
                <span className="w-20">{item.asset}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={item.allocation}
                  onChange={(e) => {
                    const newPortfolio = [...portfolio]
                    newPortfolio[index].allocation = parseInt(e.target.value)
                    setPortfolio(newPortfolio)
                  }}
                  className="flex-grow"
                />
                <span className="w-12 text-right">{item.allocation}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateRisk}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Calculate Risk Score
        </button>

        {/* Results */}
        {riskScore !== null && (
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">Risk Score</div>
              <div className="text-2xl font-bold text-blue-600">
                {riskScore.toFixed(1)} / 10
              </div>
              <div className="text-sm text-gray-500">
                {riskScore > 6 ? 'High Risk' : riskScore > 4 ? 'Medium Risk' : 'Low Risk'}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Recommendations</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RiskAssessment 