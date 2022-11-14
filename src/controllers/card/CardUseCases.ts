import { Card } from "../../entities/Card";
import ICardUseCases from "./ICardUseCases";
import { cardRepository } from "../../models/card/cardRepository";
import {submitCardToCreationRules} from "./BusinessRules/CreationRules";

const formatCardAttributes = (card: Card) => {
  card.deckId = Number(card.deckId);
  card.question = card.question.trim();
  card.answer = card.answer.trim();
}

class CardUseCase implements ICardUseCases {
  async createCard(card: Card): Promise<void> {
    formatCardAttributes(card);
    submitCardToCreationRules(card);
    return await cardRepository.createCard(card);
  }
  async getAllCards(): Promise<Card[]> {
    return await cardRepository.getAllCards();
  }
  async getCardById(cardId: number): Promise<Card> {
    return await cardRepository.getCardById(cardId);
  }
  async getAllCardsByDeckId(deckId: number): Promise<Card[]> {
    return await cardRepository.getAllCardsByDeckId(deckId);
  }
  async updateCard(card: Card): Promise<void> {
    return await cardRepository.updateCard(card);
  }
  async deleteCard(cardId: number): Promise<void> {
    return await cardRepository.deleteCard(cardId);
  }
}

export const cardUseCase = new CardUseCase() as ICardUseCases;