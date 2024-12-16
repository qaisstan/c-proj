import Link from 'next/link'

const PathCard = ({ path, onSelect, isSelected }) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md p-6 border-2 transition-all
        ${isSelected ? 'border-blue-500 shadow-lg' : 'border-transparent'}
        hover:shadow-lg cursor-pointer
      `}
      onClick={onSelect}
    >
      <div className="text-4xl mb-4">{path.icon}</div>
      <h3 className="text-xl font-bold mb-2">{path.title}</h3>
      <p className="text-gray-600 mb-4">{path.description}</p>
      
      <div className="mb-4">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>🎯 {path.lessons} lessons</span>
          <span>⏱️ {path.duration}</span>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {path.topics.map((topic, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <span className="text-green-500">✓</span>
            {topic}
          </div>
        ))}
      </div>

      <Link
        href={`/learn/${path.id}`}
        className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Start Learning
      </Link>
    </div>
  )
}

export default PathCard 