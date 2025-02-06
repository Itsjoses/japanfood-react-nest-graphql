import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FoodService } from './food.service';
import { CreateFoodInput } from './dto/create-food.input';
import { UpdateFoodInput } from './dto/update-food.input';
import { Food } from './entities/food.entity';
import { FindFoodInput } from './dto/find-food.input';

@Resolver('Food')
export class FoodResolver {
    constructor(private readonly foodService: FoodService) {}

    @Mutation(() => Food)
    createFood(@Args('createFoodInput') createFoodInput: CreateFoodInput, @Args('foodTypeId') id: number) {
        return this.foodService.create(createFoodInput, id);
    }

    @Query(() => [Food])
    findAllFood() {
        return this.foodService.findAll();
    }

    @Query(() => [Food])
    findSelectedFood(@Args('findFoodInput') findFoodInput: string) {
        return this.foodService.findSelectedFood(findFoodInput);
    }
}
