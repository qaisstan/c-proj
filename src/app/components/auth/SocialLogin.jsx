'use client'
import Image from 'next/image'

export default function SocialLogin() {
  const handleSocialLogin = (provider) => {
    // For now, just show an alert
    alert(`${provider} login will be available soon!`)
  }

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => handleSocialLogin('Google')}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors"
          title="Coming soon"
        >
          <span className="text-sm">Google</span>
        </button>

        <button
          onClick={() => handleSocialLogin('Facebook')}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors"
          title="Coming soon"
        >
          <span className="text-sm">Facebook</span>
        </button>

        <button
          onClick={() => handleSocialLogin('GitHub')}
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors"
          title="Coming soon"
        >
          <span className="text-sm">GitHub</span>
        </button>
      </div>
    </div>
  )
} 