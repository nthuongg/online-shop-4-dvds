export default class ConfirmEmailPayload {
    email: string;
    token: string;

    constructor(email: string, token: string) {
        this.email = email;
        this.token = token;
    }
}