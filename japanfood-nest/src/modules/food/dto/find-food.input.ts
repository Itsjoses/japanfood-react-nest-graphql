import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { FoodType } from 'src/modules/food-type/entities/food-type.entity';

@InputType()
export class FindFoodInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    category!: string;
}
