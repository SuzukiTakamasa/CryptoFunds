import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    googleLogin(req) {
        if (!req.user) return 'No user from google'

        return {
            message: 'User information from google',
            user: req.user,
            jwt: this.jwtService.sign({
                email: req.user.email,
                sub: req.user.userId,
            })
        }
    }
}
