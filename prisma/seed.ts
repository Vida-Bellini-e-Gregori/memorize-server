import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

import { cards } from "./cards";

async function main() {
    await prisma.deck.create({
        data: {
            title: "main",
        }
    });

    const difficulties = [
        { label: "FÁCIL" },
        { label: "MÉDIO" },
        { label: "DIFÍCIL" },
    ];

    for(const difficulty of difficulties) {
        await prisma.difficulty.create({
            data: {
                label: difficulty.label
            },
        });
    }

    for (const card of cards) {
        await prisma.card.create({
            data: {
                deckId: 1,
                difficulty: card.difficulty,
                question: card.question,
                answer: card.answer,
            }
        });
    }
}

main();