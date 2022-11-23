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

userRouter.get("/users/googleId/:googleId", async (request, response) => {
  await requestExceptionsWrapper(response, async () => {
      const params = request.params;
      const user = await userUseCases.getUserByGoogleId(params.googleId);
      response.status(200).json(user);
  });
});
