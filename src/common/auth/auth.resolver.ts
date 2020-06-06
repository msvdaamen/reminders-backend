import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {AuthService} from "./auth.service";
import {UseGuards} from "@nestjs/common";
import {LoginInput} from "./input/login.input";
import {GqlAuthGuard} from "./GqlAuthGuard";
import {CurrentUser} from "../../decorators/current-user";
import {User} from "../database/entities/user.entity";
import {RegisterInput} from "./input/register.input";
import {AuthUser} from "./auth.user";

@Resolver(AuthUser)
export class AuthResolver {

    constructor(
        private readonly authService: AuthService
    ) {}

    @Query(() => AuthUser)
    @UseGuards(GqlAuthGuard)
    async me(@CurrentUser() user: User) {
        return  this.authService.me(user);
    }

    @Mutation(() => AuthUser)
    async login(@Args('loginInput') { username, password }: LoginInput) {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw Error('Email or password incorrect');
        }
        return this.authService.login(user);
    }

    @Mutation(() => AuthUser)
    async register(@Args('registerInput') { username, password, passwordConfirmation }: RegisterInput) {
        if (passwordConfirmation !== password) {
            throw Error('Password do not math');
        }
        return this.authService.register({username, password})
    }
}
