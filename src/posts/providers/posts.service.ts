import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../post.entity';
@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
    /**
     * Inject the Posts Repository to perform CRUD operations.
     */
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}
  public findAll(userId: string) {
    //Users Service
    //Find a user by ID
    const user = this.usersService.findOneById(userId);
    console.log(user);
    return [
      {
        user: user,
        title: 'Post 1',
        content: 'Content 1',
      },
      {
        user: user,
        title: 'Post 2',
        content: 'Content 2',
      },
    ];
  }

  public async createPost(createPostDto: CreatePostDto) {
    // const existingPost = await this.postsRepository.findOne({
    //   where: { title: createPostDto.title },
    // });
    let newPost = this.postsRepository.create(createPostDto);
    newPost = await this.postsRepository.save(newPost);

    return newPost;
  }
}
