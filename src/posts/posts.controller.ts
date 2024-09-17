import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
@ApiTags('posts')
@Controller('posts')
export class PostsController {
  //Injecting PostsService into the PostsController
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  @ApiOperation({ summary: 'Fetches a list of posts.' })
  @ApiResponse({
    status: 200,
    description: 'The list of posts has been successfully fetched.',
  })
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Creates a new post.' })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
  })
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(typeof createPostDto);
    return this.postsService.createPost(createPostDto);
  }
}
