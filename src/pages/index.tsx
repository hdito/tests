import { TestForm } from "@/components/TestForm";
import { TestStoreContextProvider } from "@/contexts/TestStoreContext";
import { beckQuestions } from "@/data/beckQuestions";
import { Question } from "@/types/question";
import { Result } from "@/types/result";
import { Inter } from "@next/font/google";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export type TestProps = {
  title: string;
  description: string;
  questions: Question[];
  results: Result[];
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
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <div className="rounded-xl border p-4 shadow-lg">
            <TestStoreContextProvider
              description={description}
              questions={questions}
              results={results}
            >
              <TestForm />
            </TestStoreContextProvider>
          </div>
        </div>
      </main>
    </>
  );
};

export default Test;

export const getStaticProps: GetStaticProps<TestProps> = () => {
  return {
    props: {
      title: "Шкала депрессии Бека",
      description:
        "В этом опроснике содержатся группы утверждений.\n\nВнимательно прочитайте каждую группу утверждений. Затем выберите в каждой группе одно утверждение, которое лучше всего описываете, как вы себя чувствовали на этой неделе и сегодня.",
      questions: beckQuestions,
      results: [
        { from: 0, text: "У вас нет симптомов депрессии." },
        {
          from: 10,
          text: "У вас есть симптомы лёгкой депрессии (субдепрессии).",
        },
        { from: 16, text: "У вас есть симптомы умеренной депрессии." },
        {
          from: 20,
          text: "У вас есть симптомы выраженной депрессии (средней тяжести).",
        },
        { from: 30, text: "У вас есть симптомы тяжёлой депрессии." },
      ],
    },
  };
};
