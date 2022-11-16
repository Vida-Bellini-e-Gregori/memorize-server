import {Card} from "../../../entities/Card";
import {BusinessError} from "../../BusinessError";

export const submitCreationRules = (card: Card): void => {
    if(!card.answer) throw new BusinessError("Resposta é obrigatória.");
    if(!card.question) throw new BusinessError("Pergunta é obrigatória.");
    if(!card.deckId) throw new BusinessError("Deck do card é obrigatório.");
    if(!card.difficulty) throw new BusinessError("Dificuldade do card é obrigatória.");
}