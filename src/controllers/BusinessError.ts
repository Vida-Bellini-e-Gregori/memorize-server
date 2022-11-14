export class BusinessError {
    message: string;
    status: number;

    constructor(message: string, status: number = 422) {
        this.message = message;
        this.status = status;
    }
}