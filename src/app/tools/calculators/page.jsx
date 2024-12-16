'use client'
import PriceCalculator from './PriceCalculator'
import YieldCalculator from './YieldCalculator'
import GasEstimator from './GasEstimator'

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Crypto Calculators</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Price Calculator</h2>
          <p className="text-gray-600 mb-6">
            Convert between different cryptocurrencies and fiat currencies.
          </p>
          <PriceCalculator />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Yield Calculator</h2>
          <p className="text-gray-600 mb-6">
            Calculate potential yields from staking and farming.
          </p>
          <YieldCalculator />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Gas Estimator</h2>
          <p className="text-gray-600 mb-6">
            Estimate transaction fees across different networks.
          </p>
          <GasEstimator />
        </section>
      </div>
    </div>
  )
} 