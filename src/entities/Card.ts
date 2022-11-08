export default class Card {
  parentDeckId: number;

  id: number;

  question: string;

  answer: string;

  constructor(parentDeckId: number, id: number, question: string, answer: string) {
    this.parentDeckId = parentDeckId;
    this.id = id;
    this.question = question;
    this.answer = answer;
  }
}
