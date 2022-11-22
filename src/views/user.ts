import Express from "express";
import { cardUseCases } from "../controllers/card/CardUseCases";
import { userUseCases } from "../controllers/user/UserUseCases";
import { requestExceptionsWrapper } from "./utils";

export const userRouter = Express.Router();

userRouter.post("/users", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const body = request.body;
        await userUseCases.createUser(body);
        response.status(200).json();
    });
});

// --------- os abaixos esqueci de exemplo, pode tirar ---------------

userRouter.get("/cards", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const cards = await cardUseCases.getAllCards();
        response.set(200).json(cards);
    })
});

userRouter.get("/cards/available", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const cards = await cardUseCases.getAvailableCards();
        response.set(200).json(cards);
    })
});


userRouter.get("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        const cards = await cardUseCases.getCardById(parseInt(id));
        response.set(200).json(cards);
    });
});

userRouter.put("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        const body = request.body;
        await cardUseCases.updateCard(parseInt(id), body);
        response.status(200).json();
    });
});

userRouter.patch("/cards/:id/difficulty/:difficultyId", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id, difficultyId } = request.params;
        await cardUseCases.updateCardDifficulty(parseInt(id), parseInt(difficultyId));
        response.status(200).json();
    });
});

userRouter.delete("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        await cardUseCases.deleteCard(parseInt(id));
        response.status(200).json();
    });
});