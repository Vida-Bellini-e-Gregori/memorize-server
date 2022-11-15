import IDifficultyUseCases from "./IDifficultyUseCases";
import { difficultyRepository } from "../../models/difficulty/DifficultyRepository";
import { Difficulty } from "../../entities/Difficulty";

class DifficultyUseCases implements IDifficultyUseCases {
  getAllDifficulties(): Promise<Difficulty[]> {
    return difficultyRepository.getAllDifficulties();
  }
}

export const difficultyUseCases = new DifficultyUseCases() as IDifficultyUseCases;