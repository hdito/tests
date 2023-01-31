import { useTestStoreContext } from "@/contexts/TestStoreContext";
import { TestFormQuestion } from "./TestFormQuestion";
import { TestResult } from "./TestResult";
import { observer } from "mobx-react-lite";

export const TestForm = observer((): JSX.Element => {
  const testStore = useTestStoreContext();

  if (testStore.progress === null)
    return (
      <>
        <p className="mb-4 whitespace-pre-line">{testStore.description}</p>
        <button
          className="w-full rounded-lg bg-blue-200 px-4 py-2 text-sky-800"
          onClick={() => testStore.onNextQuestion()}
        >
          Начать тест
        </button>
      </>
    );

  if (testStore.progress === testStore.questions.length) return <TestResult />;

  return <TestFormQuestion />;
});
