import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 6,
    // Not required for social login
    required: function() {
      return !this.socialProvider
    }
  },
  socialProvider: {
    type: String,
    enum: ['google', 'facebook', 'github', null],
    default: null,
    required: false
  },
  socialId: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// Only hash password for non-social users
userSchema.pre('save', async function(next) {
  if (!this.isModified('password') || this.socialProvider) return next()
  
  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.comparePassword = async function(candidatePassword) {
  if (this.socialProvider) return false
  return bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User 