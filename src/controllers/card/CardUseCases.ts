import { Card } from "../../entities/Card";
import ICardUseCases from "./ICardUseCases";
import {BusinessError} from "../BusinessError";
import { cardRepository } from "../../models/card/CardRepository";
import { difficultyRepository } from "../../models/difficulty/DifficultyRepository";
import {submitCreationRules} from "./BusinessRules/creationRules";
import {submitCardToUpdatingRules} from "./BusinessRules/updateRules";

const formatCardAttributes = (card: Card) => {
  card.deckId = Number(card.deckId);
  card.question = card.question.trim();
  card.answer = card.answer.trim();
}

class CardUseCases implements ICardUseCases {
  async createCard(card: Card): Promise<void> {
    formatCardAttributes(card);
    submitCreationRules(card);
    return await cardRepository.createCard(card);
  }

  async getAvailableCards(): Promise<Card[]> {
    return await cardRepository.getAvailableCards();
  }

  async getCardById(cardId: number): Promise<Card> {
    const card = await cardRepository.getCardById(cardId);
    if(!card) {
      throw new BusinessError("Card com id " + cardId + " não foi encontrado.", 400);
    }
    return card;
  }

  async getAvailableCardsByDeckId(deckId: number): Promise<Card[]> {
    return await cardRepository.getAvailableCardsByDeckId(deckId);
  }

  async updateCard(cardId: number, card: Card): Promise<void> {
    formatCardAttributes(card);
    submitCardToUpdatingRules(card);

    const cardExist = await this.getCardById(cardId);
    if(!cardExist) {
      throw new BusinessError("Card com id " + cardId + " não foi encontrado.", 400);
    }

    return await cardRepository.updateCard(cardId, card);
  }

  async updateCardDifficulty(cardId: number, difficultyId: number): Promise<void> {
    const cardExist = await this.getCardById(cardId);
    if(!cardExist) {
      throw new BusinessError("Card com id " + cardId + " não foi encontrado.", 400);
    }

    const difficulties = await difficultyRepository.getAllDifficulties();
    const difficultiesIds = difficulties.map((difficulty) => difficulty.id);

    if(!difficultiesIds.includes(difficultyId)) {
      throw new BusinessError("Dificuldade " + difficultyId + " não é válida.", 400);
    }

    return await cardRepository.updateCardDifficulty(cardId, difficultyId);
  }

  async deleteCard(cardId: number): Promise<void> {
    const cardExist = await this.getCardById(cardId);
    if(!cardExist) {
      throw new BusinessError("Card com id " + cardId + " não foi encontrado.", 400);
    }
    return await cardRepository.deleteCard(cardId);
  }
}

export const cardUseCases = new CardUseCases() as ICardUseCases;