import fetch from "cross-fetch"

const domain = "http://localhost:8000";

describe("Difficulty endpoints validation", () => {
    it('Should return all the difficulties', async () => {
        const response = await fetch(domain + "/difficulties")
        const responseBody = await response.json();

        expect(response.status).toBe(200);
        expect(responseBody).toEqual(
            [
                { id: 1, label: 'FÁCIL' },
                { id: 2, label: 'MÉDIO' },
                { id: 3, label: 'DIFÍCIL' }
            ])
    });
});