export const courseContent = {
  'beginners': {
    title: 'Complete Beginners Guide',
    description: 'Start your crypto journey from the very basics',
    lessons: [
      {
        id: 'intro',
        title: 'Introduction to Cryptocurrency',
        duration: '10 min',
        sections: [
          {
            id: 'what-is-crypto',
            title: 'What is Cryptocurrency?',
            content: `
              Cryptocurrency is a digital or virtual form of currency that uses 
              cryptography for security. Unlike traditional currencies issued by 
              governments (fiat), cryptocurrencies are typically decentralized 
              systems based on blockchain technology.

              Key Points:
              • Digital currency that exists online
              • Uses cryptography for security
              • Decentralized - not controlled by any government
              • Based on blockchain technology
              • Enables peer-to-peer transactions
            `
          },
          {
            id: 'blockchain',
            title: 'Introduction to Blockchain',
            content: `
              Blockchain is the underlying technology that powers cryptocurrencies.
              Think of it as a digital ledger that records all transactions across a
              network of computers. Each record, or 'block', is linked and secured
              using cryptography.

              Key Features:
              • Decentralized - no single point of control
              • Immutable - records cannot be changed
              • Transparent - all transactions are public
              • Secure - uses advanced cryptography
              • Distributed - maintained by a network of computers
            `
          },
          {
            id: 'types',
            title: 'Types of Cryptocurrencies',
            content: `
              There are thousands of cryptocurrencies, each with different purposes
              and features. Bitcoin was the first cryptocurrency, but many others
              (called altcoins) have been created since.

              Common Types:
              • Payment cryptocurrencies (Bitcoin, Litecoin)
              • Smart contract platforms (Ethereum, Solana)
              • Stablecoins (USDC, USDT)
              • DeFi tokens
              • NFT tokens
            `
          }
        ],
        quiz: [
          {
            question: 'What is the main technology behind cryptocurrencies?',
            options: [
              'Blockchain',
              'Artificial Intelligence',
              'Cloud Computing',
              'Virtual Reality'
            ],
            correctAnswer: 0
          },
          {
            question: 'Which of these is NOT a key feature of blockchain?',
            options: [
              'Decentralization',
              'Immutability',
              'Centralized Control',
              'Transparency'
            ],
            correctAnswer: 2
          },
          {
            question: 'What was the first cryptocurrency?',
            options: [
              'Ethereum',
              'Bitcoin',
              'Litecoin',
              'Dogecoin'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'wallet-security',
        title: 'Crypto Wallets & Security',
        duration: '15 min',
        sections: [
          {
            id: 'wallets',
            title: 'Understanding Crypto Wallets',
            content: `
              A cryptocurrency wallet is a digital tool that allows you to store,
              send, and receive cryptocurrencies. Unlike traditional wallets, crypto
              wallets don't actually store your coins - they store the keys that
              give you access to your cryptocurrencies on the blockchain.

              Key Concepts:
              • Public Key - Your wallet address (like an email address)
              • Private Key - Your secret access code (never share this!)
              • Seed Phrase - Backup words to recover your wallet
              • Transaction Signing - Using your private key to approve transfers
            `
          },
          {
            id: 'types-of-wallets',
            title: 'Types of Wallets',
            content: `
              There are several types of cryptocurrency wallets, each with their
              own benefits and trade-offs between security and convenience.

              Wallet Types:
              • Hardware Wallets (Most Secure)
                - Physical devices that store keys offline
                - Examples: Ledger, Trezor
              
              • Software Wallets
                - Desktop Applications
                - Mobile Apps
                - Browser Extensions
                Examples: MetaMask, Trust Wallet

              • Web Wallets (Most Convenient)
                - Accessed through websites
                - Managed by third parties
                - Examples: Exchange wallets
            `
          },
          {
            id: 'security-best',
            title: 'Security Best Practices',
            content: `
              Securing your cryptocurrencies is crucial. Once lost or stolen,
              they cannot be recovered through traditional means.

              Essential Security Tips:
              • Never share your private keys or seed phrase
              • Use hardware wallets for large amounts
              • Enable 2-factor authentication (2FA)
              • Backup your wallet information securely
              • Be cautious of phishing attempts
              • Verify all transaction details carefully
              • Use strong, unique passwords
              • Keep your software updated
            `
          }
        ],
        quiz: [
          {
            question: 'What does a cryptocurrency wallet actually store?',
            options: [
              'The actual coins and tokens',
              'Digital keys to access your funds',
              'Your bank account information',
              'The blockchain itself'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which type of wallet is generally considered the most secure?',
            options: [
              'Web Wallets',
              'Mobile Wallets',
              'Hardware Wallets',
              'Exchange Wallets'
            ],
            correctAnswer: 2
          },
          {
            question: 'What should you NEVER share with anyone?',
            options: [
              'Your public wallet address',
              'Your private keys and seed phrase',
              'The name of your wallet app',
              'The types of crypto you own'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is 2FA in crypto security?',
            options: [
              'A type of cryptocurrency',
              'A blockchain protocol',
              'Two-factor authentication',
              'A wallet brand'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'first-purchase',
        title: 'Making Your First Crypto Purchase',
        duration: '20 min',
        sections: [
          {
            id: 'exchanges',
            title: 'Cryptocurrency Exchanges',
            content: `
              Cryptocurrency exchanges are platforms where you can buy, sell, and trade
              cryptocurrencies. There are different types of exchanges, each with their
              own features and requirements.

              Types of Exchanges:
              • Centralized Exchanges (CEX)
                - Regulated platforms like Coinbase, Binance
                - Require identity verification (KYC)
                - Easy to use, good for beginners
                - Higher liquidity and trading volume

              • Decentralized Exchanges (DEX)
                - No central authority
                - No KYC required
                - Direct wallet-to-wallet trading
                - Examples: Uniswap, PancakeSwap
            `
          },
          {
            id: 'buying-process',
            title: 'How to Buy Cryptocurrency',
            content: `
              The process of buying cryptocurrency typically involves several steps:

              Step-by-Step Guide:
              1. Choose a Reputable Exchange
                 • Research different platforms
                 • Check fees and supported payment methods
                 • Verify availability in your country

              2. Create and Verify Your Account
                 • Sign up with email
                 • Complete identity verification (KYC)
                 • Set up 2FA security

              3. Add Funds to Your Account
                 • Link bank account or card
                 • Deposit fiat currency (USD, EUR, etc.)
                 • Understand deposit fees and limits

              4. Place Your First Order
                 • Choose the cryptocurrency
                 • Select market or limit order
                 • Review and confirm transaction
            `
          },
          {
            id: 'safety-tips',
            title: 'Safe Trading Practices',
            content: `
              When buying cryptocurrency, it's important to follow certain safety
              practices to protect your investment.

              Essential Safety Tips:
              • Start with small amounts
              • Use regulated exchanges
              • Enable all security features
              • Keep records of transactions
              • Understand the fees involved
              • Don't invest more than you can afford to lose
              • Research thoroughly before buying
              • Be wary of scams and fake websites
            `
          }
        ],
        quiz: [
          {
            question: 'What is KYC in cryptocurrency exchanges?',
            options: [
              'A type of cryptocurrency',
              'Know Your Customer verification',
              'A trading strategy',
              'A wallet feature'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which type of exchange typically has the easiest user interface for beginners?',
            options: [
              'Decentralized Exchanges (DEX)',
              'Centralized Exchanges (CEX)',
              'Peer-to-peer Exchanges',
              'Mining Pools'
            ],
            correctAnswer: 1
          },
          {
            question: 'What should you do before making your first crypto purchase?',
            options: [
              'Buy immediately to catch the best price',
              'Share your investment plans on social media',
              'Research and choose a reputable exchange',
              'Invest all your savings'
            ],
            correctAnswer: 2
          },
          {
            question: 'Which is a recommended safety practice when buying crypto?',
            options: [
              'Start with large investments',
              'Share your account credentials',
              'Disable 2FA for convenience',
              'Start with small amounts'
            ],
            correctAnswer: 3
          }
        ]
      },
      {
        id: 'trading-basics',
        title: 'Understanding Trading Basics',
        duration: '25 min',
        sections: [
          {
            id: 'market-basics',
            title: 'Market Fundamentals',
            content: `
              Before starting to trade cryptocurrencies, it's essential to understand
              basic market concepts and terminology.

              Key Terms:
              • Bull Market - Market is trending upward
              • Bear Market - Market is trending downward
              • Volume - Amount of crypto traded in a period
              • Market Cap - Total value of a cryptocurrency
              • Volatility - Price fluctuation intensity
              • Liquidity - Ease of buying/selling without price impact

              Price Movements:
              • Support - Price level where downtrend often stops
              • Resistance - Price level where uptrend often stops
              • Breakout - Price moving beyond support/resistance
            `,
            interactive: 'price-calculator'
          },
          {
            id: 'order-types',
            title: 'Understanding Order Types',
            content: `
              Different order types serve different trading purposes and strategies.

              Common Order Types:
              • Market Order
                 - Buys/sells immediately at current price
                 - Guarantees execution, not price
                 - Best for beginners and small trades

              • Limit Order
                 - Sets specific buy/sell price
                 - Executes only at set price or better
                 - More control, but might not execute

              • Stop Loss
                 - Automatically sells if price drops to set level
                 - Protects against large losses
                 - Important risk management tool

              • Take Profit
                 - Automatically sells if price reaches target
                 - Locks in profits
                 - Helps remove emotion from trading
            `
          },
          {
            id: 'risk-management',
            title: 'Risk Management Essentials',
            content: `
              Risk management is crucial for successful trading and investing
              in cryptocurrencies.

              Essential Rules:
              • Never invest more than you can afford to lose
              • Diversify your investments
              • Use stop-loss orders
              • Start with small positions
              • Don't trade with borrowed money
              • Keep records of all trades
              
              Common Mistakes to Avoid:
              • FOMO (Fear Of Missing Out) trading
              • Emotional decision making
              • Neglecting to take profits
              • Ignoring market trends
              • Over-trading
              • Not having an exit strategy
            `
          }
        ],
        quiz: [
          {
            question: 'What is a bull market?',
            options: [
              'Market is trending downward',
              'Market is trending upward',
              'Market is stable',
              'Market is closed'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which order type guarantees execution but not price?',
            options: [
              'Limit Order',
              'Stop Loss',
              'Market Order',
              'Take Profit'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is FOMO in trading?',
            options: [
              'A trading strategy',
              'A type of cryptocurrency',
              'Fear Of Missing Out',
              'A market indicator'
            ],
            correctAnswer: 2
          },
          {
            question: 'Which is a key principle of risk management?',
            options: [
              'Invest everything at once',
              'Never use stop-loss orders',
              'Trade with borrowed money',
              'Never invest more than you can afford to lose'
            ],
            correctAnswer: 3
          }
        ]
      }
      // More lessons will be added here
    ]
  },
  'investors': {
    title: 'Intermediate Investor Guide',
    description: 'Learn advanced investment strategies and analysis',
    lessons: [
      {
        id: 'fundamental-analysis',
        title: 'Cryptocurrency Fundamental Analysis',
        duration: '30 min',
        sections: [
          {
            id: 'what-is-fa',
            title: 'Understanding Fundamental Analysis',
            content: `
              Fundamental Analysis (FA) in cryptocurrency involves evaluating a
              project's intrinsic value through various metrics and factors.

              Key Areas of Analysis:
              • Team & Development Activity
                - Team experience and track record
                - GitHub activity and updates
                - Development roadmap progress

              • Tokenomics
                - Total & circulating supply
                - Token distribution
                - Inflation/deflation mechanisms
                - Token utility and use cases

              • Market Metrics
                - Market capitalization
                - Trading volume
                - Liquidity depth
                - Network activity
            `
          },
          {
            id: 'metrics',
            title: 'Key Metrics to Evaluate',
            content: `
              Important metrics to consider when analyzing cryptocurrency projects:

              Network Metrics:
              • Active Addresses
                - Daily active users
                - New address growth
                - Transaction count

              • Network Value
                - NVT Ratio (Network Value to Transactions)
                - Market Cap to TVL Ratio
                - Token Velocity

              Project Health:
              • Partnership & Adoption
              • Community Growth
              • Developer Activity
              • Revenue/Token Burn Rate
            `
          },
          {
            id: 'research-methods',
            title: 'Research Methods & Tools',
            content: `
              Effective research methods and tools for cryptocurrency analysis:

              Research Sources:
              • Official Documentation
                - Whitepaper
                - Technical documentation
                - Economic papers

              • Data Platforms
                - CoinGecko
                - Messari
                - DeFi Llama
                - Glassnode

              • Community Resources
                - Official Discord/Telegram
                - Reddit discussions
                - Twitter updates
                - Developer forums
            `
          }
        ],
        quiz: [
          {
            question: 'What is Fundamental Analysis in cryptocurrency?',
            options: [
              'Looking at price charts',
              'Evaluating intrinsic value through metrics',
              'Day trading strategies',
              'Market manipulation'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a key area of fundamental analysis?',
            options: [
              'Team evaluation',
              'Technical chart patterns',
              'Tokenomics',
              'Market metrics'
            ],
            correctAnswer: 1
          },
          {
            question: 'What does NVT ratio measure?',
            options: [
              'Price to earnings',
              'Network value to transactions',
              'Market cap to volume',
              'Token velocity'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'portfolio-management',
        title: 'Portfolio Management Strategies',
        duration: '35 min',
        sections: [
          {
            id: 'portfolio-basics',
            title: 'Portfolio Management Fundamentals',
            content: `
              Effective portfolio management in cryptocurrency requires understanding
              key principles and implementing systematic strategies.

              Core Principles:
              • Asset Allocation
                - Determining investment proportions
                - Risk-based allocation
                - Market cap weighting
                - Equal weighting strategies

              • Diversification Benefits
                - Risk reduction
                - Exposure to different sectors
                - Correlation considerations
                - Geographic diversification
            `
          },
          {
            id: 'rebalancing',
            title: 'Portfolio Rebalancing',
            content: `
              Rebalancing is crucial for maintaining your desired asset allocation
              and managing risk over time.

              Rebalancing Strategies:
              • Time-based Rebalancing
                - Monthly/Quarterly adjustments
                - Annual portfolio review
                - Market cycle consideration

              • Threshold Rebalancing
                - Setting deviation triggers
                - Individual asset limits
                - Portfolio drift management
                - Tax implications
            `
          },
          {
            id: 'risk-management',
            title: 'Advanced Risk Management',
            content: `
              Implementing sophisticated risk management strategies to protect
              your cryptocurrency portfolio.

              Risk Management Tools:
              • Position Sizing
                - Kelly Criterion
                - Percentage-based allocation
                - Risk parity approach

              • Hedging Strategies
                - Stablecoin positions
                - Options and futures
                - Cross-chain diversification
                - DeFi yield strategies

              • Monitoring and Alerts
                - Price movement alerts
                - Portfolio value thresholds
                - Risk metric tracking
                - Correlation changes
            `
          }
        ],
        quiz: [
          {
            question: 'What is the main purpose of portfolio rebalancing?',
            options: [
              'To increase returns',
              'To maintain desired asset allocation',
              'To reduce taxes',
              'To increase trading volume'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common rebalancing strategy?',
            options: [
              'Time-based rebalancing',
              'Threshold rebalancing',
              'Emotion-based rebalancing',
              'Drift-based rebalancing'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is the Kelly Criterion used for?',
            options: [
              'Tax calculation',
              'Position sizing',
              'Market timing',
              'Token selection'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is a common hedging strategy in crypto?',
            options: [
              'Taking loans',
              'Selling all assets',
              'Using stablecoin positions',
              'Ignoring market conditions'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'technical-analysis',
        title: 'Technical Analysis Fundamentals',
        duration: '40 min',
        sections: [
          {
            id: 'ta-basics',
            title: 'Introduction to Technical Analysis',
            content: `
              Technical Analysis (TA) is the study of price action and volume
              to predict future market movements.

              Core Concepts:
              • Price Action
                - Historical price movements
                - Chart patterns
                - Trend analysis
                - Support and resistance levels

              • Volume Analysis
                - Trading volume patterns
                - Volume confirmation
                - Volume profile
                - Liquidity analysis

              • Market Psychology
                - Crowd behavior
                - Fear and greed cycles
                - Market sentiment indicators
            `
          },
          {
            id: 'chart-patterns',
            title: 'Essential Chart Patterns',
            content: `
              Common chart patterns that help identify potential market movements.

              Trend Patterns:
              • Continuation Patterns
                - Flags and Pennants
                - Triangles (Ascending, Descending)
                - Rectangle formations
                - Wedges

              • Reversal Patterns
                - Head and Shoulders
                - Double Tops/Bottoms
                - Triple Tops/Bottoms
                - Rounding patterns

              Pattern Psychology:
              • Formation characteristics
              • Volume confirmation
              • Success rates
              • Risk/reward ratios
            `
          },
          {
            id: 'indicators',
            title: 'Technical Indicators',
            content: `
              Key technical indicators used in cryptocurrency analysis.

              Trend Indicators:
              • Moving Averages
                - Simple Moving Average (SMA)
                - Exponential Moving Average (EMA)
                - Moving Average Convergence Divergence (MACD)

              Momentum Indicators:
              • Relative Strength Index (RSI)
              • Stochastic Oscillator
              • Rate of Change (ROC)

              Volume Indicators:
              • On-Balance Volume (OBV)
              • Volume Profile
              • Accumulation/Distribution
            `
          },
          {
            id: 'trading-strategies',
            title: 'Building Trading Strategies',
            content: `
              Combining technical analysis tools to create effective trading strategies.

              Strategy Components:
              • Entry Rules
                - Pattern recognition
                - Indicator signals
                - Volume confirmation
                - Time frame alignment

              • Exit Rules
                - Profit targets
                - Stop losses
                - Trailing stops
                - Time-based exits

              • Position Sizing
                - Risk per trade
                - Portfolio allocation
                - Scaling methods
            `
          }
        ],
        quiz: [
          {
            question: 'What is the primary focus of Technical Analysis?',
            options: [
              'Project fundamentals',
              'Team background',
              'Price and volume patterns',
              'Market capitalization'
            ],
            correctAnswer: 2
          },
          {
            question: 'Which pattern is typically a reversal pattern?',
            options: [
              'Flag pattern',
              'Head and Shoulders',
              'Ascending triangle',
              'Pennant'
            ],
            correctAnswer: 1
          },
          {
            question: 'What does RSI measure?',
            options: [
              'Market volume',
              'Price momentum',
              'Market cap',
              'Trading frequency'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a key component of a trading strategy?',
            options: [
              'Entry rules',
              'Exit rules',
              'Social media sentiment',
              'Position sizing'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'defi-investing',
        title: 'DeFi Investment Strategies',
        duration: '45 min',
        sections: [
          {
            id: 'defi-basics',
            title: 'Understanding DeFi',
            content: `
              Decentralized Finance (DeFi) offers new ways to earn yield and
              invest in cryptocurrency markets.

              Key DeFi Concepts:
              • Smart Contracts
                - Automated agreements
                - Trustless execution
                - Programmable money

              • Key Protocols
                - Lending platforms
                - Decentralized exchanges
                - Yield aggregators
                - Liquidity protocols

              • Important Metrics
                - Total Value Locked (TVL)
                - Protocol revenue
                - User activity
                - Growth rates
            `
          },
          {
            id: 'yield-farming',
            title: 'Yield Farming Strategies',
            content: `
              Yield farming involves providing liquidity or assets to DeFi
              protocols to earn rewards.

              Common Strategies:
              • Liquidity Provision
                - AMM pools
                - Impermanent loss considerations
                - Fee earnings
                - LP token staking

              • Lending/Borrowing
                - Supply APY
                - Borrowing strategies
                - Collateralization ratios
                - Interest rate arbitrage

              • Yield Aggregation
                - Auto-compounding
                - Protocol hopping
                - Risk assessment
                - Gas optimization
            `
          },
          {
            id: 'defi-risks',
            title: 'Understanding DeFi Risks',
            content: `
              DeFi investments come with unique risks that must be understood
              and managed carefully.

              Risk Categories:
              • Smart Contract Risk
                - Code vulnerabilities
                - Audit importance
                - Insurance options
                - Historical incidents

              • Economic Risk
                - Token price volatility
                - Impermanent loss
                - Protocol sustainability
                - Market manipulation

              • Operational Risk
                - Gas costs
                - Network congestion
                - UI/UX issues
                - Wallet security
            `
          },
          {
            id: 'defi-portfolio',
            title: 'Building a DeFi Portfolio',
            content: `
              Creating a balanced DeFi portfolio requires understanding different
              strategies and risk levels.

              Portfolio Components:
              • Core Holdings
                - Blue chip DeFi tokens
                - Established protocols
                - Long-term positions

              • Yield Generation
                - Stablecoin strategies
                - LP positions
                - Staking opportunities

              • Risk Management
                - Position sizing
                - Protocol diversification
                - Regular monitoring
                - Exit strategies
            `
          }
        ],
        quiz: [
          {
            question: 'What is Total Value Locked (TVL)?',
            options: [
              'A type of cryptocurrency',
              'Total assets deposited in DeFi protocols',
              'A trading strategy',
              'A blockchain network'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is impermanent loss?',
            options: [
              'Network downtime',
              'Smart contract failure',
              'Loss from providing liquidity',
              'Token price decrease'
            ],
            correctAnswer: 2
          },
          {
            question: 'Which is NOT a common yield farming strategy?',
            options: [
              'Liquidity provision',
              'Day trading',
              'Lending/Borrowing',
              'Yield aggregation'
            ],
            correctAnswer: 1
          },
          {
            question: 'What should be considered when building a DeFi portfolio?',
            options: [
              'Only high-risk protocols',
              'Single protocol focus',
              'Protocol diversification',
              'Ignoring TVL'
            ],
            correctAnswer: 2
          }
        ]
      }
      // More intermediate lessons will be added here
    ]
  },
  'traders': {
    title: 'Advanced Trading Strategies',
    description: 'Master professional trading techniques and advanced market analysis',
    lessons: [
      {
        id: 'advanced-ta',
        title: 'Advanced Technical Analysis',
        duration: '50 min',
        sections: [
          {
            id: 'advanced-patterns',
            title: 'Complex Chart Patterns',
            content: `
              Advanced chart patterns and formations that provide higher-probability
              trading opportunities.

              Advanced Patterns:
              • Harmonic Patterns
                - Gartley Pattern
                - Butterfly Pattern
                - Bat Pattern
                - Crab Pattern
                - Fibonacci ratios

              • Elliott Wave Theory
                - Wave principles
                - Impulse waves
                - Corrective waves
                - Wave counting
                - Trading applications
            `
          },
          {
            id: 'advanced-indicators',
            title: 'Advanced Technical Indicators',
            content: `
              Sophisticated indicators and their combinations for precise
              market analysis.

              Advanced Indicators:
              �� Oscillators
                - Stochastic RSI
                - Williams %R
                - CCI (Commodity Channel Index)
                - ADX (Average Directional Index)

              • Volume-Based Indicators
                - Volume Profile
                - Money Flow Index
                - Accumulation/Distribution
                - On-Balance Volume

              • Custom Indicators
                - Combining indicators
                - Creating custom signals
                - Backtesting strategies
            `
          },
          {
            id: 'market-structure',
            title: 'Market Structure Analysis',
            content: `
              Understanding and trading based on market structure and order flow.

              Key Concepts:
              • Order Flow Analysis
                - Market depth
                - Order book analysis
                - Volume profile analysis
                - Liquidity zones

              • Market Structure
                - Supply and demand zones
                - Market phases
                - Trend structure
                - Range analysis
            `
          }
        ],
        quiz: [
          {
            question: 'What is a Harmonic Pattern?',
            options: [
              'A random price movement',
              'A pattern using Fibonacci ratios',
              'A volume indicator',
              'A trend line'
            ],
            correctAnswer: 1
          },
          {
            question: 'How many waves are in a complete Elliott Wave cycle?',
            options: [
              '3',
              '5',
              '8',
              '13'
            ],
            correctAnswer: 1
          },
          {
            question: 'What does the ADX indicator measure?',
            options: [
              'Price momentum',
              'Volume',
              'Trend strength',
              'Market volatility'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'advanced-orders',
        title: 'Advanced Order Types & Execution',
        duration: '45 min',
        sections: [
          {
            id: 'complex-orders',
            title: 'Complex Order Types',
            content: `
              Advanced order types for sophisticated trading strategies.

              Advanced Orders:
              • Conditional Orders
                - OCO (One-Cancels-Other)
                - If-Then Orders
                - Trailing Stop Orders
                - Time-Based Orders

              • Algorithmic Orders
                - TWAP (Time-Weighted Average Price)
                - VWAP (Volume-Weighted Average Price)
                - Iceberg Orders
                - Scaled Orders
            `
          },
          {
            id: 'execution-strategies',
            title: 'Order Execution Strategies',
            content: `
              Strategies for optimal order execution and minimizing market impact.

              Key Strategies:
              • Order Sizing
                - Block trades
                - Order splitting
                - Dynamic sizing
                - Liquidity analysis

              • Timing Considerations
                - Market hours
                - Volume patterns
                - Volatility windows
                - News events
            `
          },
          {
            id: 'advanced-risk',
            title: 'Advanced Risk Management',
            content: `
              Sophisticated risk management techniques for complex trading.

              Risk Tools:
              • Position Management
                - Dynamic position sizing
                - Correlation-based limits
                - Portfolio heat mapping
                - Risk-adjusted sizing

              • Hedging Techniques
                - Delta hedging
                - Options strategies
                - Cross-asset hedging
                - Synthetic positions
            `
          },
          {
            id: 'market-microstructure',
            title: 'Market Microstructure',
            content: `
              Understanding market mechanics and order book dynamics.

              Key Concepts:
              • Order Book Analysis
                - Depth analysis
                - Bid-ask spread
                - Order flow imbalance
                - Hidden liquidity

              • Market Impact
                - Slippage calculation
                - Impact modeling
                - Execution costs
                - Optimal trade size
            `
          }
        ],
        quiz: [
          {
            question: 'What is an OCO order?',
            options: [
              'Open-Close-Open order',
              'One-Cancels-Other order',
              'Option Call Order',
              'Over-Counter Order'
            ],
            correctAnswer: 1
          },
          {
            question: 'What does VWAP stand for?',
            options: [
              'Very Weighted Average Price',
              'Volume-Weighted Average Price',
              'Volatile Weighted Average Position',
              'Value-Weighted Average Price'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is an iceberg order?',
            options: [
              'A very large order',
              'A hidden order showing only part of total size',
              'A cold storage order',
              'A market maker order'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common hedging technique?',
            options: [
              'Delta hedging',
              'Cross-asset hedging',
              'Random hedging',
              'Options strategies'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'market-making',
        title: 'Market Making Strategies',
        duration: '55 min',
        sections: [
          {
            id: 'mm-basics',
            title: 'Market Making Fundamentals',
            content: `
              Understanding the principles and mechanics of market making in
              cryptocurrency markets.

              Core Concepts:
              • Market Making Basics
                - Bid-ask spread management
                - Inventory management
                - Risk management
                - Profit sources

              • Market Maker Types
                - Professional market makers
                - Automated market makers (AMM)
                - Hybrid approaches
                - Retail market making
            `
          },
          {
            id: 'strategies',
            title: 'Market Making Strategies',
            content: `
              Different approaches to market making and their implementation.

              Strategy Types:
              • Basic Market Making
                - Simple spread strategies
                - Quote management
                - Position limits
                - Risk parameters

              • Advanced Strategies
                - Dynamic spread adjustment
                - Multi-level quoting
                - Cross-exchange arbitrage
                - Inventory skewing

              • Risk Management
                - Delta-neutral strategies
                - Hedging techniques
                - Position rebalancing
                - Stop-loss implementation
            `
          },
          {
            id: 'technology',
            title: 'Technology & Infrastructure',
            content: `
              Technical requirements and infrastructure needed for market making.

              Key Components:
              • Trading Infrastructure
                - Low-latency connections
                - Co-location services
                - Order management systems
                - Risk management tools

              • Data Requirements
                - Real-time market data
                - Order book depth
                - Trade flow analysis
                - Historical data
            `
          },
          {
            id: 'implementation',
            title: 'Implementation & Optimization',
            content: `
              Practical aspects of implementing and optimizing market making strategies.

              Implementation Steps:
              • Strategy Setup
                - Parameter selection
                - Risk limits
                - Monitoring systems
                - Performance metrics

              • Optimization
                - Spread optimization
                - Position management
                - Fee optimization
                - Execution efficiency
            `
          }
        ],
        quiz: [
          {
            question: 'What is the primary source of profit for market makers?',
            options: [
              'Price appreciation',
              'Bid-ask spread',
              'Trading fees',
              'Interest rates'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is inventory skewing?',
            options: [
              'Random position taking',
              'Adjusting quotes based on inventory',
              'Closing all positions',
              'Opening new markets'
            ],
            correctAnswer: 1
          },
          {
            question: 'Why is low latency important for market making?',
            options: [
              'To save energy',
              'To reduce costs',
              'For faster quote updates',
              'For better graphics'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is NOT a key component of market making infrastructure?',
            options: [
              'Order management system',
              'Social media monitoring',
              'Risk management tools',
              'Real-time market data'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'arbitrage-trading',
        title: 'Arbitrage Trading Strategies',
        duration: '60 min',
        sections: [
          {
            id: 'arbitrage-basics',
            title: 'Understanding Arbitrage',
            content: `
              Arbitrage trading involves profiting from price differences of the
              same asset across different markets.

              Core Concepts:
              • Types of Arbitrage
                 - Exchange arbitrage
                 - Triangular arbitrage
                 - Cross-border arbitrage
                 - Statistical arbitrage

              • Market Inefficiencies
                 - Price discrepancies
                 - Liquidity differences
                 - Trading volume variations
                 - Settlement times
            `
          },
          {
            id: 'execution',
            title: 'Arbitrage Execution',
            content: `
              Implementing arbitrage strategies requires precise execution and
              timing.

              Key Components:
              • Infrastructure Requirements
                 - High-speed connections
                 - Multiple exchange accounts
                 - Automated systems
                 - Real-time data feeds

              • Execution Challenges
                 - Slippage management
                 - Network latency
                 - Order book depth
                 - Transaction costs
            `
          },
          {
            id: 'defi-arbitrage',
            title: 'DeFi Arbitrage',
            content: `
              Arbitrage opportunities in decentralized finance markets.

              DeFi Arbitrage Types:
              • AMM Arbitrage
                 - DEX vs CEX
                 - Cross-DEX opportunities
                 - Flash loan strategies
                 - MEV opportunities

              • Yield Arbitrage
                 - Interest rate differentials
                 - Lending platform arbitrage
                 - Stablecoin arbitrage
                 - Cross-chain opportunities
            `
          },
          {
            id: 'risk-management',
            title: 'Arbitrage Risk Management',
            content: `
              Managing risks specific to arbitrage trading strategies.

              Risk Factors:
              • Execution Risk
                 - Technical failures
                 - Market movements
                 - Order filling
                 - Network congestion

              • Platform Risk
                 - Exchange downtimes
                 - Withdrawal delays
                 - API limitations
                 - Account restrictions
            `
          }
        ],
        quiz: [
          {
            question: 'What is triangular arbitrage?',
            options: [
              'Trading three different assets',
              'Trading on three exchanges',
              'Profiting from price differences in three related pairs',
              'Using three different wallets'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is MEV in DeFi arbitrage?',
            options: [
              'Maximum Exchange Volume',
              'Miner Extractable Value',
              'Multiple Entry Verification',
              'Market Entry Value'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is most critical for arbitrage trading?',
            options: [
              'Social media following',
              'Long-term analysis',
              'Execution speed',
              'Market predictions'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is a flash loan used for in DeFi arbitrage?',
            options: [
              'Long-term borrowing',
              'Instant uncollateralized loans for arbitrage',
              'Exchange verification',
              'Wallet security'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'options-trading',
        title: 'Cryptocurrency Options Trading',
        duration: '65 min',
        sections: [
          {
            id: 'options-basics',
            title: 'Understanding Crypto Options',
            content: `
              Introduction to cryptocurrency options trading and basic concepts.

              Core Concepts:
              • Option Types
                - Call Options (right to buy)
                - Put Options (right to sell)
                - American vs European style
                - Settlement types

              • Key Terms
                - Strike Price
                - Expiration Date
                - Premium
                - Intrinsic/Extrinsic Value
            `
          },
          {
            id: 'greeks',
            title: 'The Option Greeks',
            content: `
              Understanding and using option Greeks for risk management.

              Key Greeks:
              • Delta
                - Directional risk
                - Hedge ratios
                - Portfolio delta

              • Gamma
                - Rate of delta change
                - Gamma risk management
                - Position sizing

              • Theta
                - Time decay
                - Premium erosion
                - Theta strategies

              • Vega
                - Volatility sensitivity
                - Vega hedging
                - Volatility trading
            `
          },
          {
            id: 'strategies',
            title: 'Options Trading Strategies',
            content: `
              Common options trading strategies for different market conditions.

              Basic Strategies:
              • Directional
                - Long calls/puts
                - Covered calls
                - Protective puts
                - Bull/Bear spreads

              • Volatility
                - Straddles
                - Strangles
                - Butterflies
                - Iron condors
            `
          },
          {
            id: 'risk-management',
            title: 'Options Risk Management',
            content: `
              Managing risks specific to options trading in crypto markets.

              Risk Considerations:
              • Position Sizing
                - Maximum position size
                - Portfolio allocation
                - Greek limits
                - Margin requirements

              • Hedging Techniques
                - Delta hedging
                - Cross-hedging
                - Dynamic hedging
                - Correlation hedging
            `
          }
        ],
        quiz: [
          {
            question: 'What is the difference between a call and put option?',
            options: [
              'No difference',
              'Call is right to buy, Put is right to sell',
              'Call is for bulls, Put is for bears',
              'Call is American, Put is European'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which Greek measures time decay?',
            options: [
              'Delta',
              'Gamma',
              'Theta',
              'Vega'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is a straddle strategy?',
            options: [
              'Buying only calls',
              'Buying puts and calls at same strike',
              'Selling all options',
              'Buying different stocks'
            ],
            correctAnswer: 1
          },
          {
            question: 'What does Delta represent?',
            options: [
              'Time value',
              'Price of option',
              'Directional risk exposure',
              'Volatility sensitivity'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'algorithmic-trading',
        title: 'Algorithmic Trading Systems',
        duration: '70 min',
        sections: [
          {
            id: 'algo-basics',
            title: 'Introduction to Algorithmic Trading',
            content: `
              Understanding the fundamentals of algorithmic trading systems.

              Core Concepts:
              • Trading System Components
                - Signal generation
                - Risk management
                - Position sizing
                - Order execution

              • System Types
                - Trend following
                - Mean reversion
                - Statistical arbitrage
                - Market making
                - High-frequency trading
            `
          },
          {
            id: 'system-development',
            title: 'Trading System Development',
            content: `
              Building and testing algorithmic trading systems.

              Development Process:
              • Strategy Design
                - Market hypothesis
                - Entry/exit rules
                - Risk parameters
                - Performance metrics

              • Implementation
                - Code structure
                - Data handling
                - Order management
                - Position tracking
            `
          },
          {
            id: 'backtesting',
            title: 'Backtesting & Optimization',
            content: `
              Testing and optimizing trading strategies using historical data.

              Key Aspects:
              • Backtesting Framework
                - Data preparation
                - Transaction costs
                - Slippage modeling
                - Position management

              • Performance Analysis
                - Return metrics
                - Risk metrics
                - Drawdown analysis
                - Robustness testing
            `
          },
          {
            id: 'live-trading',
            title: 'Live Trading Implementation',
            content: `
              Deploying and managing live algorithmic trading systems.

              Implementation Steps:
              • Infrastructure Setup
                - Server configuration
                - API connections
                - Data feeds
                - Monitoring systems

              • Risk Controls
                - Position limits
                - Loss limits
                - Error handling
                - Emergency shutdown
            `
          }
        ],
        quiz: [
          {
            question: 'What is backtesting in algorithmic trading?',
            options: [
              'Live trading simulation',
              'Testing strategy on historical data',
              'Manual trading practice',
              'Market analysis'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common algorithmic trading strategy?',
            options: [
              'Trend following',
              'Mean reversion',
              'Social media trading',
              'Statistical arbitrage'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is slippage in trading?',
            options: [
              'System error',
              'Network delay',
              'Difference between expected and actual execution price',
              'Trading fee'
            ],
            correctAnswer: 2
          },
          {
            question: 'Which is most important for live trading systems?',
            options: [
              'Fancy user interface',
              'Risk management controls',
              'Social media integration',
              'Mobile notifications'
            ],
            correctAnswer: 1
          }
        ]
      }
      // More advanced lessons will be added...
    ]
  },
  'defi': {
    title: 'DeFi Specialist Path',
    description: 'Master decentralized finance protocols, strategies, and development',
    lessons: [
      {
        id: 'defi-architecture',
        title: 'DeFi Protocol Architecture',
        duration: '60 min',
        sections: [
          {
            id: 'protocol-basics',
            title: 'Protocol Design Fundamentals',
            content: `
              Understanding the core components and architecture of DeFi protocols.

              Key Components:
              • Smart Contract Architecture
                - Contract interactions
                - State management
                - Access control
                - Upgradeability patterns

              • Protocol Components
                - Core contracts
                - Peripheral contracts
                - Oracle integration
                - Governance mechanisms
            `
          },
          {
            id: 'token-economics',
            title: 'Token Economics Design',
            content: `
              Designing sustainable token economics for DeFi protocols.

              Core Elements:
              • Token Utility
                - Governance rights
                - Fee sharing
                - Staking mechanisms
                - Protocol incentives

              • Supply Mechanics
                - Emission schedule
                - Burning mechanisms
                - Vesting schedules
                - Distribution methods
            `
          },
          {
            id: 'security-considerations',
            title: 'Security Architecture',
            content: `
              Security considerations in DeFi protocol design.

              Security Layers:
              • Smart Contract Security
                - Access controls
                - Reentrancy protection
                - Integer overflow protection
                - Emergency mechanisms

              • Economic Security
                - Attack vectors
                - Economic incentives
                - Risk parameters
                - Circuit breakers
            `
          }
        ],
        quiz: [
          {
            question: 'What is a smart contract upgradeability pattern?',
            options: [
              'A way to change blockchain',
              'A method to update contract logic',
              'A token distribution method',
              'A governance system'
            ],
            correctAnswer: 1
          },
          {
            question: 'Why are oracles important in DeFi?',
            options: [
              'For storing data',
              'For external data feeds',
              'For token creation',
              'For user interface'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'amm-mechanics',
        title: 'Advanced AMM Mechanics',
        duration: '65 min',
        sections: [
          {
            id: 'amm-fundamentals',
            title: 'AMM Core Concepts',
            content: `
              Understanding the mathematical and economic principles behind AMMs.

              Core Concepts:
              • Bonding Curves
                - Constant product formula
                - Constant sum formula
                - Hybrid curves
                - Custom curve designs

              • Pool Dynamics
                - Liquidity depth
                - Price impact
                - Slippage calculation
                - Virtual reserves
            `
          },
          {
            id: 'advanced-amm',
            title: 'Advanced AMM Models',
            content: `
              Exploring different AMM models and their specific use cases.

              AMM Types:
              • Uniswap v2/v3
                - Concentrated liquidity
                - Tick ranges
                - Fee tiers
                - Price ranges

              • Curve Finance
                - StableSwap algorithm
                - Meta-pools
                - Factory pools
                - Gauge system
            `
          },
          {
            id: 'liquidity-provision',
            title: 'Liquidity Provision Strategies',
            content: `
              Advanced strategies for liquidity providers in AMM protocols.

              Key Strategies:
              • Position Management
                - Range selection
                - Fee optimization
                - Rebalancing strategies
                - IL mitigation

              • Risk Management
                - Impermanent loss hedging
                - Portfolio balancing
                - Risk/reward analysis
                - Exit strategies
            `
          },
          {
            id: 'amm-integration',
            title: 'Protocol Integration',
            content: `
              Implementing and integrating AMM functionality into DeFi protocols.

              Integration Aspects:
              • Smart Contract Integration
                - Router contracts
                - Factory patterns
                - Flash swaps
                - Callback handling

              • Price Oracle Design
                - TWAP oracles
                - Manipulation resistance
                - Fallback mechanisms
                - Update frequency
            `
          }
        ],
        quiz: [
          {
            question: 'What is concentrated liquidity in Uniswap v3?',
            options: [
              'More tokens in the pool',
              'Liquidity focused in specific price ranges',
              'Faster trading speed',
              'Lower fees'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the main advantage of Curve\'s StableSwap?',
            options: [
              'Higher fees',
              'More tokens supported',
              'Better stable asset swaps',
              'Faster transactions'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is a TWAP oracle?',
            options: [
              'A type of token',
              'Time-Weighted Average Price feed',
              'Trading bot',
              'Governance system'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a strategy for managing impermanent loss?',
            options: [
              'Range selection',
              'Portfolio balancing',
              'Ignoring price changes',
              'Hedging positions'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'lending-protocols',
        title: 'DeFi Lending Protocols',
        duration: '70 min',
        sections: [
          {
            id: 'lending-basics',
            title: 'Understanding DeFi Lending',
            content: `
              Core concepts and mechanics of decentralized lending protocols.

              Fundamental Concepts:
              • Lending Markets
                - Supply and borrow rates
                - Utilization rates
                - Interest rate models
                - Collateralization ratios

              • Protocol Types
                - Pooled lending (Aave, Compound)
                - P2P lending
                - Flash loans
                - Isolated lending markets
            `
          },
          {
            id: 'risk-management',
            title: 'Lending Risk Management',
            content: `
              Understanding and managing risks in DeFi lending protocols.

              Risk Factors:
              • Liquidation Risk
                - Health factors
                - Liquidation thresholds
                - Liquidation penalties
                - Price impact

              • Market Risk
                - Interest rate volatility
                - Collateral value fluctuation
                - Protocol solvency
                - Black swan events
            `
          },
          {
            id: 'lending-strategies',
            title: 'Advanced Lending Strategies',
            content: `
              Sophisticated strategies for maximizing lending returns.

              Strategy Types:
              • Yield Optimization
                - Rate arbitrage
                - Collateral optimization
                - Leverage strategies
                - Risk-adjusted returns

              • Advanced Techniques
                - Flash loan arbitrage
                - Cross-protocol strategies
                - Recursive borrowing
                - Delta-neutral positions
            `
          },
          {
            id: 'protocol-integration',
            title: 'Protocol Implementation',
            content: `
              Technical aspects of implementing lending functionality.

              Implementation Details:
              • Core Components
                - Interest rate models
                - Oracle integration
                - Liquidation engines
                - Risk parameters

              • Smart Contract Design
                - ERC20 interactions
                - Access control
                - Emergency procedures
                - Upgradability patterns
            `
          }
        ],
        quiz: [
          {
            question: 'What is a health factor in lending protocols?',
            options: [
              'Protocol TVL',
              'Collateral to debt ratio',
              'Interest rate',
              'Token price'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is a flash loan?',
            options: [
              'A small loan',
              'A quick approval loan',
              'An uncollateralized loan repaid in same transaction',
              'A high interest loan'
            ],
            correctAnswer: 2
          },
          {
            question: 'What determines lending interest rates?',
            options: [
              'Protocol developers',
              'Market utilization',
              'Token price',
              'Random generation'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common lending strategy?',
            options: [
              'Rate arbitrage',
              'Leverage farming',
              'Ignoring liquidation risks',
              'Collateral optimization'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'cross-chain-defi',
        title: 'Cross-chain DeFi Integration',
        duration: '75 min',
        sections: [
          {
            id: 'cross-chain-basics',
            title: 'Cross-chain Fundamentals',
            content: `
              Understanding the principles and mechanics of cross-chain DeFi.

              Core Concepts:
              • Bridge Technologies
                - Wrapped tokens
                - Lock and mint
                - Burn and release
                - Message passing

              • Cross-chain Protocols
                - Bridge protocols
                - Cross-chain DEXs
                - Unified liquidity
                - Multi-chain yield
            `
          },
          {
            id: 'bridge-mechanics',
            title: 'Bridge Architecture',
            content: `
              Technical implementation of cross-chain bridges.

              Key Components:
              • Bridge Design
                - Validator networks
                - Relayer systems
                - Proof verification
                - State synchronization

              • Security Models
                - Trust assumptions
                - Consensus mechanisms
                - Fraud proofs
                - Emergency procedures
            `
          },
          {
            id: 'cross-chain-strategies',
            title: 'Cross-chain DeFi Strategies',
            content: `
              Advanced strategies for cross-chain DeFi operations.

              Strategy Types:
              • Yield Optimization
                - Cross-chain farming
                - Bridge arbitrage
                - Liquidity management
                - Risk diversification

              • Portfolio Management
                - Multi-chain exposure
                - Bridge risk assessment
                - Gas optimization
                - Rebalancing strategies
            `
          },
          {
            id: 'implementation',
            title: 'Cross-chain Integration',
            content: `
              Implementing cross-chain functionality in DeFi protocols.

              Implementation Aspects:
              • Protocol Integration
                - Bridge interfaces
                - Cross-chain messaging
                - Asset mapping
                - Event handling

              • Risk Management
                - Bridge monitoring
                - Liquidity thresholds
                - Timeout mechanisms
                - Recovery procedures
            `
          }
        ],
        quiz: [
          {
            question: 'What is a wrapped token?',
            options: [
              'A token in a gift box',
              'A blockchain-based representation of an asset from another chain',
              'A token with special permissions',
              'A discounted token'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the main purpose of a blockchain bridge?',
            options: [
              'To increase token price',
              'To connect different blockchain networks',
              'To store tokens',
              'To create new tokens'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is a key consideration in cross-chain DeFi?',
            options: [
              'Social media presence',
              'Bridge security and trust assumptions',
              'Website design',
              'Marketing strategy'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is bridge arbitrage?',
            options: [
              'Building new bridges',
              'Profiting from price differences across bridges',
              'Marketing bridges',
              'Bridge maintenance'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'defi-governance',
        title: 'DeFi Protocol Governance',
        duration: '80 min',
        sections: [
          {
            id: 'governance-basics',
            title: 'Governance Fundamentals',
            content: `
              Understanding the principles and mechanisms of DeFi protocol governance.

              Core Concepts:
              • Governance Models
                - Token-based voting
                - Quadratic voting
                - Delegation systems
                - Multi-signature systems

              • Governance Parameters
                - Quorum requirements
                - Voting periods
                - Proposal thresholds
                - Time locks
            `
          },
          {
            id: 'proposal-lifecycle',
            title: 'Proposal Lifecycle Management',
            content: `
              Managing the full lifecycle of governance proposals.

              Key Stages:
              • Proposal Creation
                - Discussion phase
                - Formal submission
                - Parameter changes
                - Implementation specs

              • Voting Process
                - Vote delegation
                - Vote weight calculation
                - Vote tracking
                - Result execution
            `
          },
          {
            id: 'governance-strategies',
            title: 'Advanced Governance Strategies',
            content: `
              Strategic approaches to protocol governance participation.

              Strategy Elements:
              • Voting Power
                - Token accumulation
                - Vote delegation
                - Coalition building
                - Long-term alignment

              • Proposal Strategy
                - Timing considerations
                - Community engagement
                - Technical validation
                - Economic impact analysis
            `
          },
          {
            id: 'implementation',
            title: 'Governance Implementation',
            content: `
              Technical implementation of governance systems.

              Implementation Aspects:
              • Smart Contract Design
                - Governor contracts
                - Timelock contracts
                - Voting modules
                - Access control

              • Security Considerations
                - Attack vectors
                - Emergency procedures
                - Upgrade mechanisms
                - Power concentration
            `
          }
        ],
        quiz: [
          {
            question: 'What is quadratic voting?',
            options: [
              'Voting twice',
              'Voting cost increases quadratically with votes',
              'Square root of tokens',
              'Four votes per person'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is a governance timelock?',
            options: [
              'Voting deadline',
              'Delay between proposal approval and execution',
              'Token lock period',
              'Proposal creation time'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is vote delegation?',
            options: [
              'Selling votes',
              'Assigning voting power to another address',
              'Automatic voting',
              'Vote splitting'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common governance attack vector?',
            options: [
              'Flash loan attacks',
              'Governance participation',
              'Vote buying',
              'Proposal spam'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'defi-security',
        title: 'DeFi Protocol Security',
        duration: '65 min',
        sections: [
          {
            id: 'defi-vulnerabilities',
            title: 'DeFi-Specific Vulnerabilities',
            content: `
              Understanding unique security challenges in DeFi protocols.

              Key Areas:
              • Economic Vulnerabilities
                - Price manipulation
                - Flash loan attacks
                - Oracle manipulation
                - MEV exploitation

              • Protocol Risks
                - Liquidity risks
                - Governance attacks
                - Collateral risks
                - Integration risks
            `
          },
          {
            id: 'security-architecture',
            title: 'Security Architecture',
            content: `
              Designing secure DeFi protocol architecture.

              Design Principles:
              • Access Controls
                - Role management
                - Time locks
                - Emergency controls
                - Upgradability patterns

              • Economic Security
                - Circuit breakers
                - Rate limiting
                - Value caps
                - Slippage protection
            `
          },
          {
            id: 'attack-vectors',
            title: 'Common Attack Vectors',
            content: `
              Understanding and preventing common DeFi attacks.

              Attack Types:
              • Flash Loan Attacks
                - Price manipulation
                - Arbitrage exploitation
                - Governance attacks
                - Collateral manipulation

              • Oracle Attacks
                - Price feed manipulation
                - Timestamp manipulation
                - Data source attacks
                - Delayed updates
            `
          },
          {
            id: 'security-monitoring',
            title: 'Security Monitoring',
            content: `
              Implementing monitoring systems for DeFi protocols.

              Monitoring Systems:
              • Real-time Monitoring
                - Transaction monitoring
                - Value tracking
                - Anomaly detection
                - Alert systems

              • Risk Assessment
                - TVL monitoring
                - Collateral health
                - Protocol metrics
                - User behavior
            `
          }
        ],
        quiz: [
          {
            question: 'What is a flash loan attack?',
            options: [
              'Quick loan approval',
              'Exploiting borrowed funds within one transaction',
              'Small loan amounts',
              'Long-term loans'
            ],
            correctAnswer: 1
          },
          {
            question: 'Why are circuit breakers important in DeFi?',
            options: [
              'To stop electricity',
              'To prevent extreme market conditions',
              'To increase speed',
              'To reduce costs'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is oracle manipulation?',
            options: [
              'Database management',
              'Price feed tampering',
              'User interface changes',
              'Network upgrades'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common DeFi security measure?',
            options: [
              'Time locks',
              'Social media monitoring',
              'Circuit breakers',
              'Access controls'
            ],
            correctAnswer: 1
          }
        ]
      }
      // More DeFi lessons will be added...
    ]
  },
  'nft': {
    title: 'NFT Specialist Path',
    description: 'Master NFT creation, trading, and development',
    lessons: [
      {
        id: 'nft-fundamentals',
        title: 'NFT Fundamentals',
        duration: '45 min',
        sections: [
          {
            id: 'nft-basics',
            title: 'Understanding NFTs',
            content: `
              Introduction to Non-Fungible Tokens and their core concepts.

              Key Concepts:
              • NFT Basics
                - Non-fungibility explained
                - Token standards (ERC-721, ERC-1155)
                - Blockchain storage
                - Metadata structure

              • Use Cases
                - Digital art
                - Gaming assets
                - Virtual real estate
                - Collectibles
            `
          },
          {
            id: 'technical-foundation',
            title: 'Technical Foundation',
            content: `
              Understanding the technical aspects of NFTs.

              Core Components:
              • Smart Contracts
                - Contract structure
                - Minting process
                - Transfer mechanics
                - Ownership verification

              • Metadata
                - JSON structure
                - IPFS storage
                - On-chain vs Off-chain
                - URI standards
            `
          },
          {
            id: 'marketplaces',
            title: 'NFT Marketplaces',
            content: `
              Overview of NFT marketplace mechanics and operations.

              Key Elements:
              • Marketplace Types
                - Curated platforms
                - Open marketplaces
                - Specialized venues
                - Gaming marketplaces

              • Trading Mechanics
                - Listing process
                - Bidding systems
                - Price discovery
                - Settlement process
            `
          },
          {
            id: 'valuation',
            title: 'NFT Valuation',
            content: `
              Understanding how NFTs are valued in the market.

              Valuation Factors:
              • Rarity Metrics
                - Trait rarity
                - Edition size
                - Historical significance
                - Utility value

              • Market Dynamics
                - Floor price
                - Volume metrics
                - Holder distribution
                - Market sentiment
            `
          }
        ],
        quiz: [
          {
            question: 'What makes a token "non-fungible"?',
            options: [
              'It can be traded',
              'Each token is unique and not interchangeable',
              'It has no value',
              'It can be copied'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the most common NFT token standard on Ethereum?',
            options: [
              'ERC-20',
              'ERC-721',
              'ERC-777',
              'ERC-1155'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is a floor price in NFT markets?',
            options: [
              'The highest price of a collection',
              'The average price',
              'The lowest listed price for a collection',
              'The mint price'
            ],
            correctAnswer: 2
          },
          {
            question: 'Where is NFT metadata typically stored?',
            options: [
              'Only on the blockchain',
              'IPFS or similar decentralized storage',
              'Local computer',
              'Email servers'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'nft-creation',
        title: 'NFT Creation & Minting',
        duration: '50 min',
        sections: [
          {
            id: 'creation-process',
            title: 'NFT Creation Process',
            content: `
              Understanding the complete process of creating NFTs.

              Creation Steps:
              • Asset Preparation
                - Digital art creation
                - File formats and sizes
                - Metadata preparation
                - Collection planning

              • Technical Setup
                - Smart contract deployment
                - IPFS/Storage setup
                - Testing environment
                - Minting infrastructure
            `
          },
          {
            id: 'smart-contracts',
            title: 'NFT Smart Contracts',
            content: `
              Deep dive into NFT smart contract development.

              Contract Elements:
              • Core Functions
                - Minting logic
                - Transfer functions
                - Access controls
                - Metadata handling

              • Advanced Features
                - Royalty mechanisms
                - Batch minting
                - Whitelist functionality
                - Reveal mechanics
            `
          },
          {
            id: 'metadata-standards',
            title: 'Metadata & Standards',
            content: `
              Understanding NFT metadata standards and best practices.

              Key Aspects:
              • Metadata Structure
                - JSON schema
                - Required fields
                - Optional attributes
                - Media references

              • Storage Solutions
                - IPFS integration
                - Arweave storage
                - Centralized options
                - Hybrid approaches
            `
          },
          {
            id: 'minting-strategies',
            title: 'Minting Strategies',
            content: `
              Different approaches to NFT minting and distribution.

              Strategy Types:
              • Distribution Models
                - Public mint
                - Whitelist/Presale
                - Dutch auctions
                - Free mint

              • Launch Considerations
                - Gas optimization
                - Bot prevention
                - Community engagement
                - Marketing timing
            `
          }
        ],
        quiz: [
          {
            question: 'What is the purpose of NFT metadata?',
            options: [
              'To make NFTs more expensive',
              'To store NFT attributes and properties',
              'To create smart contracts',
              'To sell NFTs'
            ],
            correctAnswer: 1
          },
          {
            question: 'Why is IPFS commonly used for NFT storage?',
            options: [
              'It\'s free',
              'It\'s centralized',
              'It\'s decentralized and permanent',
              'It\'s faster'
            ],
            correctAnswer: 2
          },
          {
            question: 'What is a Dutch auction in NFT minting?',
            options: [
              'Only Dutch people can mint',
              'Price starts high and decreases over time',
              'Fixed price minting',
              'Random price minting'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the purpose of a whitelist in NFT minting?',
            options: [
              'To block users',
              'To give priority access to specific users',
              'To increase gas fees',
              'To store metadata'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'nft-marketplace',
        title: 'NFT Marketplace Development',
        duration: '55 min',
        sections: [
          {
            id: 'marketplace-architecture',
            title: 'Marketplace Architecture',
            content: `
              Understanding the core components of NFT marketplace development.

              Key Components:
              • Smart Contract Layer
                - Listing contracts
                - Escrow systems
                - Trading logic
                - Fee mechanisms

              • Backend Infrastructure
                - Indexing services
                - Metadata handling
                - Event processing
                - API development
            `
          },
          {
            id: 'trading-mechanics',
            title: 'Trading Mechanics Implementation',
            content: `
              Implementing various trading mechanisms in NFT marketplaces.

              Trading Features:
              • Listing Types
                - Fixed price listings
                - Auction mechanisms
                - Offer systems
                - Bundle sales

              • Price Discovery
                - Bid matching
                - Reserve prices
                - Automatic pricing
                - Floor price tracking
            `
          },
          {
            id: 'marketplace-features',
            title: 'Advanced Marketplace Features',
            content: `
              Advanced features for enhanced marketplace functionality.

              Feature Set:
              • User Features
                - Collection verification
                - Profile management
                - Activity tracking
                - Notification systems

              • Trading Tools
                - Rarity rankings
                - Price history
                - Collection analytics
                - Trading history
            `
          },
          {
            id: 'integration-security',
            title: 'Integration & Security',
            content: `
              Security considerations and integration aspects.

              Key Aspects:
              • Security Measures
                - Signature verification
                - Access controls
                - Front-running protection
                - Emergency procedures

              • Platform Integration
                - Wallet integration
                - Chain integration
                - Oracle services
                - Payment systems
            `
          }
        ],
        quiz: [
          {
            question: 'What is the purpose of an escrow system in NFT marketplaces?',
            options: [
              'To store NFTs permanently',
              'To hold assets during a trade',
              'To create NFTs',
              'To set prices'
            ],
            correctAnswer: 1
          },
          {
            question: 'Why is signature verification important?',
            options: [
              'For aesthetics',
              'For security and authentication',
              'For faster transactions',
              'For lower fees'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is front-running in NFT trading?',
            options: [
              'Buying before others',
              'Exploiting pending transactions',
              'Setting high prices',
              'Creating new NFTs'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common marketplace feature?',
            options: [
              'Price history',
              'Rarity rankings',
              'Mining NFTs',
              'Collection analytics'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'nft-gaming',
        title: 'NFT Gaming & Metaverse Development',
        duration: '60 min',
        sections: [
          {
            id: 'gaming-fundamentals',
            title: 'NFT Gaming Fundamentals',
            content: `
              Understanding the core concepts of NFT gaming and metaverse.

              Key Concepts:
              • Game Assets
                - In-game items
                - Characters/Avatars
                - Land/Property
                - Consumables

              • Asset Properties
                - Transferability
                - Interoperability
                - Upgradability
                - Composability
            `
          },
          {
            id: 'game-mechanics',
            title: 'Game Mechanics & Economics',
            content: `
              Implementing game mechanics with NFTs and tokenomics.

              Core Elements:
              • Game Economy
                - Play-to-Earn models
                - Token rewards
                - Asset crafting
                - Trading systems

              • Game Mechanics
                - Asset utilization
                - Progression systems
                - Rarity systems
                - Achievement tracking
            `
          },
          {
            id: 'metaverse-integration',
            title: 'Metaverse Development',
            content: `
              Building and integrating metaverse experiences.

              Key Components:
              • Virtual Worlds
                - Land systems
                - Social features
                - Event spaces
                - Commerce zones

              • User Experience
                - Avatar systems
                - Interaction models
                - Asset visualization
                - Social mechanics
            `
          },
          {
            id: 'technical-implementation',
            title: 'Technical Implementation',
            content: `
              Technical aspects of NFT gaming development.

              Implementation Areas:
              • Game Integration
                - Smart contract integration
                - Asset management
                - Game state handling
                - Cross-game assets

              • Performance Optimization
                - Asset loading
                - State management
                - Network optimization
                - Graphics rendering
            `
          }
        ],
        quiz: [
          {
            question: 'What is Play-to-Earn in NFT gaming?',
            options: [
              'Playing for fun',
              'Earning rewards through gameplay',
              'Buying game items',
              'Watching advertisements'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is asset interoperability?',
            options: [
              'Asset creation',
              'Using assets across different games/platforms',
              'Asset trading',
              'Asset storage'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is a metaverse virtual land?',
            options: [
              'Real estate',
              'Digital space in virtual world',
              'Game level',
              'Website domain'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common NFT gaming feature?',
            options: [
              'Character customization',
              'Asset trading',
              'Centralized control',
              'Player rewards'
            ],
            correctAnswer: 2
          }
        ]
      }
      // More NFT lessons will be added...
    ]
  },
  'security': {
    title: 'Security Specialist Path',
    description: 'Master blockchain security, smart contract auditing, and threat prevention',
    lessons: [
      {
        id: 'smart-contract-security',
        title: 'Smart Contract Security Fundamentals',
        duration: '60 min',
        sections: [
          {
            id: 'security-basics',
            title: 'Security Fundamentals',
            content: `
              Understanding core security concepts in smart contract development.

              Key Concepts:
              • Common Vulnerabilities
                - Reentrancy attacks
                - Integer overflow/underflow
                - Access control issues
                - Logic errors

              • Security Best Practices
                - Check-Effects-Interactions pattern
                - Input validation
                - Access control patterns
                - Emergency mechanisms
            `
          },
          {
            id: 'audit-process',
            title: 'Audit Methodology',
            content: `
              Understanding the smart contract audit process.

              Audit Steps:
              • Code Review
                - Manual analysis
                - Automated tools
                - Test coverage
                - Documentation review

              • Vulnerability Assessment
                - Attack vectors
                - Risk classification
                - Impact analysis
                - Mitigation strategies
            `
          },
          {
            id: 'testing-verification',
            title: 'Testing & Verification',
            content: `
              Methods for testing and verifying smart contract security.

              Testing Approaches:
              • Security Testing
                - Unit testing
                - Integration testing
                - Fuzzing
                - Formal verification

              • Tools & Frameworks
                - Hardhat/Truffle
                - Slither/Mythril
                - Echidna
                - Certora
            `
          }
        ],
        quiz: [
          {
            question: 'What is reentrancy in smart contracts?',
            options: [
              'A feature to restart contracts',
              'An attack where external calls can re-enter the contract',
              'A deployment method',
              'A testing framework'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the Check-Effects-Interactions pattern?',
            options: [
              'A testing method',
              'A deployment sequence',
              'A security pattern to prevent reentrancy',
              'A documentation style'
            ],
            correctAnswer: 2
          }
        ]
      },
      {
        id: 'incident-response',
        title: 'Incident Response & Recovery',
        duration: '70 min',
        sections: [
          {
            id: 'incident-detection',
            title: 'Incident Detection & Analysis',
            content: `
              Understanding and identifying security incidents in blockchain systems.

              Detection Methods:
              • Monitoring Systems
                - Transaction monitoring
                - Smart contract events
                - Price movements
                - Volume anomalies

              • Analysis Tools
                - Block explorers
                - Graph analysis
                - Trace analysis
                - Log analysis
            `
          },
          {
            id: 'response-planning',
            title: 'Response Planning & Execution',
            content: `
              Developing and executing incident response plans.

              Response Elements:
              • Emergency Procedures
                - Circuit breakers
                - Function pausing
                - Emergency shutdown
                - Access controls

              • Communication Plan
                - Stakeholder notification
                - Public disclosure
                - User guidance
                - Legal compliance
            `
          },
          {
            id: 'recovery-process',
            title: 'Recovery Process',
            content: `
              Implementing recovery procedures after security incidents.

              Recovery Steps:
              • Technical Recovery
                - Contract upgrades
                - State restoration
                - Fund recovery
                - System hardening

              • Business Recovery
                - User compensation
                - Market stabilization
                - Trust restoration
                - Process improvement
            `
          },
          {
            id: 'post-incident',
            title: 'Post-Incident Analysis',
            content: `
              Learning from incidents to prevent future occurrences.

              Analysis Areas:
              • Root Cause Analysis
                - Attack vector analysis
                - Control failures
                - Process gaps
                - System weaknesses

              • Improvement Planning
                - Security updates
                - Process changes
                - Training needs
                - Monitoring enhancements
            `
          }
        ],
        quiz: [
          {
            question: 'What is the first step in incident response?',
            options: [
              'System shutdown',
              'Incident detection and analysis',
              'Public announcement',
              'Code update'
            ],
            correctAnswer: 1
          },
          {
            question: 'Why are circuit breakers important in incident response?',
            options: [
              'To save energy',
              'To stop malicious activity quickly',
              'To improve performance',
              'To reduce costs'
            ],
            correctAnswer: 1
          },
          {
            question: 'What should be included in a post-incident analysis?',
            options: [
              'Marketing plans',
              'Root cause analysis',
              'New feature development',
              'Team hiring'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a typical recovery step?',
            options: [
              'Contract upgrades',
              'Ignoring the incident',
              'User compensation',
              'System hardening'
            ],
            correctAnswer: 1
          }
        ]
      }
      // More security lessons will be added...
    ]
  },
  'layer2': {
    title: 'Layer 2 Specialist Path',
    description: 'Master Layer 2 scaling solutions, development, and integration',
    lessons: [
      {
        id: 'l2-fundamentals',
        title: 'Layer 2 Fundamentals',
        duration: '55 min',
        sections: [
          {
            id: 'scaling-basics',
            title: 'Scaling Solutions Overview',
            content: `
              Understanding different approaches to blockchain scaling.

              Scaling Types:
              • Layer 2 Solutions
                - Rollups (Optimistic & ZK)
                - State Channels
                - Plasma
                - Sidechains

              • Key Concepts
                - Data availability
                - Settlement security
                - Finality
                - Bridging mechanisms
            `
          },
          {
            id: 'rollup-mechanics',
            title: 'Rollup Technology',
            content: `
              Deep dive into rollup technology and mechanisms.

              Rollup Types:
              • Optimistic Rollups
                - Fraud proofs
                - Challenge period
                - Exit mechanisms
                - Transaction batching

              • ZK Rollups
                - Zero-knowledge proofs
                - Validity proofs
                - Circuit constraints
                - Prover/Verifier model
            `
          },
          {
            id: 'architecture',
            title: 'Layer 2 Architecture',
            content: `
              Understanding Layer 2 system architecture.

              Key Components:
              • Infrastructure
                - Sequencers
                - Validators
                - Bridge contracts
                - State management

              • Network Design
                - Consensus mechanisms
                - Data availability solutions
                - Security models
                - Scalability trade-offs
            `
          }
        ],
        quiz: [
          {
            question: 'What is the main purpose of Layer 2 solutions?',
            options: [
              'To replace Layer 1',
              'To improve scalability while maintaining security',
              'To create new tokens',
              'To reduce token supply'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is the key difference between Optimistic and ZK Rollups?',
            options: [
              'Transaction speed',
              'How they prove transaction validity',
              'Token types',
              'Network size'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is a fraud proof in Optimistic Rollups?',
            options: [
              'A type of token',
              'A mechanism to prove invalid transactions',
              'A network fee',
              'A marketing term'
            ],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'l2-development',
        title: 'Layer 2 Development',
        duration: '65 min',
        sections: [
          {
            id: 'development-basics',
            title: 'L2 Development Fundamentals',
            content: `
              Understanding the basics of Layer 2 development.

              Core Concepts:
              • Development Environment
                - L2 testnet setup
                - Development tools
                - SDK integration
                - Testing frameworks

              • Contract Deployment
                - L2-specific considerations
                - Gas optimization
                - Contract verification
                - Cross-layer interactions
            `
          },
          {
            id: 'bridge-development',
            title: 'Bridge Development',
            content: `
              Building and integrating Layer 2 bridges.

              Key Components:
              • Bridge Architecture
                - Message passing
                - Asset bridging
                - State verification
                - Security measures

              • Implementation
                - Bridge contracts
                - Event handling
                - Error recovery
                - Monitoring systems
            `
          },
          {
            id: 'optimizations',
            title: 'L2 Optimizations',
            content: `
              Optimizing applications for Layer 2.

              Optimization Areas:
              • Gas Optimization
                - Calldata optimization
                - Storage patterns
                - Batch processing
                - State compression

              • Performance
                - Transaction ordering
                - State access patterns
                - Proof generation
                - Data availability
            `
          },
          {
            id: 'integration',
            title: 'dApp Integration',
            content: `
              Integrating existing dApps with Layer 2.

              Integration Aspects:
              • Frontend Integration
                - Wallet connection
                - Network switching
                - Transaction handling
                - User experience

              • Backend Services
                - Indexing services
                - API endpoints
                - Event monitoring
                - State synchronization
            `
          }
        ],
        quiz: [
          {
            question: 'What is calldata optimization in L2?',
            options: [
              'Making calls faster',
              'Reducing data size for L1 submissions',
              'Improving network speed',
              'Increasing storage'
            ],
            correctAnswer: 1
          },
          {
            question: 'Why is batch processing important in L2?',
            options: [
              'To make code simpler',
              'To reduce L1 gas costs',
              'To increase complexity',
              'To slow transactions'
            ],
            correctAnswer: 1
          },
          {
            question: 'What is state compression?',
            options: [
              'Reducing blockchain size',
              'Making states smaller for efficiency',
              'Compressing files',
              'Network optimization'
            ],
            correctAnswer: 1
          },
          {
            question: 'Which is NOT a common L2 development consideration?',
            options: [
              'Gas optimization',
              'Bridge security',
              'Marketing strategy',
              'State management'
            ],
            correctAnswer: 2
          }
        ]
      }
    ]
  }
} 