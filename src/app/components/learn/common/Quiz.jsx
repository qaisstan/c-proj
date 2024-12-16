'use client'
import { useState } from 'react'

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return // Prevent changing answer after submission
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    if (!showFeedback) {
      setShowFeedback(true)
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
    } else {
      // Move to next question or complete quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowFeedback(false)
      } else {
        setCompleted(true)
        onComplete && onComplete(score + 1)
      }
    }
  }

  if (completed) {
    const percentage = ((score / questions.length) * 100).toFixed(0)
    return (
      <div className="text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
          <p className="text-xl mb-2">Your Score:</p>
          <div className="text-3xl font-bold text-blue-600">
            {score} / {questions.length} ({percentage}%)
          </div>
        </div>

        <div className="space-y-4">
          {percentage >= 70 ? (
            <>
              <p className="text-green-600 font-medium">Great job! You've passed the quiz!</p>
              <button
                onClick={() => onComplete && onComplete(score)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Continue to Next Lesson
              </button>
            </>
          ) : (
            <>
              <p className="text-yellow-600 font-medium">
                You might want to review the material and try again.
              </p>
              <button
                onClick={() => {
                  setCurrentQuestion(0)
                  setSelectedAnswer(null)
                  setShowFeedback(false)
                  setScore(0)
                  setCompleted(false)
                }}
                className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Try Again
              </button>
            </>
          )}
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div>
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>Score: {score}/{currentQuestion + (showFeedback ? 1 : 0)}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? showFeedback
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {option}
              {showFeedback && selectedAnswer === index && (
                <span className="float-right">
                  {index === question.correctAnswer ? '✅' : '❌'}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        disabled={selectedAnswer === null}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          selectedAnswer === null
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : showFeedback
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
      >
        {showFeedback ? 'Next Question' : 'Check Answer'}
      </button>
    </div>
  )
}

export default Quiz 