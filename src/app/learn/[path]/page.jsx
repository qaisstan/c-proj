'use client'
import { useEffect } from 'react'
import { courseContent } from '@/app/lib/data/courseContent'
import Link from 'next/link'

export default function PathPage({ params }) {
  console.log('Params:', params)
  console.log('Available paths:', Object.keys(courseContent))
  console.log('Requested path content:', courseContent[params.path])

  const pathContent = courseContent[params.path]
  
  if (!pathContent) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-2xl font-bold text-red-600">Path not found</h1>
        <p className="mt-4">The requested learning path "{params.path}" does not exist.</p>
        <Link href="/learn" className="mt-4 text-blue-600 hover:underline">
          ← Back to Learning Paths
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-2">{pathContent.title}</h1>
      <p className="text-gray-600 mb-8">{pathContent.description}</p>

      <div className="space-y-6">
        {pathContent.lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold mb-2">{lesson.title}</h2>
                <p className="text-gray-600 mb-4">Duration: {lesson.duration}</p>
              </div>
              <Link 
                href={`/learn/${params.path}/${lesson.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Start Lesson
              </Link>
            </div>

            <div className="mt-4">
              <h3 className="font-medium mb-2">Topics covered:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {lesson.sections.map((section) => (
                  <li key={section.id}>{section.title}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 