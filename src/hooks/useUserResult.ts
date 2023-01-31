import { useTestStoreContext } from "@/contexts/TestStoreContext";

export const useUserResult = () => {
  const testStore = useTestStoreContext();

  const totalScore = (testStore.answers as number[]).reduce(
    (prev, current) => prev + current,
    0
  );

  const userResult = testStore.results.find((result, index, results) => {
    if (index === results.length - 1) {
      if (result.from <= totalScore) return true;
      else return false;
    }
    if (results[index + 1].from < totalScore) return false;
    if (result.from <= totalScore) {
      return true;
    } else return false;
  })?.text;

  return userResult;
};
