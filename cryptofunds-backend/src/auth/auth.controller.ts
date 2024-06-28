import { Controller, Get, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

   @Get('google/callback')
   async googleCallback(@Req() req: Request, @Res() res: Response) {
    const code = req.query.code as string
    //const jwtToken = await this.authService.getGoogleToken(code)
    //res.cookie('access_token', jwtToken, { httpOnly: true})
    return res.redirect('dashboard')
   }
}
