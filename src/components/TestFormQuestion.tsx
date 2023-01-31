import { useTestStoreContext } from "@/contexts/TestStoreContext";
import { observer } from "mobx-react-lite";

export const TestFormQuestion = observer((): JSX.Element => {
  const testStore = useTestStoreContext();
  return (
    <>
      <div className="mb-4">
        <span className="font-bold">{(testStore.progress as number) + 1}</span>{" "}
        из <span className="font-bold">{testStore.questions.length}</span>{" "}
        <span>
          (
          {Math.floor(
            (((testStore.progress as number) + 1) /
              testStore.questions.length) *
              100
          )}
          %)
        </span>
      </div>
      <p className="mb-2 text-lg">
        {testStore.questions[testStore.progress as number].text}
      </p>
      <ul className="mb-4 flex flex-col gap-2">
        {testStore.questions[testStore.progress as number].answers.map(
          (answer) => (
            <label className="flex items-baseline gap-2" key={answer.text}>
              <input
                type="radio"
                name={(testStore.progress as number).toString()}
                value={answer.value}
                onChange={() =>
                  testStore.onSelectAnswer(
                    testStore.progress as number,
                    answer.value
                  )
                }
                checked={
                  answer.value ===
                  testStore.answers[testStore.progress as number]
                }
              />
              <span>{answer.text}</span>
            </label>
          )
        )}
      </ul>
      <div className="grid grid-cols-2 gap-4">
        {testStore.progress !== 0 ? (
          <button
            className="rounded-lg border px-4 py-2"
            onClick={() => testStore.onPreviousQuestion()}
          >
            Назад
          </button>
        ) : null}
        <button
          className="col-start-2 rounded-lg bg-blue-200 px-4 py-2 text-sky-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-800"
          onClick={() => testStore.onNextQuestion()}
          disabled={testStore.answers[testStore.progress as number] === null}
        >
          Дальше
        </button>
      </div>
    </>
  );
});
