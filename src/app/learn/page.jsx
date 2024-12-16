'use client'
import { courseContent } from '@/app/lib/data/courseContent'
import Link from 'next/link'

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Learning Paths</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(courseContent).map(([key, path]) => (
          <Link key={key} href={`/learn/${key}`}>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">{path.title}</h2>
              <p className="text-gray-600">{path.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 