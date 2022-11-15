import {Difficulty} from "../../entities/Difficulty";

export default interface IDifficultyUseCases {
  getAllDifficulties(): Promise<Difficulty[]>;
}
