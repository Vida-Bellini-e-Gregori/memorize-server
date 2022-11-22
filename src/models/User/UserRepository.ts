import IUserRepository from "./IUserRepository";
import {Card} from "../../entities/Card";
import {PrismaClient} from "@prisma/client";
import {difficultyRepository} from "../difficulty/DifficultyRepository";
import { User } from "../../entities/User";

class UserRepository implements IUserRepository {

    private prisma: PrismaClient = new PrismaClient();
  
    async createUser(user: User): Promise<void> {
        await this.prisma.user.create({
          data: {
            name: user.name,
            email: user.email
          }
        })
    }

//  ---------- daqui pra baixo é exemplo ---------

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
            if(!difficulty) throw new Error(`Card de id ${card.id} contém uma dificuldade inválida.`);

            const currentDateInMilliseconds = new Date().getTime();
            const cardLastSeenDateInMilliseconds = new Date(card.lastSeenDate).getTime();

            const timePassedSizeTheLastSeen = currentDateInMilliseconds - cardLastSeenDateInMilliseconds;
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

export const userRepository = new UserRepository() as IUserRepository;