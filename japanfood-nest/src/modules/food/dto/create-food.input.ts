import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { FoodType } from 'src/modules/food-type/entities/food-type.entity';

@InputType()
export class CreateFoodInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name!: string;

    @Field()
    @IsString()
    @IsNumber()
    price!: number;

    @Field()
    @IsString()
    @IsNotEmpty()
    image!: string;
}
