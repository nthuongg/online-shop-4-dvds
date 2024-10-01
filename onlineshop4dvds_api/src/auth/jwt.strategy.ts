import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "src/models/jwt-payload.model";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    public constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "SECRET",
            ignoreExpiration: false
        });
    }

    public validate(payload: JwtPayload): {id: number, email: string} { // This method returns req.user
        return {
            id: payload.sub,
            email: payload.email
        };
    }
}