import { Module } from '@nestjs/common';
import { FoodTypeService } from './food-type.service';
import { PrismaModule } from 'src/database/prisma.module';
import { FoodTypeResolver } from 'src/api/food-type.resolver';

@Module({
    imports: [PrismaModule],
    providers: [FoodTypeResolver, FoodTypeService],
    exports: [FoodTypeService],
})
export class FoodTypeModule {}
