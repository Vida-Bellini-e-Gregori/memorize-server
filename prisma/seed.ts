import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

import { cards } from "./cards";

async function main() {
    await prisma.deck.create({
        data: {
            title: "main",
        }
    });

    for(const i in [1,2,3]) {
        await prisma.difficulty.create({
            data: {}
        });
    }

    for (const card of cards) {
        await prisma.card.create({
            data: {
                deckId: 1,
                difficultyId: card.difficulty,
                question: card.question,
                answer: card.answer,
            }
        });
    }
}

main();