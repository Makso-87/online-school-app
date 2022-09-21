import { Field, InputType } from "type-graphql";
import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { BaseInput } from "./BaseInput";

// @InputType()
// export class CreateTeacherInput {
//   @IsNotEmpty()
//   @IsEmail()
//   @Field(() => String)
//   email!: string;
//
//   @IsNotEmpty()
//   @Field(() => String)
//   password!: string;
//
//   @Length(2, 60)
//   @Field()
//   firstName: string = "";
//
//   @Length(0, 60)
//   @Field()
//   lastName: string = "";
//
//   @Length(0, 60)
//   @Field()
//   middleName: string = "";
// }
