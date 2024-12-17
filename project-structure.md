/src
  /app
    /api
      /auth
        /[...nextauth]
          route.js         # NextAuth configuration (placeholder for now)
        /login
          route.js        # Login API endpoint
        /signup
          route.js        # Signup API endpoint
    /auth
      /login
        page.jsx         # Login page
      /signup
        page.jsx         # Signup page
    /blog
      /[slug]
        page.jsx         # Individual blog post page
    /components
      /auth
        AuthButton.jsx   # Authentication UI component
        SocialLogin.jsx  # Social login buttons
      /layout
        Header.jsx       # Main header component
        Footer.jsx       # Footer component
      /shared
        ShareButtons.jsx # Social sharing buttons
    /context
      AuthContext.js    # Authentication state management
    /learn
      /[path]
        /[lesson]
          page.jsx      # Individual lesson page
        page.jsx        # Course path page
      page.jsx          # Learning hub page
    /lib
      /api
        blogPosts.js    # Blog API functions
        cryptoNews.js   # News API functions
        cryptoPrices.js # Price API functions
      /data
        courseContent.js # Course content data
        newsData.js     # News data
      /db
        mongodb.js      # MongoDB connection utility
      /scripts
        createInitialUser.js # Database seeding script
      /utils
        formatters.js   # Utility formatting functions
    /models
      User.js          # User database model
    /news
      /[id]
        page.jsx       # Individual news page
    /profile
      page.jsx        # User profile page
    /tools
      /analysis
        page.jsx      # Analysis tools page
      /calculators
        PriceCalculator.jsx # Crypto price calculator
      /simulators
        PortfolioTracker.jsx  # Portfolio tracking tool
        TradingSimulator.jsx  # Trading simulation tool
      page.jsx        # Tools hub page
    globals.css       # Global styles
    layout.jsx        # Root layout
    middleware.js     # Auth middleware
    page.jsx         # Home page

/public
  /images
    /social          # Social media icons
  
.env.local          # Environment variables
package.json        # Project dependencies
tailwind.config.js  # Tailwind configuration 