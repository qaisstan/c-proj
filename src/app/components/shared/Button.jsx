const Button = ({ children, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  }

  return (
    <button 
      className={`px-6 py-2 rounded-lg transition-colors ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 