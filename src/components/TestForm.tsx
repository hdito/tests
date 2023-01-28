import { useTestContext } from "@/contexts/TestContext";
import { TestFormQuestion } from "./TestFormQuestion";
import { TestResult } from "./TestResult";

export function TestForm(): JSX.Element {
  const { questions, description, progress, onNextQuestion } = useTestContext();

  if (progress === null)
    return (
      <div>
        <p>{description}</p>
        <button onClick={() => onNextQuestion()}>Начать тест</button>
      </div>
    );

  if (progress === questions.length) return <TestResult />;

  return <TestFormQuestion />;
}
