'use client'
import Link from 'next/link'

const toolCategories = [
  {
    title: 'Calculators',
    description: 'Financial calculation tools for cryptocurrency',
    href: '/tools/calculators',
    tools: [
      { name: 'Price Calculator', description: 'Convert between cryptocurrencies and fiat' },
      { name: 'Yield Calculator', description: 'Calculate potential DeFi yields' },
      { name: 'Gas Estimator', description: 'Estimate transaction fees' }
    ]
  },
  {
    title: 'Simulators',
    description: 'Practice trading and portfolio management',
    href: '/tools/simulators',
    tools: [
      { name: 'Trading Simulator', description: 'Practice trading without real money' },
      { name: 'Portfolio Tracker', description: 'Track and analyze your portfolio' }
    ]
  },
  {
    title: 'Analysis',
    description: 'Advanced analysis and assessment tools',
    href: '/tools/analysis',
    tools: [
      { name: 'Risk Assessment', description: 'Evaluate investment risks' },
      { name: 'Market Analyzer', description: 'Analyze market trends and patterns' }
    ]
  }
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Crypto Tools</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-lg shadow-md p-6">
            <Link href={category.href}>
              <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
            </Link>
            <p className="text-gray-600 mb-6">{category.description}</p>
            
            <div className="space-y-4">
              {category.tools.map((tool) => (
                <div key={tool.name} className="border-t pt-4">
                  <h3 className="font-medium">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 