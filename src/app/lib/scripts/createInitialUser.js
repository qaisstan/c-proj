import connectDB from '../db/mongodb'
import User from '@/app/models/User'

async function createInitialUser() {
  try {
    await connectDB()

    // Check if user exists
    const existingUser = await User.findOne({ email: 'admin@example.com' })
    if (existingUser) {
      console.log('Initial user already exists')
      return
    }

    // Create initial user
    const user = await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'password123'  // This will be hashed by the User model
    })

    console.log('Initial user created:', user)
  } catch (error) {
    console.error('Error creating initial user:', error)
  }
}

// Run the function
createInitialUser() 