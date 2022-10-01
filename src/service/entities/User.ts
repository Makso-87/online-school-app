import { Base } from "./Base";
import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Role } from "./Role";
import { Token } from "./Token";

@Entity()
@ObjectType()
export class User extends Base {
  @Column({ default: "" })
  @Field()
  firstName!: string;

  @Column({ default: "" })
  @Field()
  middleName?: string;

  @Column({ default: "" })
  @Field()
  lastName!: string;

  @Column({ unique: true })
  @Field()
  email!: string;

  @Column({ default: "" })
  @Field()
  avatar!: string;

  @Column({ default: "teacher" })
  @Field()
  type!: string;

  @Column({ default: "" })
  @Field()
  phoneNumber!: string;

  @Column()
  @Field()
  password!: string;

  @Field(() => Token)
  token!: Token;

  @OneToMany(() => Token, (userToken) => userToken.user)
  tokens!: Token[];

  @ManyToMany(() => Role, (userRole) => userRole.users)
  @JoinTable({
    name: "user_roles",
  })
  @Field(() => [Role])
  roles!: Role[];
}
