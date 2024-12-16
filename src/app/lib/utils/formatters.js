export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

export const formatPercentage = (number) => {
  return `${number.toFixed(2)}%`
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

export const formatError = (error) => {
  if (typeof error === 'string') return error
  if (error.message) return error.message
  return 'An unexpected error occurred'
}

export const formatAuthResponse = (data) => {
  if (!data.user || !data.token) {
    throw new Error('Invalid authentication response')
  }
  return {
    user: {
      id: data.user.id,
      name: data.user.name,
      email: data.user.email,
    },
    token: data.token,
  }
} 