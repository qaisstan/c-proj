'use client'
import TradingSimulator from './TradingSimulator'
import PortfolioTracker from './PortfolioTracker'

export default function SimulatorsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Trading Simulators</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Trading Simulator</h2>
          <p className="text-gray-600 mb-6">
            Practice trading with virtual funds in a real-time market environment.
            Learn trading strategies without risking real money.
          </p>
          <TradingSimulator />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Portfolio Tracker</h2>
          <p className="text-gray-600 mb-6">
            Track and analyze your cryptocurrency portfolio performance.
            Monitor your investments, returns, and asset allocation.
          </p>
          <PortfolioTracker />
        </section>
      </div>
    </div>
  )
} 