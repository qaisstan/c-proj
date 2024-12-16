import Link from 'next/link'

const quickStartSteps = [
  {
    id: 1,
    title: 'Understanding Cryptocurrency',
    description: 'Learn what cryptocurrency is and how it works',
    icon: '🌟',
    time: '10 min',
    link: '/learn/beginners/crypto-basics'
  },
  {
    id: 2,
    title: 'Choose Your First Crypto',
    description: 'Compare different cryptocurrencies and their use cases',
    icon: '🔍',
    time: '15 min',
    link: '/learn/beginners/choosing-crypto'
  },
  {
    id: 3,
    title: 'Set Up a Wallet',
    description: 'Create and secure your first crypto wallet',
    icon: '👛',
    time: '20 min',
    link: '/learn/beginners/wallet-setup'
  },
  {
    id: 4,
    title: 'Make Your First Purchase',
    description: 'Learn how to safely buy cryptocurrency',
    icon: '💰',
    time: '25 min',
    link: '/learn/beginners/first-purchase'
  }
]

const QuickStartGuide = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            New to crypto? Follow these simple steps to get started
          </p>
        </div>

        <div className="space-y-8">
          {quickStartSteps.map((step, index) => (
            <div 
              key={step.id}
              className="relative flex items-start"
            >
              {/* Connection Line */}
              {index < quickStartSteps.length - 1 && (
                <div className="absolute top-12 left-6 w-0.5 h-full -ml-px bg-blue-200" />
              )}

              {/* Step Content */}
              <div className="flex items-start">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl">
                  {step.icon}
                </div>

                {/* Step Details */}
                <div className="ml-6">
                  <h3 className="font-bold text-lg mb-1">
                    Step {step.id}: {step.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      ⏱️ {step.time}
                    </span>
                    <Link 
                      href={step.link}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Start Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="mt-12 text-center">
          <Link
            href="/learn/beginners"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Start Complete Course</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuickStartGuide 