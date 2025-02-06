import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../modules/user/user.service';
import { CreateUserInput } from '../modules/user/dto/create-user.input';
import { UserSignResponse } from 'src/modules/user/entities/user-sign-response.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { UpdateUserInput } from 'src/modules/user/dto/update-user.input';

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(() => UserSignResponse)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.userService.create(createUserInput);
    }

    @Query(() => UserSignResponse)
    loginUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.userService.login(createUserInput);
    }

    @Query(() => [User])
    findAllUser() {
        return this.userService.findAll();
    }

    @Mutation(() => User)
    updateUser(@Args('id') id: number, @Args('updateUserInput') updateUserInput: UpdateUserInput) {
        return this.userService.update(id, updateUserInput);
    }

    @Mutation(() => User)
    removeUser(@Args('id') id: number) {
        return this.userService.remove(id);
    }
}
