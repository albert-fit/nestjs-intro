import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('posts')
@Controller('posts')
export class PostsController {
  //Injecting PostsService into the PostsController
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }
}
