import {
  IsString,
  IsEnum,
  IsArray,
  IsOptional,
  IsNotEmpty,
  Matches,
  IsJSON,
  IsUrl,
  IsISO8601,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';
export class CreatePostDto {
  @IsString()
  title: string;

  @IsEnum(postType)
  postType: postType;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'A slug should be all lower case and contain hyphens (kebab-case)',
  })
  slug: string;

  @IsEnum(postStatus)
  status: postStatus;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  @IsJSON()
  schema?: string;

  @IsString()
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @IsISO8601()
  publishedOn: Date;

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) //specifies to the class validator that each item in the array should be a string
  @MinLength(1, { each: true }) //specifies to the class validator that each item in the array should have a minimum length of 1
  tags: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto[];
}
