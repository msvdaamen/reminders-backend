import {User} from "../database/entities/user.entity";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class AuthUser {

    @Field()
    user: User;

    @Field()
    accessToken: string;
}
