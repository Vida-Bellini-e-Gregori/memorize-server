import ICardRepository from "./ICardRepository";
import {Card, CardDifficulty} from "../../entities/Card";
import {PrismaClient} from "@prisma/client";

class CardRepository implements CardRepository {
    private prisma: PrismaClient = new PrismaClient();

    async createCard(card: Card): Promise<void> {
        await this.prisma.card.create({
            data: {
                answer: card.answer,
                question: card.question,
                deckId: card.deckId,
                difficultyId: card.difficulty,
            },
        });
    }

    async getAllCards(): Promise<Card[]> {
        const cards = await this.prisma.card.findMany({
            orderBy: [
                {
                    difficultyId: 'desc'
                },
                {
                    lastSeenDate: 'asc'
                },
            ]
        }) as Object;
        return cards as Card[];
    }

    async getCardById(cardId: number): Promise<Card> {
        const card = await this.prisma.card.findUnique({
            where: {
                id: cardId,
            },
        }) as Object;
        return card as Card;
    }

    async getAllCardsByDeckId(deckId: number): Promise<Card[]> {
        throw new Error("Method not implemented.");
    }

    async updateCard(card: Card): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async deleteCard(cardId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export const cardRepository = new CardRepository() as ICardRepository;