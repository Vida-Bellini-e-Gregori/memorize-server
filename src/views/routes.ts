import Express, {Response} from "express";
import { cardUseCases } from "../controllers/card/CardUseCases";
import { BusinessError } from "../controllers/BusinessError";

const router = Express.Router();

const requestExceptionsWrapper = async (response: Response, callback: Function) => {
    try {
        await callback();
    } catch (e) {
        if (e instanceof BusinessError) {
            response.status(e.status).json(e);
            return;
        }
        response.status(500).json(e);
    }
};

router.post("/cards", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const body = request.body;
        await cardUseCases.createCard(body);
        response.status(200).json();
    });
});

router.get("/cards", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const cards = await cardUseCases.getAllCards();
        response.set(200).json(cards);
    })
});

router.get("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        const cards = await cardUseCases.getCardById(parseInt(id));
        response.set(200).json(cards);
    });
});

router.put("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        const body = request.body;
        await cardUseCases.updateCard(parseInt(id), body);
        response.status(200).json();
    });
});

router.patch("/cards/:id/difficulty/:difficultyId", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id, difficultyId } = request.params;
        await cardUseCases.updateCardDifficulty(parseInt(id), parseInt(difficultyId));
        response.status(200).json();
    });
});

router.delete("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        await cardUseCases.deleteCard(parseInt(id));
        response.status(200).json();
    });
});

export default router;