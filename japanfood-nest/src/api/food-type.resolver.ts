import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateFoodTypeInput } from 'src/modules/food-type/dto/create-food-type.input';
import { UpdateFoodTypeInput } from 'src/modules/food-type/dto/update-food-type.input';
import { FoodType } from 'src/modules/food-type/entities/food-type.entity';
import { FoodTypeService } from 'src/modules/food-type/food-type.service';

@Resolver('FoodType')
export class FoodTypeResolver {
    constructor(private readonly foodTypeService: FoodTypeService) {}

    @Mutation(() => FoodType)
    createFoodType(@Args('createFoodTypeInput') createFoodTypeInput: CreateFoodTypeInput) {
        return this.foodTypeService.create(createFoodTypeInput);
    }

    @Query(() => [FoodType])
    findAll() {
        return this.foodTypeService.findAll();
    }

    @Mutation(() => FoodType)
    updateFoodType(@Args('id') id: number, @Args('updateFoodTypeInput') updateFoodTypeInput: UpdateFoodTypeInput) {
        return this.foodTypeService.update(id, updateFoodTypeInput);
    }

    @Mutation(() => FoodType)
    removeFoodType(@Args('id') id: number) {
        return this.foodTypeService.remove(id);
    }
}
