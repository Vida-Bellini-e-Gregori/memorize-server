import ICardRepository from "./ICardRepository";
import {Card} from "../../entities/Card";
import {PrismaClient} from "@prisma/client";
import {difficultyRepository} from "../difficulty/DifficultyRepository";

class CardRepository implements ICardRepository {
    private prisma: PrismaClient = new PrismaClient();

    async createCard(card: Card): Promise<void> {
        await this.prisma.card.create({
            data: {
                answer: card.answer,
                question: card.question,
                deckId: card.deckId,
            },
        });
    }

    async getAllCards() {
        const cards = await this.prisma.card.findMany({
            orderBy: [
                {
                    difficulty: 'desc'
                },
                {
                    lastSeenDate: 'asc'
                },
            ],
        }) as Object;
        return cards as Card[];
    }

    async getAvailableCards(): Promise<Card[]> {
        const difficulties = await difficultyRepository.getAllDifficulties();
        const cards = await this.getAllCards();

        return cards.filter((card) => {
            const difficulty = difficulties.find((difficulty) => difficulty.id === card.difficulty);
            if(!difficulty) return;

            const nowInMilliseconds = new Date().getTime();
            const cardDateInMilliseconds = new Date(card.lastSeenDate).getTime();

            const timePassedSizeTheLastSeen = nowInMilliseconds - cardDateInMilliseconds;
            return timePassedSizeTheLastSeen >= difficulty.interval;
        })
    }

    async getCardById(cardId: number): Promise<Card> {
        const card = await this.prisma.card.findUnique({
            where: {
                id: cardId,
            },
        }) as Object;
        return card as Card;
    }

    async getAvailableCardsByDeckId(deckId: number): Promise<Card[]> {
        throw new Error("Method not implemented.");
    }

    async updateCard(cardId: number, card: Card): Promise<void> {
        await this.prisma.card.update({
            where: {
                id: cardId
            },
            data: {
                question: card.question,
                answer: card.answer,
            },
        });
    }

    async updateCardDifficulty(cardId: number, difficultyId: number): Promise<void> {
        await this.prisma.card.update({
            where: {
                id: cardId,
            },
            data: {
                difficulty: difficultyId,
                lastSeenDate: new Date(),
            }
        });
    }

    async deleteCard(cardId: number): Promise<void> {
        await this.prisma.card.delete({
            where: {
                id: cardId,
            }
        })
    }
}

export const cardRepository = new CardRepository() as ICardRepository;