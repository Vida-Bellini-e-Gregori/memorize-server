import Express from "express";
import { requestExceptionsWrapper } from "./utils";
import { difficultyUseCases } from "../controllers/difficulty/DifficultyUseCases";

export const difficultyRouter = Express.Router();

difficultyRouter.get("/difficulties", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const difficulties = await difficultyUseCases.getAllDifficulties();
        response.set(200).json(difficulties);
    })
});