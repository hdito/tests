import { useTestStoreContext } from "@/contexts/TestStoreContext";
import { TestFormQuestion } from "./TestFormQuestion";
import { TestResult } from "./TestResult";
import { observer } from "mobx-react-lite";
import { TestStartScreen } from "./TestStartScreen";

export const TestForm = observer((): JSX.Element => {
  const testStore = useTestStoreContext();

  if (testStore.progress === null) return <TestStartScreen />;
  if (testStore.progress === testStore.questions.length) return <TestResult />;
  return <TestFormQuestion />;
});
