import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../common/database/entities/user.entity";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({where: {username}});
    }

    async findAll({limit, order, asc, search} = {limit: undefined, order: undefined, asc: true, search: undefined}) {
        // if (order && order.column && order.type) {
        //     options.order = {
        //         [order.column]: order.type
        //     }
        // }

        const userQuery = this.userRepository
            .createQueryBuilder('users');
        if (search) {
            userQuery.where('users.name LIKE :search', {search: `%${search}%`});
            userQuery.orWhere('users.username LIKE :search', {search: `%${search}%`});
        }
        if (limit) {
            userQuery.limit(limit);
        }
        if (order) {
            userQuery.orderBy(`users.${order}`, asc ? 'ASC' : 'DESC');
        }
        console.log(userQuery.getSql());
        return await userQuery.getMany();
    }

    async find(userId: number) {
        return this.userRepository.findOne({where: {id: userId}});
    }


    async create(user: Partial<User>) {
        return this.userRepository.save(user);
    }

}
