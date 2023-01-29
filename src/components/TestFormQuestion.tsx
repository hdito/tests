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
    <>
      <div className="mb-4">
        <span className="font-bold">{(progress as number) + 1}</span> из{" "}
        <span className="font-bold">{questions.length}</span>{" "}
        <span>
          ({Math.floor((((progress as number) + 1) / questions.length) * 100)}%)
        </span>
      </div>
      <p className="mb-2 text-lg">{questions[progress as number].text}</p>
      <ul className="mb-4 flex flex-col gap-2">
        {questions[progress as number].answers.map((answer) => (
          <label className="flex items-baseline gap-2" key={answer.text}>
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
      <div className="grid grid-cols-2 gap-4">
        {progress !== 0 ? (
          <button
            className="rounded-lg border px-4 py-2"
            onClick={() => onPreviousQuestion()}
          >
            Назад
          </button>
        ) : null}
        <button
          className="col-start-2 rounded-lg bg-blue-200 px-4 py-2 text-sky-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-800"
          onClick={() => onNextQuestion()}
          disabled={answers[progress as number] === null}
        >
          Дальше
        </button>
      </div>
    </>
  );
}
