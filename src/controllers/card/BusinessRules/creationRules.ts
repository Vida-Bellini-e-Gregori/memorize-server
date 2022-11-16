import {Card} from "../../../entities/Card";
import {BusinessError} from "../../BusinessError";

export const submitCreationRules = (card: Card): void => {
    if(!card.deckId) throw new BusinessError("DeckId do card é obrigatório.");
    if(!card.answer) throw new BusinessError("Resposta é obrigatória.");
    if(!card.question) throw new BusinessError("Pergunta é obrigatória.");
}