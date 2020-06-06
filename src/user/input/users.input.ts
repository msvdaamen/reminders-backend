import {Field, InputType, Int} from "@nestjs/graphql";

@InputType()
export class UsersInput {

    @Field(type => Int, {nullable: true})
    limit: number;

    @Field(type => String, {nullable: true})
    order: string;

    @Field(type => Boolean, {nullable: true})
    asc: boolean;

    @Field(type => String, {nullable: true})
    search: string;
}
