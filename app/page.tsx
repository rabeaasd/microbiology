"use client"

import { useState, useEffect } from "react"
import { QuizHeader } from "@/components/quiz/quiz-header"
import { QuestionCard } from "@/components/quiz/question-card"
import { medicalTerminologyComprehensive } from "@/lib/quiz-data"

export default function Home() {
  const questions = Object.entries(medicalTerminologyComprehensive)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (currentIndex === null) {
      const randomIndex = Math.floor(Math.random() * questions.length)
      setCurrentIndex(randomIndex)
    }
  }, [])

  if (currentIndex === null) {
    return null // Prevent rendering until random index is set
  }

  const currentQuestion = questions[currentIndex]
  const [, questionData] = currentQuestion
  const isAnswered = selectedAnswer !== null
  const isCorrect = selectedAnswer === questionData.answer

  const handleSelectAnswer = (option: string) => {
    if (!showFeedback) {
      setSelectedAnswer(option)
    }
  }

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowFeedback(true)
      if (selectedAnswer === questionData.answer) {
        setScore(score + 1)
      }
    }
  }

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setCurrentIndex(randomIndex)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <QuizHeader score={score} />
        <QuestionCard
          question={questionData.question}
          options={questionData.options}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          correctAnswer={questionData.answer}
          isCorrect={isCorrect}
          onSelectAnswer={handleSelectAnswer}
          onSubmit={handleSubmit}
          onNext={handleNext}
          isAnswered={isAnswered}
        />
      </div>
    </main>
  )
}
