import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { postType } from './enums/postType.enum';
import { postStatus } from './enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 512,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: postType,
    nullable: false,
    default: postType.POST,
  })
  postType: postType;

  @Column({
    type: 'varchar',
    length: '256',
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    nullable: false,
    default: postStatus.DRAFT,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema: string;

  @Column({
    type: 'text',
    nullable: true,
    length: 1024,
  })
  featuredImageUrl: string;

  @Column({
    type: 'timestamp', //'datetime' in MySQL
    nullable: true,
  })
  publishedOn: Date;

  /**
   * Work on these during lectures about relationships.
   */
  // @Column({
  //   type: 'varchar',
  //   nullable: true,
  //   array: true,
  // })
  // tags: string[];

  // @Column({
  //   type: 'jsonb',
  //   nullable: true,
  //   array: true,
  // })
  // metaOptions: CreatePostMetaOptionsDto[];
}
