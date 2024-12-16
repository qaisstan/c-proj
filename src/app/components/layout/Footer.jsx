import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Newsletter Signup */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded flex-grow text-gray-900"
            />
            <button 
              type="submit"
              className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="/news" className="hover:text-blue-400">News</Link></li>
              <li><Link href="/learn" className="hover:text-blue-400">Learn</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6 justify-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 