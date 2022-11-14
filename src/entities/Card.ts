export enum CardDifficulty {
  Easy = 1,
  Medium = 2,
  Hard = 3,
}

export class Card {
  deckId: number;

  id: number;

  question: string;

  answer: string;

  difficulty: number;

  constructor(deckId: number, id: number, question: string, answer: string, difficulty: number) {
    this.deckId = deckId;
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.difficulty = difficulty;
  }
}