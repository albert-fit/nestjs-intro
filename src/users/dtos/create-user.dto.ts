import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(96)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MinLength(3)
  @MaxLength(96)
  @IsOptional()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).*$/, {
    message:
      'Minimum eight characters, at least one letter, one number and one special character',
  })
  @IsNotEmpty()
  password: string;
}
