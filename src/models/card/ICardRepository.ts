import { Card } from "../../entities/Card";

export default interface ICardRepository {
  createCard(card: Card): Promise<void>;
  getAllCards(): Promise<Card[]>;
  getAvailableCards(): Promise<Card[]>;
  getCardById(cardId: number): Promise<Card>;
  getAvailableCardsByDeckId(deckId: number): Promise<Card[]>;
  updateCard(cardId: number, card: Card): Promise<void>;
  deleteCard(cardId: number): Promise<void>;
  updateCardDifficulty(cardId: number, difficultyId: number): Promise<void>;
}