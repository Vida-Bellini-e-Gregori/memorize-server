import { Difficulty } from "../../entities/Difficulty";

export interface IDifficultyRepository {
    getAllDifficulties(): Promise<Difficulty[]>;
}