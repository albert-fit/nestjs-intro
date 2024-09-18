import { Body, Controller, Get, Param, Post, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostDto } from './dtos/patch-post.dto';

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

  @ApiOperation({ summary: 'This api endpoint creates a new blog post.' })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully.',
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(typeof createPostDto);
    return this.postsService.createPost(createPostDto);
  }

  @ApiOperation({ summary: 'This api endpoint updates an existing blog post.' })
  @ApiResponse({
    status: 202,
    description: 'You get a 200 response if your post is updated successfully.',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }
}
