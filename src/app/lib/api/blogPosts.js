export async function fetchBlogPosts() {
  // This will be replaced with your actual API endpoint
  // For now, returning mock data
  return [
    {
      id: 1,
      title: "Understanding Blockchain Technology",
      excerpt: "A comprehensive guide to understanding the fundamentals of blockchain technology...",
      imageUrl: "/images/blog/blockchain.jpg",
      publishedAt: "2024-03-20T10:00:00Z",
      author: "John Doe",
      category: "Education",
      readTime: 5
    },
    {
      id: 2,
      title: "Crypto Trading Strategies for Beginners",
      excerpt: "Learn the basic strategies that every crypto trader should know...",
      imageUrl: "/images/blog/trading.jpg",
      publishedAt: "2024-03-19T15:30:00Z",
      author: "Jane Smith",
      category: "Trading",
      readTime: 8
    },
    // Add more mock posts as needed
  ]
} 