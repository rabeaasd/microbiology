"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnswerOption } from "./answer-option"
import { FeedbackMessage } from "./feedback-message"

interface QuestionCardProps {
  question: string
  options: Record<string, string>
  selectedAnswer: string | null
  showFeedback: boolean
  correctAnswer: string
  isCorrect: boolean
  onSelectAnswer: (option: string) => void
  onSubmit: () => void
  onNext: () => void
  isAnswered: boolean
}

export function QuestionCard({
  question,
  options,
  selectedAnswer,
  showFeedback,
  correctAnswer,
  isCorrect,
  onSelectAnswer,
  onSubmit,
  onNext,
  isAnswered,
}: QuestionCardProps) {
  return (
    <Card className="p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question}</h2>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {Object.entries(options).map(([key, value]) => (
          <AnswerOption
            key={key}
            optionKey={key}
            value={value}
            isSelected={selectedAnswer === key}
            isCorrect={isCorrect}
            showFeedback={showFeedback}
            correctAnswer={correctAnswer}
            onSelect={() => onSelectAnswer(key)}
          />
        ))}
      </div>

      {/* Feedback */}
      {showFeedback && <FeedbackMessage isCorrect={isCorrect} correctAnswerText={options[correctAnswer]} />}

      {/* Buttons */}
      <div className="flex gap-4">
        {!showFeedback ? (
          <Button
            onClick={onSubmit}
            disabled={!isAnswered}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Submit Answer
          </Button>
        ) : (
          <Button onClick={onNext} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
            Next Question
          </Button>
        )}
      </div>
    </Card>
  )
}
