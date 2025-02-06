import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from '../../api/user.resolver';
import { PrismaModule } from 'src/database/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        PrismaModule,
        JwtModule.register({
            global: true,
            secret: 'nestjs',
            signOptions: { expiresIn: '2h' },
        }),
    ],
    providers: [UserResolver, UserService],
    exports: [UserService],
})
export class UserModule {}
