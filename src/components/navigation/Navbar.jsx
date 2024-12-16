import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            CryptoSite
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/news" className="text-gray-600 hover:text-blue-600">
              News
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/prices" className="text-gray-600 hover:text-blue-600">
              Prices
            </Link>
            <Link href="/learn" className="text-gray-600 hover:text-blue-600">
              Learn
            </Link>
          </div>

          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 