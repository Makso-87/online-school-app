import { InputType, Field } from "type-graphql";
import { BaseInput } from "./BaseInput";

@InputType()
export class TokenInput extends BaseInput {
  @Field({ nullable: true })
  hash?: string;
}
