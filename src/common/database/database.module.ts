import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'reminders',
            entities: [
                User
            ],
            synchronize: false,
            logging: true,
            logger: 'file'
        })
    ]
})
export class DatabaseModule {}
