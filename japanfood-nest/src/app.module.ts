import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { UserResolver } from './api/user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FoodTypeModule } from './modules/food-type/food-type.module';
import { FoodModule } from './modules/food/food.module';
import { FoodTypeResolver } from './api/food-type.resolver';
import { FoodResolver } from './modules/food/food.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
        }),
        UserModule,
        FoodTypeModule,
        FoodModule,
    ],
    controllers: [],
    providers: [UserResolver, FoodTypeResolver, FoodResolver],
})
export class AppModule {}
