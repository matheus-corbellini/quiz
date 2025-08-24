"use client";

import "./Instructions.css";
import React from "react";
import { FaInfoCircle, FaArrowRight } from "react-icons/fa";

interface InstructionsProps {
  onStart: () => void;
}

const Instructions: React.FC<InstructionsProps> = ({ onStart }) => {
  return (
    <div className="instructions-container">
      <div className="instructions-card">
        <div className="instructions-header">
          <FaInfoCircle className="instructions-icon" />
          <h2 className="instructions-title">Instruções</h2>
        </div>
        <div className="instructions-content">
          <div className="instructions-text">
            <p className="instructions-paragraph">
              Para cada afirmativa, escolha uma alternativa da caixa de seleção
              que melhor descreve você.
            </p>
            <p className="instructions-paragraph instructions-emphasis">
              <strong>
                Por favor, responda as perguntas como você é de verdade
              </strong>{" "}
              (em vez de responder como você deveria ser), e não se preocupe se
              algumas perguntas parecerem dar pontos na "direção errada."
            </p>
          </div>
          <button onClick={onStart} className="instructions-start-button">
            <span>Iniciar Quiz</span>
            <FaArrowRight className="instructions-button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
