import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";

@InputType()
export class RegisterInput {

    @IsNotEmpty()
    @Field()
    username: string;

    @IsNotEmpty()
    @Field()
    password: string;

    @IsNotEmpty()
    @Field()
    passwordConfirmation: string;

}
