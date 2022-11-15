import Express from "express";
import { cardRouter } from "./card";
import { difficultyRouter } from "./difficulty";

export const router = Express.Router();

router.use(cardRouter).use(difficultyRouter);