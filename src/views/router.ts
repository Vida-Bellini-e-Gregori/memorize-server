import Express from "express";
import { cardRouter } from "./card";
import { difficultyRouter } from "./difficulty";
import { userRouter } from "./user";

export const router = Express.Router();

router.use(cardRouter).use(difficultyRouter);
router.use(userRouter);