export async function fetchCryptoNews() {
  // Replace with your actual API endpoint and key
  const API_KEY = process.env.NEWS_API_KEY
  const response = await fetch(`YOUR_NEWS_API_ENDPOINT?apiKey=${API_KEY}`)
  const data = await response.json()
  return data
} 