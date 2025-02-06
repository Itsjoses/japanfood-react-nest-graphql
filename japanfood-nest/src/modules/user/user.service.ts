import { PrismaService } from './../../database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}
    async create(createUserInput: CreateUserInput) {
        const { email, username, password } = createUserInput;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        const payload = { sub: user.id, username: user.username };
        return {
            username: user.username,
            jwt: await this.jwtService.signAsync(payload),
        };
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserInput: UpdateUserInput) {
        const { email, username } = updateUserInput;

        return this.prisma.user.update({
            data: {
                email,
                username,
            },
            where: { id },
        });
    }

    remove(id: number) {
        return this.prisma.user.delete({ where: { id: id } });
    }

    async login(createUserInput: CreateUserInput) {
        const { email, username, password } = createUserInput;
        const user = await this.prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Invalid password');
        }
        const payload = { sub: user.id, username: user.username };
        return {
            username: user.username,
            jwt: await this.jwtService.signAsync(payload),
        };
    }
}
