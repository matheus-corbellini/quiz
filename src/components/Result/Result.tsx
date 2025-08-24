"use client";

import type React from "react";
import type { UserData, QuizResult } from "../../types/quiz";
import { FaEnvelope, FaTrophy, FaArrowRight } from "react-icons/fa";
import "./Result.css";

interface ResultProps {
  userData: UserData;
  totalScore: number;
  result: QuizResult;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({
  userData,
  totalScore,
  result,
  onRestart,
}) => {
  const getScoreEmoji = (score: number) => {
    if (score >= 67) return "🎉";
    if (score >= 43) return "👍";
    return "💪";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 67) return "Excelente trabalho!";
    if (score >= 43) return "Bom trabalho!";
    return "Continue praticando!";
  };

  return (
    <div className="result-container">
      <div className="result-card">
        <div className="result-header">
          <div className="result-celebration">
            <div className="result-icon-container">
              <FaTrophy className="result-icon" />
            </div>
            <div className="result-score-badge">
              <span className="result-score-emoji">
                {getScoreEmoji(totalScore)}
              </span>
              <span className="result-score-number">{totalScore}</span>
              <span className="result-score-label">pontos</span>
            </div>
          </div>

          <h1 className="result-title">Quiz Concluído!</h1>
          <p className="result-score-message">{getScoreMessage(totalScore)}</p>
          <p className="result-subtitle">
            Olá <span className="result-user-name">{userData.name}</span>, aqui
            está seu resultado personalizado
          </p>
        </div>

        <div className="result-content">
          <div className="result-analysis-section">
            <h2 className="result-analysis-title">
              Análise do Seu Processo Decisório
            </h2>
            <div className="result-description-card">
              <p className="result-result-description">{result.description}</p>
            </div>
          </div>

          <div className="result-email-section">
            <div className="result-email-header">
              <FaEnvelope className="result-email-icon" />
              <span className="result-email-label">
                Resultado enviado para:
              </span>
            </div>
            <p className="result-email-text">{userData.email}</p>
          </div>

          <button onClick={onRestart} className="result-restart-button">
            <span>Fazer Novo Quiz</span>
            <FaArrowRight className="result-restart-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
