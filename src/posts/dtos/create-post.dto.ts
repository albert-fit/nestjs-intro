import {
  IsString,
  IsEnum,
  IsDateString,
  IsArray,
  IsOptional,
  IsObject,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  @IsEnum(['post', 'page', 'story', 'series'])
  postType: string;

  @IsString()
  slug: string;

  @IsString()
  @IsEnum(['draft', 'scheduled', 'review', 'published'])
  status: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  schema?: string;

  @IsString()
  @IsOptional()
  featuredImageUrl?: string;

  @IsDateString()
  publishedOn: Date;

  @IsArray()
  tags: string[];

  @IsObject()
  metaOptions: [{ key: string }];
}
