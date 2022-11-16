import { IDifficultyRepository } from "./IDifficultyRepository";
import { PrismaClient } from "@prisma/client";
import { Difficulty } from "../../entities/Difficulty";

export class DifficultyRepository implements IDifficultyRepository {
    private prisma: PrismaClient = new PrismaClient();

    async getAllDifficulties(): Promise<Difficulty[]> {
        const difficulties = await this.prisma.difficulty.findMany() as Object;
        return difficulties as Difficulty[];
    }
}

export const difficultyRepository = new DifficultyRepository() as IDifficultyRepository;