import fetch from "cross-fetch"
import {Card} from "../../entities/Card";

const getDefaultFetchConfiguration = (method: string, body?: any) => {
    return {
        headers: {
            "Content-Type" : "application/json",
            "Accept": "application/json"
        },
        method: method,
        body: JSON.stringify(body)
    }
}
const domain = "http://localhost:8000";

describe("Card use cases", () => {
    it("Should return an array of all cards", async () => {
        const response = await fetch(domain + "/cards", getDefaultFetchConfiguration("GET"));
        expect(response.status).toBe(200);
    });

    it("Should return an array of available cards", async () => {
        const response = await fetch(domain + "/cards/available", getDefaultFetchConfiguration("GET"));
        expect(response.status).toBe(200);
    });

    it("Should return a single card", async () => {
        const response = await fetch(domain + "/cards/3", getDefaultFetchConfiguration("GET"));

        expect(response.status).toBe(200);
    });

    it("Should create a card", async () => {
        const card = {
            deckId: 1,
            question: "This is a real question?",
            answer: "This is not a real question",
        };

        const response = await fetch(domain + "/cards", getDefaultFetchConfiguration("POST", card));
        expect(response.status).toBe(200);
    });

    it("Should update a card", async () => {
        const card = {
            question: "This is a real updated question?",
            answer: "This is not a updated real question",
        };

        const response = await fetch(domain + "/cards/3", getDefaultFetchConfiguration("PUT", card));
        expect(response.status).toBe(200);
    });

    const getLastCard = async () => {
        const getCardsResponse = await fetch(domain + "/cards");
        const cards: Card[] = await getCardsResponse.json();
        return cards[cards.length - 1];
    }

    it("Should delete a card", async () => {
        const card = await getLastCard();
        if(!card) return;
        const response = await fetch(domain + "/cards/" + card.id, getDefaultFetchConfiguration("DELETE"));
        expect(response.status).toBe(200);
    });

    it("Should set a card difficulty to 3", async () => {
        const response = await fetch(domain + "/cards/5/difficulty/3", getDefaultFetchConfiguration("PATCH"));
        expect(response.status).toBe(200);
    });
})