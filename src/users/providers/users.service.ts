import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from '../../auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../users.entity';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * Class to connect to Users table and perform business operations.
 */

@Injectable()
export class UsersService {
  /**
   * Inject the Auth Service circular dependency to check if a user is authenticated.
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    /**
     * Inject the Users Repository to perform CRUD operations.
     */
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /**
   * The method to get all users from the database.
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log('isAuth', isAuth);
    console.log('getUsersParamDto', getUsersParamDto);
    console.log('limit', limit);
    console.log('page', page);
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

  /**
   * The method to get a user by id from the database.
   */
  public findOneById(id: string) {
    console.log('id', id);
    return {
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
