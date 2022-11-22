import { User } from "../../../entities/User";
import {BusinessError} from "../../BusinessError";

export const submitCreationRules = (user: User): void => {
    // if(!user.id) throw new BusinessError("Id do user é obrigatório.");
    if(!user.name) throw new BusinessError("Nome é obrigatório.");
    if(!user.email) throw new BusinessError("email é obrigatório.");
}