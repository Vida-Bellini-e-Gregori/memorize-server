import Card from "../entities/Card";
import ICardRepository from "./ICardRepository";

class CardRepository implements CardRepository {
  createCard(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getAllCards(): Promise<Card[]> {
    throw new Error("Method not implemented.");
  }
  getCardById(cardId: number): Promise<Card> {
    throw new Error("Method not implemented.");
  }
  getAllCardsByDeckId(deckId: number): Promise<Card[]> {
    throw new Error("Method not implemented.");
  }
  updateCard(card: Card): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteCard(cardId: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export const cardRepository = new CardRepository() as ICardRepository;