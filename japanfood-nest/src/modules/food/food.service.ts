import { Injectable } from '@nestjs/common';
import { CreateFoodInput } from './dto/create-food.input';
import { UpdateFoodInput } from './dto/update-food.input';
import { PrismaService } from 'src/database/prisma.service';
import { Food } from '@prisma/client';
import { FindFoodInput } from './dto/find-food.input';

@Injectable()
export class FoodService {
    constructor(private prisma: PrismaService) {}

    create(createFoodInput: CreateFoodInput, id: number) {
        const { name, price, image } = createFoodInput;
        return this.prisma.food.create({
            data: {
                name,
                price,
                image,
                foodType: {
                    connect: {
                        id: id,
                    },
                },
            },
            include: {
                foodType: true,
            },
        });
    }

    findAll() {
        return this.prisma.food.findMany({
            include: {
                foodType: true,
            },
        });
    }

    findSelectedFood(findFoodInput: string) {
        return this.prisma.food.findMany({
            include: {
                foodType: true,
            },
            where: {
                foodType: {
                    name: findFoodInput,
                },
            },
        });
    }
}
