import { TestForm } from "@/components/TestForm";
import { TestContextProvider } from "@/contexts/TestContext";
import { Question } from "@/types/question";
import { Inter } from "@next/font/google";
import { NextPage } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export type TestProps = {
  title: string;
  description: string;
  questions: Question[];
  results: { from: number; text: string }[];
};

const Test: NextPage<TestProps> = ({
  title,
  description,
  questions,
  results,
}) => {
  return (
    <>
      <Head>
        <title>Тест</title>
        <meta name="description" content="Тестовый тест" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${inter.variable} min-h-screen p-2 py-8 font-sans`}>
        <div className="m-auto max-w-md">
          <h1 className="mb-2 text-2xl font-bold">{title}</h1>
          <div className="rounded-xl border p-4 shadow-lg">
            <TestContextProvider
              description={description}
              questions={questions}
              results={results}
            >
              <TestForm />
            </TestContextProvider>
          </div>
        </div>
      </main>
    </>
  );
};

Test.getInitialProps = () => {
  return {
    title: "Тестовый тест",
    description: "Описание тестового теста",
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
