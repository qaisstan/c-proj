'use client'
import { useState } from 'react'
import { courseContent } from '@/app/lib/data/courseContent'
import Link from 'next/link'

export default function LessonPage({ params }) {
  const [activeSection, setActiveSection] = useState('intro')
  const [showQuiz, setShowQuiz] = useState(false)

  const pathContent = courseContent[params.path]
  if (!pathContent) return <div>Path not found</div>

  const lesson = pathContent.lessons.find(l => l.id === params.lesson)
  if (!lesson) return <div>Lesson not found</div>

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Navigation */}
      <Link href={`/learn/${params.path}`} className="text-blue-600 hover:underline mb-4 block">
        ← Back to {pathContent.title}
      </Link>

      {/* Lesson Content */}
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <nav className="space-y-2">
              {lesson.sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeSection === section.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            {lesson.sections.find(s => s.id === activeSection)?.content}
          </div>
        </div>
      </div>
    </div>
  )
} 