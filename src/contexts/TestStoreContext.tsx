import { TestProps } from "@/pages";
import { TestStore } from "@/stores/TestStore";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const TestStoreContext = createContext<TestStore | null>(null);

export const useTestStoreContext = () => {
  const context = useContext(TestStoreContext);
  if (!context)
    throw Error(
      "useTestContext must be called only inside TestContextProvider"
    );
  return context;
};

export function TestStoreContextProvider({
  children,
  description,
  questions,
  results,
}: PropsWithChildren<Omit<TestProps, "title">>) {
  const [testStore] = useState(new TestStore(questions, description, results));
  return (
    <TestStoreContext.Provider value={testStore}>
      {children}
    </TestStoreContext.Provider>
  );
}
