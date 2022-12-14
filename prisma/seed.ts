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
        { label: "FÁCIL", interval: 180000 },
        { label: "MÉDIO", interval: 120000 },
        { label: "DIFÍCIL", interval: 60000 },
    ];

    for(const difficulty of difficulties) {
        await prisma.difficulty.create({
            data: {
                label: difficulty.label,
                interval: difficulty.interval,
            },
        });
    }

    for (const card of cards) {
        await prisma.card.create({
            data: {
                deckId: 1,
                question: card.question,
                answer: card.answer,
            }
        });
    }
}

main();