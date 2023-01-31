import { useTestStoreContext } from "@/contexts/TestStoreContext";
import { observer } from "mobx-react-lite";

export const TestStartScreen = observer((): JSX.Element => {
  const testStore = useTestStoreContext();

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
});
