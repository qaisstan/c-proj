import HeroSection from './components/home/HeroSection'
import NewsCarousel from '@/app/components/home/NewsCarousel'
import BlogCarousel from './components/home/BlogCarousel'
import CryptoPrices from './components/home/CryptoPrices'
import LearnSection from './components/home/LearnSection'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <HeroSection />
      <NewsCarousel />
      <BlogCarousel />
      <CryptoPrices />
      <LearnSection />
    </div>
  )
} 