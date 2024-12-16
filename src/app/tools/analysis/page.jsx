'use client'
import RiskAssessment from './RiskAssessment'
import MarketAnalyzer from './MarketAnalyzer'

export default function AnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Analysis Tools</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Risk Assessment</h2>
          <p className="text-gray-600 mb-6">
            Evaluate investment risks and analyze portfolio exposure.
            Calculate risk metrics and get recommendations.
          </p>
          <RiskAssessment />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Market Analyzer</h2>
          <p className="text-gray-600 mb-6">
            Analyze market trends, patterns, and indicators.
            Get insights into market conditions and potential opportunities.
          </p>
          <MarketAnalyzer />
        </section>
      </div>
    </div>
  )
} 