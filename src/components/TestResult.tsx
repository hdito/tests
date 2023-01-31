import { useTestStoreContext } from "@/contexts/TestStoreContext";
import { observer } from "mobx-react-lite";

export const TestResult = observer((): JSX.Element => {
  const testStore = useTestStoreContext();

  const totalScore = (testStore.answers as number[]).reduce(
    (prev, current) => prev + current,
    0
  );

  let userResult: string | null = null;

  for (let i = 0; i < testStore.results.length; i++) {
    if (i === testStore.results.length - 1) {
      userResult = testStore.results[i].text;
      break;
    }
    if (totalScore >= testStore.results[i + 1].from) continue;
    if (
      totalScore >= testStore.results[i].from &&
      totalScore < testStore.results[i + 1].from
    ) {
      userResult = testStore.results[i].text;
      break;
    }
  }

  return (
    <>
      <p className="mb-4">{userResult}</p>
      <button
        onClick={() => testStore.onReset()}
        className="rounded-lg bg-blue-200 px-4 py-2 text-sky-800"
      >
        Вернуться к описанию
      </button>
    </>
  );
});
