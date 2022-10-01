import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { Base } from "./Base";

@Entity()
@ObjectType()
export class UserType extends Base {
  @Column()
  @Field()
  name!: string;
}
