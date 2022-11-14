import Express, {Response} from "express";
import { cardUseCase } from "../controllers/card/CardUseCases";
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

router.get("/cards", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const cards = await cardUseCase.getAllCards();
        response.set(200).json(cards);
    })
});

router.get("/cards/:id", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const { id } = request.params;
        const cards = await cardUseCase.getCardById(parseInt(id));
        response.set(200).json(cards);
    });
});

router.post("/cards", async (request, response) => {
    await requestExceptionsWrapper(response, async () => {
        const body = request.body;
        await cardUseCase.createCard(body);
        response.status(200).json();
    });
});

export default router;