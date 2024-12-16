import Link from 'next/link'

const LearnSection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">New to crypto?</h2>
        <p className="text-xl mb-8">
          Start with our beginner-friendly guides!
        </p>
        <Link 
          href="/learn" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}

export default LearnSection 