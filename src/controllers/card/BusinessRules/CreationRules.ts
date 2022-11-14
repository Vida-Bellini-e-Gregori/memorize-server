import {BusinessError} from "../../BusinessError";
import {Card} from "../../../entities/Card";

export const submitCardToCreationRules = (card: Card) => {
    if(!card.answer) throw new BusinessError("Resposta é obrigatória.");
    if(!card.question) throw new BusinessError("Pergunta é obrigatória.");
    if(!card.deckId) throw new BusinessError("Deck do card é obrigatório.");
    if(card.difficulty === undefined) throw new BusinessError("Dificuldade do card é obrigatória.");
}