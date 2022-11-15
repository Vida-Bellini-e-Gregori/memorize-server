export class Card {
  deckId: number;

  id: number;

  question: string;

  answer: string;

  difficulty: number;

  lastSeenDate: string;

  constructor(deckId: number, id: number, question: string, answer: string, difficulty: number, lastSeenDate: string) {
    this.deckId = deckId;
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.difficulty = difficulty;
    this.lastSeenDate = lastSeenDate;
  }
}