import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

import {cards} from "./cards";

async function main() {
    for (const card of cards) {
        await prisma.deck.create({
            data: {
                title: "Math",

                Card: {
                    create: {
                        question: card.question,
                        answer: card.answer
                    },
                }
            }
        });
    }
}

main();