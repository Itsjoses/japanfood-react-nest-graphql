import { Field, ObjectType } from '@nestjs/graphql';
import { FoodType } from 'src/modules/food-type/entities/food-type.entity';

@ObjectType()
export class Food {
    @Field()
    name: string;
    @Field()
    price: number;
    @Field()
    image: string;
    @Field(() => FoodType)
    foodType: FoodType;
}
