import Link from 'next/link'
import AuthButton from '../auth/AuthButton'

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Learn', href: '/learn' },
    { name: 'Tools', href: '/tools' },
    { name: 'Prices', href: '/prices' },
    { name: 'News', href: '/news' },
    { name: 'Blog', href: '/blog' }
  ]

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            CryptoEdu
          </Link>

          <div className="flex items-center gap-8">
            <ul className="flex gap-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-blue-600">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <AuthButton />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 