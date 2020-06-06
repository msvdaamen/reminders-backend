import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersResolver} from "./user.resolver";
import {User} from "../common/database/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
      UserService,
      UsersResolver
  ],
  exports: [
      UserService
  ]
})
export class UserModule {}
