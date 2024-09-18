import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiTags, ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  /**
   * Inject the Users Service to access the business logic.
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * The method to get users from the database.
   */
  @Get('/:id?') // you can use any keyword for optional as long as you place a ? at the end.
  @ApiOperation({ summary: 'Fetches a list of users.' })
  @ApiResponse({
    status: 200,
    description: 'The list of users has been successfully fetched.',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description:
      'The position of the page number that you want the API to return',
    example: 1,
  })

  /**
   * The method to get all users from the database.
   */
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  /**
   * The method to create a user in the database.
   */
  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(typeof createUserDto);
    return 'You sent a post request to users endpoint';
  }

  /**
   * The method to amend user details in the database.
   */
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
