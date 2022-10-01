import { Column, Entity, ManyToMany } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Base } from "./Base";
import { User } from "./User";

@Entity()
@ObjectType()
export class Role extends Base {
  @Column()
  @Field()
  code!: string;

  @ManyToMany(() => User, (user) => user.roles)
  @Field(() => User)
  users?: User[];
}
