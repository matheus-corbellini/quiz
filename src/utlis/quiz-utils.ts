import type { QuizData } from "../types/quiz";

export const getQuizResult = (totalScore: number, quizData: QuizData) => {
  const { results } = quizData;

  if (
    totalScore >= results.low.range[0] &&
    totalScore <= results.low.range[1]
  ) {
    return results.low;
  } else if (
    totalScore >= results.medium.range[0] &&
    totalScore <= results.medium.range[1]
  ) {
    return results.medium;
  } else {
    return results.high;
  }
};

export const calculateProgress = (
  currentQuestion: number,
  totalQuestions: number
): number => {
  return ((currentQuestion + 1) / totalQuestions) * 100;
};
