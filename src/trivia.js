const questions = [
  {
    id: 1,
    question: "What is the name of Harry Potter's owl?",
    choices: ["Hedwig", "Errol", "Pigwidgeon", "Fawkes"],
    answer: "Hedwig",
  },
  {
    id: 2,
    question: "What house does the Sorting Hat almost place Harry in?",
    choices: ["Ravenclaw", "Hufflepuff", "Slytherin", "Gryffindor"],
    answer: "Slytherin",
  },
  {
    id: 3,
    question: "What position does Harry play on the Gryffindor Quidditch team?",
    choices: ["Keeper", "Chaser", "Seeker", "Beater"],
    answer: "Seeker",
  },
  {
    id: 4,
    question: "What is the core of Harry's wand?",
    choices: ["Unicorn hair", "Dragon heartstring", "Phoenix feather", "Veela hair"],
    answer: "Phoenix feather",
  },
];

function getQuestions() {
  return questions;
}

function getQuestionById(id) {
  return questions.find((q) => q.id === id);
}

function checkAnswer(id, submittedAnswer) {
  const question = getQuestionById(id);
  if (!question) {
    throw new Error(`No question found with id ${id}`);
  }
  return question.answer === submittedAnswer;
}

function scoreQuiz(answers) {
  return Object.entries(answers).reduce((score, [id, submitted]) => {
    return checkAnswer(Number(id), submitted) ? score + 1 : score;
  }, 0);
}

module.exports = { getQuestions, getQuestionById, checkAnswer, scoreQuiz };
