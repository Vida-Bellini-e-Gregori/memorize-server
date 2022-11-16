export class Difficulty {
    id: number;
    label: string;
    interval: number;

    constructor(id: number, label: string, interval: number) {
        this.id = id;
        this.label = label;
        this.interval = interval;
    }
}