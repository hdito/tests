import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { Question } from "@/types/question";
import { NextPage } from "next";
import { TestContextProvider } from "@/contexts/TestContext";
import { TestForm } from "@/components/TestForm";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export type TestProps = {
  description: string;
  questions: Question[];
  results: { from: number; text: string }[];
};

const Test: NextPage<TestProps> = ({ description, questions, results }) => {
  return (
    <>
      <Head>
        <title>Тест</title>
        <meta name="description" content="Тестовый тест" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${inter.variable} min-h-screen font-sans`}>
        <TestContextProvider
          description={description}
          questions={questions}
          results={results}
        >
          <TestForm />
        </TestContextProvider>
      </main>
    </>
  );
};

Test.getInitialProps = () => {
  return {
    description: "Тестовый тест",
    questions: [
      {
        text: "У вас ноет живот?",
        answers: [
          { text: "да", value: 1 },
          { text: "нет", value: 0 },
        ],
      },
      {
        text: "Вы давно ели?",
        answers: [
          { text: "да", value: 1 },
          { text: "нет", value: 0 },
        ],
      },
    ],
    results: [
      { from: 0, text: "Кажется, вы не голодны." },
      { from: 2, text: "Кажется, вы голодны." },
    ],
  };
};

export default Test;
