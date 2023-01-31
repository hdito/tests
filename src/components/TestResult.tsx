import { useTestStoreContext } from "@/contexts/TestStoreContext";
import { useUserResult } from "@/hooks/useUserResult";
import { observer } from "mobx-react-lite";

export const TestResult = observer((): JSX.Element => {
  const testStore = useTestStoreContext();
  const userResult = useUserResult();

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
