import { CreateFoodInput } from './create-food.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFoodInput extends PartialType(CreateFoodInput) {
    id: number;
}
