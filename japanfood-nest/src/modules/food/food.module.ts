import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodResolver } from './food.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [FoodResolver, FoodService],
    exports: [FoodService],
})
export class FoodModule {}
