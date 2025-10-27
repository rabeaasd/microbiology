"use client"

interface QuizHeaderProps {
  score: number
}

export function QuizHeader({ score }: QuizHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Microbiology Quiz</h1>
      <p className="text-gray-600">Test your knowledge of microbiology</p>
      <div className="flex justify-end text-sm text-gray-600 mt-6 mb-2">
        <span>Score: {score}</span>
      </div>
    </div>
  )
}
