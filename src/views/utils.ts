import { Response } from "express";
import { BusinessError } from "../controllers/BusinessError";

export const requestExceptionsWrapper = async (response: Response, callback: Function) => {
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