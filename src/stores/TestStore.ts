import { Question } from "@/types/question";
import { Result } from "@/types/result";
import { UserAnswer } from "@/types/userAnswer";
import { makeAutoObservable } from "mobx";

export class TestStore {
  questions: Question[];
  description: string;
  results: Result[];
  answers: UserAnswer[];
  progress: number | null;

  constructor(questions: Question[], description: string, results: Result[]) {
    this.questions = questions;
    this.description = description;
    this.results = results;
    this.answers = this.initAnswers();
    this.progress = null;
    console.log(this);
    makeAutoObservable(this);
  }

  initAnswers(): null[] {
    return Array(this.questions.length).fill(null);
  }
  onSelectAnswer(answerIndex: number, value: number) {
    console.log({ answerIndex, value });
    console.log({ answers: this.answers });
    this.answers[answerIndex] = value;
  }
  onNextQuestion() {
    this.progress = this.progress === null ? 0 : this.progress + 1;
  }
  onPreviousQuestion() {
    this.progress = this.progress === 0 ? null : (this.progress as number) - 1;
  }
  onReset() {
    this.answers = this.initAnswers();
    this.progress = null;
  }
}
