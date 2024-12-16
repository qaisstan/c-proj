/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['coin-images.coingecko.com'],
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig 