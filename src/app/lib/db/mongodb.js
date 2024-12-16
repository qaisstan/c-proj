import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  try {
    if (cached.conn) {
      console.log('Using cached connection')
      return cached.conn
    }

    if (!cached.promise) {
      console.log('Creating new connection')
      cached.promise = mongoose.connect(MONGODB_URI, {
        bufferCommands: false,
      })
    }
    cached.conn = await cached.promise
    console.log('Connected to MongoDB')
    return cached.conn
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

export default connectDB 