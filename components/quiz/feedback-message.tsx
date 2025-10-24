"use client"

interface FeedbackMessageProps {
  isCorrect: boolean
  correctAnswerText: string
}

export function FeedbackMessage({ isCorrect, correctAnswerText }: FeedbackMessageProps) {
  return (
    <div
      className={`p-4 rounded-lg mb-6 ${
        isCorrect ? "bg-green-100 border-2 border-green-500" : "bg-red-100 border-2 border-red-500"
      }`}
    >
      <p className={`font-semibold ${isCorrect ? "text-green-700" : "text-red-700"}`}>
        {isCorrect ? "✓ Correct Answer" : "✗ Wrong Answer"}
      </p>
      <p className={isCorrect ? "text-green-700" : "text-red-700"}>
        {isCorrect ? correctAnswerText : `Correct answer is: ${correctAnswerText}`}
      </p>
    </div>
  )
}
