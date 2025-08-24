"use client";

import "./LeadForm.css";
import type { UserData } from "../../types/quiz";
import {
  EDUCATION_LEVEL_LABELS,
  FORMATION_AREA_LABELS,
  WORK_SECTOR_LABELS,
  JOB_TITLE_LABELS,
} from "../../types/quiz";
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaBirthdayCake,
  FaGraduationCap,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

interface LeadFormProps {
  userData: UserData;
  onUserDataChange: (userData: UserData) => void;
  onSubmit: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({
  userData,
  onUserDataChange,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      userData.name &&
      userData.email &&
      userData.birthDate &&
      userData.educationLevel &&
      userData.formationArea &&
      userData.workSector &&
      userData.jobTitle
    ) {
      onSubmit();
    }
  };

  const handleInputChange = (field: keyof UserData, value: string) => {
    if (field === "birthDate") {
      onUserDataChange({ ...userData, [field]: new Date(value) });
    } else if (
      field === "educationLevel" ||
      field === "formationArea" ||
      field === "workSector" ||
      field === "jobTitle"
    ) {
      // Garantir que os valores dos selects sejam strings válidas
      const validValue = value || "";
      onUserDataChange({ ...userData, [field]: validValue });
    } else {
      onUserDataChange({ ...userData, [field]: value });
    }
  };

  return (
    <div className="lead-form-container">
      <div className="lead-form-card">
        <div className="lead-form-header">
          <h2 className="lead-form-title">Descubra seu resultados </h2>
          <p className="lead-form-subtitle">
            Preencha o formulário abaixo para realizar o teste edescobrir seu
            potencial
          </p>
        </div>
        <div className="lead-form-content">
          <form onSubmit={handleSubmit} className="lead-form">
            <div className="lead-form-field-group">
              <label htmlFor="name" className="lead-form-label">
                <FaUser className="lead-form-icon" />
                Nome Completo*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Digite seu nome completo"
                className="lead-form-input"
                value={userData.name || ""}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div className="lead-form-field-group">
              <label htmlFor="email" className="lead-form-label">
                <FaEnvelope className="lead-form-icon" />
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Digite seu email"
                className="lead-form-input"
                value={userData.email || ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="lead-form-field-group">
              <label htmlFor="birthDate" className="lead-form-label">
                <FaBirthdayCake className="lead-form-icon" />
                Data de Nascimento*
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                required
                className="lead-form-input"
                value={
                  userData.birthDate instanceof Date
                    ? userData.birthDate.toISOString().split("T")[0]
                    : ""
                }
                onChange={(e) => handleInputChange("birthDate", e.target.value)}
              />
            </div>
            <div className="lead-form-field-group">
              <label htmlFor="educationLevel" className="lead-form-label">
                <FaGraduationCap className="lead-form-icon" />
                Nível de Educação*
              </label>
              <select
                id="educationLevel"
                name="educationLevel"
                required
                className="lead-form-select"
                value={userData.educationLevel || ""}
                data-has-value={!!userData.educationLevel}
                onChange={(e) =>
                  handleInputChange("educationLevel", e.target.value)
                }
              >
                <option value="" disabled>
                  Selecione seu nível de educação
                </option>
                {Object.entries(EDUCATION_LEVEL_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="lead-form-field-group">
              <label htmlFor="formationArea" className="lead-form-label">
                <FaBriefcase className="lead-form-icon" />
                Área de Formação*
              </label>
              <select
                id="formationArea"
                name="formationArea"
                required
                className="lead-form-select"
                value={userData.formationArea || ""}
                data-has-value={!!userData.formationArea}
                onChange={(e) =>
                  handleInputChange("formationArea", e.target.value)
                }
              >
                <option value="" disabled>
                  Selecione sua área de formação
                </option>
                {Object.entries(FORMATION_AREA_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="lead-form-field-group">
              <label htmlFor="workSector" className="lead-form-label">
                <FaBriefcase className="lead-form-icon" />
                Setor de Atuação*
              </label>
              <select
                id="workSector"
                name="workSector"
                required
                className="lead-form-select"
                value={userData.workSector || ""}
                data-has-value={!!userData.workSector}
                onChange={(e) =>
                  handleInputChange("workSector", e.target.value)
                }
              >
                <option value="" disabled>
                  Selecione seu setor de atuação
                </option>
                {Object.entries(WORK_SECTOR_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="lead-form-field-group">
              <label htmlFor="jobTitle" className="lead-form-label">
                <FaBriefcase className="lead-form-icon" />
                Cargo*
              </label>
              <select
                id="jobTitle"
                name="jobTitle"
                required
                className="lead-form-select"
                value={userData.jobTitle || ""}
                data-has-value={!!userData.jobTitle}
                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              >
                <option value="" disabled>
                  Selecione seu cargo
                </option>
                {Object.entries(JOB_TITLE_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="lead-form-submit-button">
              Iniciar Quiz
              <FaArrowRight className="lead-form-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
