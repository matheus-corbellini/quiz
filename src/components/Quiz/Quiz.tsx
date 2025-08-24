"use client";

import "./Quiz.css";
import type { QuizQuestion } from "../../types/quiz";
import { calculateProgress } from "../../utlis/quiz-utils";
import React from "react";

interface QuizProps {
  questions: QuizQuestion[];
  currentQuestion: number;
  onAnswer: (score: string) => void;
}

const Quiz: React.FC<QuizProps> = ({
  questions,
  currentQuestion,
  onAnswer,
}) => {
  const question = questions[currentQuestion];
  const progress = calculateProgress(currentQuestion, questions.length);

  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        <div className="quiz-progress-section">
          <div className="quiz-progress-header">
            <h1 className="quiz-progress-title">
              Pergunta {currentQuestion + 1} de {questions.length}
            </h1>
            <span className="quiz-progress-text">
              {Math.round(progress)}% concluído
            </span>
          </div>
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="quiz-question-card">
          <div className="quiz-question-header">
            <h2 className="quiz-question-title">{question.question}</h2>
            <div className="quiz-question-content">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className="quiz-option-button"
                  onClick={() => onAnswer(option.score.toString())}
                >
                  <div className="quiz-option-content">
                    <span className="quiz-option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="quiz-option-text">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
