import { Card } from "../../entities/Card";

export default interface ICardUseCases {
  createCard(card: Card): Promise<void>;
  getAvailableCards(): Promise<Card[]>;
  getCardById(cardId: number): Promise<Card>;
  getAvailableCardsByDeckId(deckId: number): Promise<Card[]>;
  updateCard(cardId: number, card: Card): Promise<void>;
  deleteCard(cardId: number): Promise<void>;
  updateCardDifficulty(cardId: number, difficultyId: number): Promise<void>;
}
