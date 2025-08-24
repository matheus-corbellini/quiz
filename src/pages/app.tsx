"use client";

import { useState } from "react";
import type {
  Step,
  UserData,
  EducationLevel,
  FormationArea,
  WorkSector,
  JobTitle,
} from "../types/quiz";
import { QUIZ_DATA } from "../data/quiz-data";
import { getQuizResult } from "../utlis/quiz-utils";
import LeadForm from "../components/LeadForm/LeadForm";
import Instructions from "../components/Instructions/Instructions";
import Quiz from "../components/Quiz/Quiz";
import Result from "../components/Result/Result";

export default function QuizApp() {
  const [step, setStep] = useState<Step>("form");
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    birthDate: new Date(),
    educationLevel: "" as EducationLevel,
    formationArea: "" as FormationArea,
    workSector: "" as WorkSector,
    jobTitle: "" as JobTitle,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);

  const handleFormSubmit = () => {
    setStep("instructions");
  };

  const handleStartQuiz = () => {
    setStep("quiz");
  };

  const handleAnswer = (scoreString: string) => {
    const score = parseInt(scoreString, 10);
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    setTotalScore(totalScore + score);

    if (currentQuestion < QUIZ_DATA.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("result");
    }
  };

  const handleRestart = () => {
    setStep("form");
    setCurrentQuestion(0);
    setAnswers([]);
    setTotalScore(0);
    setUserData({
      name: "",
      email: "",
      birthDate: new Date(),
      educationLevel: "" as EducationLevel,
      formationArea: "" as FormationArea,
      workSector: "" as WorkSector,
      jobTitle: "" as JobTitle,
    });
  };

  const result = getQuizResult(totalScore, QUIZ_DATA);

  if (step === "form") {
    return (
      <LeadForm
        userData={userData}
        onUserDataChange={setUserData}
        onSubmit={handleFormSubmit}
      />
    );
  }

  if (step === "instructions") {
    return <Instructions onStart={handleStartQuiz} />;
  }

  if (step === "quiz") {
    return (
      <Quiz
        questions={QUIZ_DATA.questions}
        currentQuestion={currentQuestion}
        onAnswer={handleAnswer}
      />
    );
  }

  if (step === "result") {
    return (
      <Result
        userData={userData}
        totalScore={totalScore}
        result={result}
        onRestart={handleRestart}
      />
    );
  }

  return null;
}
