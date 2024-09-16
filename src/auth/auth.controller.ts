import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/:userId')
  public login(email: string, password: string, id: string) {

  }
}
