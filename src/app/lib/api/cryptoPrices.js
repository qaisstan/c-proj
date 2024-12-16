// Mock data until we connect to CoinGecko API
const mockPrices = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    current_price: 45000,
    price_change_percentage_1h_in_currency: 0.5,
    price_change_percentage_24h: 2.3,
    price_change_percentage_7d_in_currency: -1.2,
    total_volume: 30000000000,
    market_cap: 850000000000,
    image: "/images/placeholder.png"
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    current_price: 2800,
    price_change_percentage_1h_in_currency: -0.2,
    price_change_percentage_24h: 1.8,
    price_change_percentage_7d_in_currency: 3.5,
    total_volume: 20000000000,
    market_cap: 350000000000,
    image: "/images/placeholder.png"
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    current_price: 320,
    price_change_percentage_1h_in_currency: 0.3,
    price_change_percentage_24h: -1.2,
    price_change_percentage_7d_in_currency: 2.1,
    total_volume: 1500000000,
    market_cap: 50000000000,
    image: "/images/placeholder.png"
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    current_price: 95,
    price_change_percentage_1h_in_currency: 1.5,
    price_change_percentage_24h: 4.8,
    price_change_percentage_7d_in_currency: 12.5,
    total_volume: 2500000000,
    market_cap: 40000000000,
    image: "/images/placeholder.png"
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    current_price: 0.65,
    price_change_percentage_1h_in_currency: -0.8,
    price_change_percentage_24h: -2.5,
    price_change_percentage_7d_in_currency: 5.2,
    total_volume: 1200000000,
    market_cap: 23000000000,
    image: "/images/placeholder.png"
  }
]

export async function fetchCryptoPrices() {
  // Return mock data instead of making API call
  return mockPrices
}

export async function fetchCoinDetails(coinId) {
  // Return mock details for a specific coin
  const coin = mockPrices.find(c => c.id === coinId)
  if (!coin) return null

  return {
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    image: {
      large: coin.image
    },
    market_data: {
      current_price: {
        usd: coin.current_price
      },
      market_cap: {
        usd: coin.market_cap
      },
      total_volume: {
        usd: coin.total_volume
      },
      price_change_percentage_24h: coin.price_change_percentage_24h
    }
  }
} 