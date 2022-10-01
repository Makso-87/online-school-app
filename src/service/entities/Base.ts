import { v4 as uuid } from "uuid";
import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";

@Entity()
@ObjectType()
export class Base {
  @PrimaryColumn()
  @Field(() => String)
  public id: string = uuid();

  @CreateDateColumn({ type: "timestamptz" })
  @Field()
  public createdAt?: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  @Field()
  public updatedAt?: Date;

  @DeleteDateColumn({ type: "timestamptz" })
  @Field()
  public deletedAt?: Date;
}
