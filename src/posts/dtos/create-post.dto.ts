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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreatePostDto {
  @ApiProperty({
    description: 'This is the title for the blog post.',
  })
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: "Possible values: 'post', 'page', 'story', 'series'",
    enum: postType,
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  @ApiProperty({
    description: "For example - 'my-first-post'",
    example: 'my-first-post',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'A slug should be all lower case and contain hyphens (kebab-case)',
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description: "Possible values: 'draft', 'published', 'scheduled', 'review'",
  })
  @IsEnum(postStatus)
  status: postStatus;

  @ApiPropertyOptional({
    description: 'This is the content for the blog post.',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description:
      'Serialize your JSON object else a validation error will occur',
    example:
      '{\r\n    "@context": "https://schema.org",\r\n    "@type": "Person"\r\n  }',
  })
  @IsString()
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'This is the feature image for the blog post',
    example: 'https://example.com/image.jpg',
  })
  @IsString()
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'This is the date the blog post was published',
    example: '2021-01-01T00:00:00.000Z',
  })
  @IsISO8601()
  @IsOptional()
  publishedOn: Date;

  @ApiPropertyOptional({
    description: 'An array of tags passed as string values',
    example: ['nestjs', 'typescript'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true }) //specifies to the class validator that each item in the array should be a string
  @MinLength(1, { each: true }) //specifies to the class validator that each item in the array should have a minimum length of 1
  tags: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'The key can be any string identifier for your meta option',
          example: 'sidebarEnabled',
        },
        value: {
          type: 'any',
          description: 'Any value that you want to save to the key.',
          example: true,
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
