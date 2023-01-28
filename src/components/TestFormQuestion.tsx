import { useTestContext } from "@/contexts/TestContext";

export function TestFormQuestion(): JSX.Element {
  const {
    questions,
    progress,
    answers,
    onSelectAnswer,
    onNextQuestion,
    onPreviousQuestion,
  } = useTestContext();
  return (
    <div>
      <p>{questions[progress as number].text}</p>
      <ul>
        {questions[progress as number].answers.map((answer) => (
          <label key={answer.text}>
            <input
              type="radio"
              name={(progress as number).toString()}
              value={answer.value}
              onChange={() => onSelectAnswer(progress as number, answer.value)}
              checked={answer.value === answers[progress as number]}
            />
            <span>{answer.text}</span>
          </label>
        ))}
      </ul>
      {progress !== 0 ? (
        <button onClick={() => onPreviousQuestion()}>Предыдущий вопрос</button>
      ) : null}
      <button onClick={() => onNextQuestion()}>Следующий вопрос</button>
    </div>
  );
}
