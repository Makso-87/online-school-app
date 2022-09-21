import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Base } from "./Base";
import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity()
@ObjectType()
export class Token extends Base {
  @PrimaryColumn()
  @Field()
  hash: string = uuid();

  @Column()
  userId!: string;

  @ManyToOne(() => User, (user) => user.token)
  user!: User;
}
