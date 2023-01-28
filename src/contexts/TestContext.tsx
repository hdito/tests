import { TestProps } from "@/pages";
import { UserAnswer } from "@/types/userAnswer";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type TestContext = Omit<TestProps, "title"> & {
  progress: number | null;
  answers: UserAnswer[];
  onSelectAnswer: (answerIndex: number, value: number) => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
  onReset: () => void;
};

const TestContext = createContext<TestContext | null>(null);

export const useTestContext = () => useContext(TestContext) as TestContext;

export function TestContextProvider({
  children,
  description,
  questions,
  results,
}: PropsWithChildren<Omit<TestProps, "title">>) {
  const [progress, setProgress] = useState<number | null>(null);
  const [answers, setAnswers] = useState<UserAnswer[]>(
    Array(questions.length).fill(null)
  );

  function onSelectAnswer(answerIndex: number, value: number) {
    setAnswers(
      answers.map((answer, index) => (index === answerIndex ? value : answer))
    );
  }

  function onNextQuestion() {
    setProgress((prev) => (prev === null ? 0 : prev + 1));
  }

  function onPreviousQuestion() {
    setProgress((prev) => (prev === 0 ? null : (prev as number) - 1));
  }

  function onReset() {
    setProgress(null);
    setAnswers(Array(questions.length).fill(null));
  }
  return (
    <TestContext.Provider
      value={{
        description,
        questions,
        results,
        progress,
        answers,
        onSelectAnswer,
        onNextQuestion,
        onPreviousQuestion,
        onReset,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}
