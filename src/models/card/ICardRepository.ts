import { Card } from "../../entities/Card";

export default interface ICardRepository {
  createCard(card: Card): Promise<void>;
  getAllCards(): Promise<Card[]>;
  getCardById(cardId: number): Promise<Card>;
  getAllCardsByDeckId(deckId: number): Promise<Card[]>;
  updateCard(card: Card): Promise<void>;
  deleteCard(cardId: number): Promise<void>;
}