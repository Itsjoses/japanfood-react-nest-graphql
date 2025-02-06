import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class FoodType {
    @Field()
    id: number;
    @Field()
    name: String;
}
