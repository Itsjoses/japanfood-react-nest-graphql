import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserSignResponse {
    @Field()
    username: string;

    @Field()
    jwt: string;
}
