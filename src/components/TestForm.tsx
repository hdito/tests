import { useTestContext } from "@/contexts/TestContext";
import { TestFormQuestion } from "./TestFormQuestion";
import { TestResult } from "./TestResult";

export function TestForm(): JSX.Element {
  const { questions, description, progress, onNextQuestion } = useTestContext();

  if (progress === null)
    return (
      <>
        <p className="mb-4">{description}</p>
        <button
          className="rounded-lg bg-blue-200 px-4 py-2 text-sky-800"
          onClick={() => onNextQuestion()}
        >
          Начать тест
        </button>
      </>
    );

  if (progress === questions.length) return <TestResult />;

  return <TestFormQuestion />;
}
