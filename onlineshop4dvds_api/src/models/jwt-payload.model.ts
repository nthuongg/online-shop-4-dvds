export class JwtPayload {
    email: string;
    sub: number;
    roles: string[];

    constructor(email: string, sub: number, role: string[]) {
        this.email = email;
        this.sub = sub;
        this.roles = role;
    }
}