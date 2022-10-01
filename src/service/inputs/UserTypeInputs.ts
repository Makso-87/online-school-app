import { Field, InputType } from "type-graphql";

@InputType()
export class UserTypeInput {
  @Field(() => String)
  name!: string;
}
