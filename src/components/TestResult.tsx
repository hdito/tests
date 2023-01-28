import { useTestContext } from "@/contexts/TestContext";

export function TestResult(): JSX.Element {
  const { results, answers } = useTestContext();

  const userAnswer = answers as number[];
  const totalScore = userAnswer.reduce((prev, current) => prev + current, 0);

  let userResult: string | null = null;

  for (let i = 0; i < results.length; i++) {
    if (i === results.length - 1) {
      userResult = results[i].text;
      break;
    }
    if (totalScore >= results[i + 1].from) continue;
    if (totalScore >= results[i].from && totalScore < results[i + 1].from) {
      userResult = results[i].text;
      break;
    }
  }

  return (
    <div>
      <p>{userResult}</p>
    </div>
  );
}
