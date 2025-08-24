export interface QuizOption {
  text: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface QuizResult {
  range: [number, number];
  description: string;
}

export interface QuizData {
  questions: QuizQuestion[];
  results: {
    low: QuizResult;
    medium: QuizResult;
    high: QuizResult;
  };
}

export interface UserData {
  name: string;
  email: string;
  birthDate: Date;
  educationLevel: EducationLevel;
  formationArea: FormationArea;
  workSector: WorkSector;
  jobTitle: JobTitle;
}

export type EducationLevel =
  | "fundamental"
  | "medio"
  | "superior"
  | "posGraduacao";

export type FormationArea =
  | "medicinaVeterinaria"
  | "zootecnia"
  | "agronomia"
  | "biologia"
  | "biomedicina"
  | "engenhariaAlimentos"
  | "engenhariaProducao"
  | "tecnologiaInformacao"
  | "outros";

export type WorkSector =
  | "industriaAlimentosAvesSuinos"
  | "industriaAlimentosBovinosCarne"
  | "industriaAlimentosLaticinios"
  | "industriaAlimentosPescados"
  | "industriaAlimentosOutros"
  | "industriaMaterialGeneticoAnimal"
  | "fundosAssociacoes"
  | "insumosAgropecuariosVeterinarios"
  | "insumosAgropecuariosAlimentacao"
  | "ensinoPesquisaExtensao"
  | "servicoVeterinarioEstadual"
  | "servicoVeterinarioFederal"
  | "outros";

export type JobTitle =
  | "diretor"
  | "gerente"
  | "analista"
  | "coordenador"
  | "supervisor"
  | "sanitaristaExtensionista"
  | "profissionalLiberal"
  | "professorNivelSuperior"
  | "estudanteGraduacao"
  | "estudantePosGraduacao"
  | "fiscalEstadualAgropecuario"
  | "fiscalFederalAgropecuario"
  | "outro";

// Tipo para as opções de resposta padrão do quiz
export type StandardQuizOption =
  | "jamais"
  | "raramente"
  | "asVezes"
  | "frequentemente"
  | "muitoFrequentemente";

// Constantes para mapear os tipos para texto legível
export const EDUCATION_LEVEL_LABELS: Record<EducationLevel, string> = {
  fundamental: "Fundamental",
  medio: "Médio",
  superior: "Superior (bacharelado, licenciatura, tecnólogo)",
  posGraduacao: "Pós-graduação (especialização, MBA, mestrado, doutorado)",
};

export const FORMATION_AREA_LABELS: Record<FormationArea, string> = {
  medicinaVeterinaria: "Medicina veterinária",
  zootecnia: "Zootecnia",
  agronomia: "Agronomia",
  biologia: "Biologia",
  biomedicina: "Biomedicina",
  engenhariaAlimentos: "Engenharia de alimentos",
  engenhariaProducao: "Engenharia de produção",
  tecnologiaInformacao: "Tecnologia da informação",
  outros: "Outros",
};

export const WORK_SECTOR_LABELS: Record<WorkSector, string> = {
  industriaAlimentosAvesSuinos: "Indústria de alimentos de aves e/ou suínos",
  industriaAlimentosBovinosCarne: "Indústria de alimentos de bovinos de carne",
  industriaAlimentosLaticinios: "Indústria de alimentos laticínios",
  industriaAlimentosPescados: "Indústria de alimentos pescados",
  industriaAlimentosOutros: "Indústria de alimentos outros",
  industriaMaterialGeneticoAnimal: "Indústria de material genético animal",
  fundosAssociacoes: "Fundos e associações",
  insumosAgropecuariosVeterinarios:
    "Insumos agropecuários (produtos veterinários)",
  insumosAgropecuariosAlimentacao: "Insumos agropecuários (alimentação animal)",
  ensinoPesquisaExtensao: "Ensino, pesquisa e extensão",
  servicoVeterinarioEstadual: "Serviço veterinário estadual",
  servicoVeterinarioFederal: "Serviço veterinário federal",
  outros: "Outros",
};

export const JOB_TITLE_LABELS: Record<JobTitle, string> = {
  diretor: "Diretor",
  gerente: "Gerente",
  analista: "Analista",
  coordenador: "Coordenador",
  supervisor: "Supervisor",
  sanitaristaExtensionista: "Sanitarista/extensionista",
  profissionalLiberal: "Profissional liberal",
  professorNivelSuperior: "Professor de nível superior",
  estudanteGraduacao: "Estudante de graduação",
  estudantePosGraduacao: "Estudante de pós-graduação",
  fiscalEstadualAgropecuario: "Fiscal Estadual Agropecuário",
  fiscalFederalAgropecuario: "Fiscal Federal Agropecuário",
  outro: "Outro",
};

// Constantes para mapear os tipos para texto legível
export const STANDARD_OPTION_LABELS: Record<StandardQuizOption, string> = {
  jamais: "Jamais",
  raramente: "Raramente",
  asVezes: "As vezes",
  frequentemente: "Frequentemente",
  muitoFrequentemente: "Muito frequentemente",
};

// Constantes para os scores de cada opção
export const STANDARD_OPTION_SCORES: Record<StandardQuizOption, number> = {
  jamais: 1,
  raramente: 2,
  asVezes: 3,
  frequentemente: 4,
  muitoFrequentemente: 5,
};

// Função helper para gerar opções com pontuação crescente (1-5)
export function createStandardOptions(): QuizOption[] {
  return [
    {
      text: STANDARD_OPTION_LABELS.jamais,
      score: 1,
    },
    {
      text: STANDARD_OPTION_LABELS.raramente,
      score: 2,
    },
    {
      text: STANDARD_OPTION_LABELS.asVezes,
      score: 3,
    },
    {
      text: STANDARD_OPTION_LABELS.frequentemente,
      score: 4,
    },
    {
      text: STANDARD_OPTION_LABELS.muitoFrequentemente,
      score: 5,
    },
  ];
}

// Função helper para gerar opções com pontuação decrescente (5-1)
export function createReverseOptions(): QuizOption[] {
  return [
    {
      text: STANDARD_OPTION_LABELS.jamais,
      score: 5,
    },
    {
      text: STANDARD_OPTION_LABELS.raramente,
      score: 4,
    },
    {
      text: STANDARD_OPTION_LABELS.asVezes,
      score: 3,
    },
    {
      text: STANDARD_OPTION_LABELS.frequentemente,
      score: 2,
    },
    {
      text: STANDARD_OPTION_LABELS.muitoFrequentemente,
      score: 1,
    },
  ];
}

export type Step = "form" | "instructions" | "quiz" | "result";
