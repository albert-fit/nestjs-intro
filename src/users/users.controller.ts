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
  Headers,
  Ip,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?') // you can use any keyword for optional as long as you place a ? at the end.
  public getUsers(
    @Param('id') id: any,
    params: any,
    @Query('limit') limit: any,
    @Query('offset') offset: any,
  ) {
    console.log(limit);
    console.log(offset);
    return `You sent a get request to users endpoint with id: ${id}`;
  }

  @Post()
  public createUsers(
    @Body() body: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(headers);
    console.log(body);
    console.log(ip);
    return 'You sent a post request to users endpoint';
  }
}
