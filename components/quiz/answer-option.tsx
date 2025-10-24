"use client"

interface AnswerOptionProps {
  optionKey: string
  value: string
  isSelected: boolean
  isCorrect: boolean
  showFeedback: boolean
  correctAnswer: string
  onSelect: () => void
}

export function AnswerOption({
  optionKey,
  value,
  isSelected,
  isCorrect,
  showFeedback,
  correctAnswer,
  onSelect,
}: AnswerOptionProps) {
  const getButtonStyles = () => {
    if (isSelected) {
      if (isCorrect && showFeedback) {
        return "border-green-500 bg-green-50"
      }
      if (!isCorrect && showFeedback) {
        return "border-red-500 bg-red-50"
      }
      return "border-indigo-500 bg-indigo-50"
    }

    if (showFeedback && optionKey === correctAnswer) {
      return "border-green-500 bg-green-50"
    }

    return "border-gray-300 bg-white hover:border-indigo-400"
  }

  return (
    <button
      onClick={onSelect}
      disabled={showFeedback}
      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${getButtonStyles()} ${
        showFeedback ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <span className="font-semibold text-gray-700">{optionKey}.</span> {value}
    </button>
  )
}
