import {Card} from "../../../entities/Card";
import {BusinessError} from "../../BusinessError";

export const submitCardToUpdatingRules = (card: Card): void => {
    if(!card.question) throw new BusinessError("Pergunta é obrigatória.");
    if(!card.answer) throw new BusinessError("Resposta é obrigatória.");
}