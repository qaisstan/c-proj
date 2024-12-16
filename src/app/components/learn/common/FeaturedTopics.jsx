const featuredTopics = [
  {
    id: 'blockchain',
    title: 'Blockchain Basics',
    icon: '⛓️',
    difficulty: 'Beginner',
    duration: '30 min',
    category: 'Technology'
  },
  {
    id: 'wallets',
    title: 'Crypto Wallets',
    icon: '👛',
    difficulty: 'Beginner',
    duration: '20 min',
    category: 'Security'
  },
  {
    id: 'defi',
    title: 'DeFi Explained',
    icon: '🏦',
    difficulty: 'Intermediate',
    duration: '45 min',
    category: 'Finance'
  },
  {
    id: 'nft',
    title: 'NFT Basics',
    icon: '🎨',
    difficulty: 'Beginner',
    duration: '25 min',
    category: 'NFTs'
  },
  {
    id: 'trading',
    title: 'Trading 101',
    icon: '📊',
    difficulty: 'Intermediate',
    duration: '40 min',
    category: 'Trading'
  },
  {
    id: 'security',
    title: 'Crypto Security',
    icon: '🔒',
    difficulty: 'Beginner',
    duration: '35 min',
    category: 'Security'
  }
]

const FeaturedTopics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredTopics.map((topic) => (
        <div 
          key={topic.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">{topic.icon}</span>
            <div>
              <h3 className="font-bold">{topic.title}</h3>
              <p className="text-sm text-gray-500">{topic.category}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className={`px-2 py-1 rounded ${
              topic.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
              topic.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {topic.difficulty}
            </span>
            <span>⏱️ {topic.duration}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedTopics 