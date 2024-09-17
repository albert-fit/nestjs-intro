import {
  IsString,
  IsEnum,
  IsDateString,
  IsArray,
  IsOptional,
  IsObject,
} from 'class-validator';
import { postType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
export class CreatePostDto {
  @IsString()
  title: string;

  @IsEnum(postType)
  postType: postType;

  @IsString()
  slug: string;

  @IsEnum(postStatus)
  status: postStatus;

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
  metaOptions: [{ key: 'sidebarEnabled'; value: true }];
}
