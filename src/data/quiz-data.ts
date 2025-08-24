import type { QuizData } from "../types/quiz";
import { createStandardOptions, createReverseOptions } from "../types/quiz";

export const QUIZ_DATA: QuizData = {
  questions: [
    {
      id: 1,
      question:
        "Avalio os riscos associados a cada alternativa antes de tomar uma decisão.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 2,
      question:
        "Depois que eu tomo uma decisão, ela é definitiva - porque sei que meu processo é sólido.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 3,
      question:
        "Tento determinar a verdadeira questão antes de iniciar um processo decisório",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 4,
      question:
        "Eu me baseio em minha própria experiência para encontrar soluções potenciais para um problema",
      options: createReverseOptions(), // D - decrescente (5-1)
    },
    {
      id: 5,
      question:
        "Costumo ter um forte 'impulso instintivo' acerca dos problemas, e me baseio nele para tomar uma decisão.",
      options: createReverseOptions(), // D - decrescente (5-1)
    },
    {
      id: 6,
      question:
        "Às vezes fico surpreso pelas consequências práticas de minhas decisões.",
      options: createReverseOptions(), // D - decrescente (5-1)
    },
    {
      id: 7,
      question:
        "Utilizo um processo bem definido para estruturar minhas decisões",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 8,
      question:
        "Acredito que envolver muitas partes interessadas para gerar soluções pode deixar o processo mais complicado do que ele precisa ser.",
      options: createReverseOptions(), // D - decrescente (5-1)
    },
    {
      id: 9,
      question:
        "Quando tenho dúvidas acerca da minha decisão, retorno e confiro novamente as minhas pressuposições e meu processo.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 10,
      question:
        "Levo o tempo que for preciso para escolher o melhor instrumento decisório para cada decisão específica.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 11,
      question:
        "Levo em consideração uma variedade de soluções potenciais antes de tomar minha decisão.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 12,
      question:
        "Antes de comunicar a minha decisão, crio um plano de implementação.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 13,
      question:
        "Num processo decisório em grupo, costumo apoiar as propostas dos meus amigos e tento encontrar maneiras de fazê-las funcionar.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 14,
      question:
        "Quando comunico minha decisão, incluo minha linha de raciocínio e minha justificativa",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 15,
      question:
        "Algumas das decisões que escolhi se mostraram muito mais difíceis de implementar do que eu esperava.",
      options: createReverseOptions(), // D - decrescente (5-1)
    },
    {
      id: 16,
      question:
        "Prefiro tomar decisões por conta própria, e só então deixar outras pessoas saberem o que eu decidi.",
      options: createReverseOptions(), // D - decrescente (5-1)
    },
    {
      id: 17,
      question:
        "Determino os fatores mais importantes para a decisão, e então uso estes fatores para avaliar minhas escolhas.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
    {
      id: 18,
      question:
        "Enfatizo o meu nível de confiança a respeito de uma decisão como uma forma de ganhar apoio para os meus planos.",
      options: createStandardOptions(), // C - crescente (1-5)
    },
  ],

  results: {
    low: {
      range: [18, 42],
      description:
        "Seu processo decisório não está completamente maduro. Você não é objetivo o suficiente, e você se baseia demais em sorte, instinto e timing para tomar decisões confiáveis. Comece a aprimorar suas habilidades decisórias concentrando-se mais no processo que leva à decisão, em vez de na decisão em si. Com um processo sólido, você pode encarar qualquer decisão com confiança. Mostraremos como.",
    },
    medium: {
      range: [43, 66],
      description:
        "Seu processo de tomada de decisão é razoável. Você tem uma boa compreensão dos fundamentos, mas agora você precisa aprimorar o seu processo e ser mais proativo. Concentre-se em encontrar inúmeras opções e em descobrir a maior quantidade que conseguir de riscos e consequências. Estabeleça um foco específico nas áreas em que você perdeu pontos e desenvolva um sistema que funcione para você numa ampla variedade de situações.",
    },
    high: {
      range: [67, 90],
      description:
        "Você tem uma excelente abordagem para tomar decisões! Você sabe como preparar o processo e gerar inúmeras soluções potenciais. A partir daí, você analisa as opções cuidadosamente e toma a melhor decisão possível tomando por base aquilo que você conhece. À medida que você for ganhando mais e mais experiência, use essas informações para avaliar suas decisões, e continue a desenvolver seu sucesso no processo decisório. Pense nas áreas em que você perdeu pontos, e decida como você pode incluir essas áreas no seu processo.",
    },
  },
};
