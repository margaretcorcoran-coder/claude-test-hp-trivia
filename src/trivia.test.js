const { getQuestions, getQuestionById, checkAnswer, scoreQuiz } = require("./trivia");

describe("getQuestions", () => {
  it("returns a non-empty list of questions", () => {
    const questions = getQuestions();
    expect(Array.isArray(questions)).toBe(true);
    expect(questions.length).toBeGreaterThan(0);
  });

  it("each question has an id, question text, choices, and an answer", () => {
    getQuestions().forEach((q) => {
      expect(q).toHaveProperty("id");
      expect(q).toHaveProperty("question");
      expect(Array.isArray(q.choices)).toBe(true);
      expect(q.choices).toContain(q.answer);
    });
  });
});

describe("getQuestionById", () => {
  it("finds an existing question", () => {
    expect(getQuestionById(1).question).toMatch(/owl/i);
  });

  it("returns undefined for an unknown id", () => {
    expect(getQuestionById(999)).toBeUndefined();
  });
});

describe("checkAnswer", () => {
  it("returns true for the correct answer", () => {
    expect(checkAnswer(1, "Hedwig")).toBe(true);
  });

  it("returns false for an incorrect answer", () => {
    expect(checkAnswer(1, "Errol")).toBe(false);
  });

  it("throws for an unknown question id", () => {
    expect(() => checkAnswer(999, "anything")).toThrow();
  });
});

describe("scoreQuiz", () => {
  it("tallies correct answers across the quiz", () => {
    const score = scoreQuiz({
      1: "Hedwig",
      2: "Slytherin",
      3: "Chaser",
      4: "Phoenix feather",
    });
    expect(score).toBe(3);
  });

  it("returns 0 when nothing is correct", () => {
    const score = scoreQuiz({ 1: "wrong" });
    expect(score).toBe(0);
  });
});
