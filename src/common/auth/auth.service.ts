import { Injectable } from '@nestjs/common';
import bcrypt = require('bcryptjs');
import {RegisterDto} from "./dto/register.dto";
import {JwtService} from '@nestjs/jwt';
import {User} from "../database/entities/user.entity";
import {UserService} from "../../user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string) {
        const user = await this.usersService.findOne(username);
        if (user) {
            const correct = await bcrypt.compare(password, user.password);
            if (correct) {
                return user;
            }
        }
        return null;
    }

    async login(user: User) {
        const payload = {
            id: user.id,
            name: user.name,
            username: user.username
        };
        const token = this.jwtService.sign(payload);
        return {
            user,
            accessToken: token
        };
    }

    async register(registerDto: RegisterDto) {
        const hashed = bcrypt.hashSync(registerDto.password, 10);
        const user = await this.usersService.create({username: registerDto.username, password: hashed});

        const payload = {
            id: user.id,
            name: user.name,
            username: user.username
        };
        const token = this.jwtService.sign(payload);
        return {
            user: payload,
            accessToken: token
        };
    }

    async me(user: User) {
        const payload = {
            id: user.id,
            name: user.name,
            username: user.username
        };
        const token = this.jwtService.sign(payload);
        return {
            user: payload,
            accessToken: token
        };
    }
}
