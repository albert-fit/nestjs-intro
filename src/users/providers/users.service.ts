import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from '../../auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    //Injecting the AuthService class
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  //Find all users
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {

    const isAuth = this.authService.isAuth();
    console.log('isAuth', isAuth);
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Jane',
        email: 'jane@austin.com',
      },
    ];
  }

  //Find a user by id

  public findOneById(id: string) {
    return {
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
