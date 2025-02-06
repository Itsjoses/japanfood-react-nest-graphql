import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
    @Field()
    @IsEmail()
    @IsNotEmpty()
    email?: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    username?: string;

    @Field()
    @MinLength(6)
    @IsString()
    @IsNotEmpty()
    password?: string;
}
