import Express from "express";
import { cardUseCases } from "../controllers/card/CardUseCases";
import { requestExceptionsWrapper } from "./utils";

export const cardRouter = Express.Router();

cardRouter.post("/cards", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const body = request.body;
        await cardUseCases.createCard(body);
        response.status(200).json();
    });
});

cardRouter.get("/cards", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const cards = await cardUseCases.getAvailableCards();
        response.set(200).json(cards);
    })
});

cardRouter.get("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        const cards = await cardUseCases.getCardById(parseInt(id));
        response.set(200).json(cards);
    });
});

cardRouter.put("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        const body = request.body;
        await cardUseCases.updateCard(parseInt(id), body);
        response.status(200).json();
    });
});

cardRouter.patch("/cards/:id/difficulty/:difficultyId", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id, difficultyId } = request.params;
        await cardUseCases.updateCardDifficulty(parseInt(id), parseInt(difficultyId));
        response.status(200).json();
    });
});

cardRouter.delete("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        await cardUseCases.deleteCard(parseInt(id));
        response.status(200).json();
    });
});