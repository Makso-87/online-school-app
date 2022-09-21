import { Field, InputType } from "type-graphql";

@InputType()
export class BaseInput {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  createdAt!: Date;

  @Field({ nullable: true })
  updatedAt!: Date;

  @Field({ nullable: true })
  deletedAt!: Date;
}
