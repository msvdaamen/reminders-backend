import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, ObjectType} from "@nestjs/graphql";


@ObjectType()
@Entity({name: 'users'})
export class User {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field({nullable: true})
    @Column()
    name: string;

    @Field()
    @Column()
    username: string

    @Column()
    password: string
}
