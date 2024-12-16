export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore the World of Cryptocurrency
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Learn, Track, and Stay Updated on All Things Crypto
        </p>
        <div className="space-x-4">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
            Start Learning
          </button>
          <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Read Blog Posts
          </button>
        </div>
      </div>
    </section>
  )
} 