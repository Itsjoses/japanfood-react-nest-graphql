import { Injectable } from '@nestjs/common';
import { CreateFoodTypeInput } from './dto/create-food-type.input';
import { UpdateFoodTypeInput } from './dto/update-food-type.input';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FoodTypeService {
    constructor(private prisma: PrismaService) {}
    create(createFoodTypeInput: CreateFoodTypeInput) {
        return this.prisma.foodType.create({ data: createFoodTypeInput });
    }

    findAll() {
        return this.prisma.foodType.findMany({});
    }

    findOne(id: number) {
        return `This action returns a #${id} foodType`;
    }

    update(id: number, updateFoodTypeInput: UpdateFoodTypeInput) {
        return this.prisma.foodType.update({
            data: updateFoodTypeInput,
            where: { id },
        });
    }

    remove(id: number) {
        return this.prisma.food.delete({
            where: { id },
        });
    }
}
