import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?') // you can use any keyword for optional as long as you place a ? at the end.
  public getUsers(@Param() params: any, @Query() query: any) {
    const id: number = params.id;
    const optional: string = params.optional;
    return `You sent a get request to users endpoint with id: ${id},
    with an optional parameter of ${optional},
    and the query parameter is limit: ${query.limit} and offset: ${query.offset}`;
  }

  @Post()
  public createUsers(@Body() body: any) {
    console.log(body);
    return 'You sent a post request to users endpoint';
  }
}
