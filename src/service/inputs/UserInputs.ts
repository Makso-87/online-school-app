import { Field, InputType } from "type-graphql";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

@InputType()
export class UserSignInInput {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  password!: string;
}

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  email!: string;

  @IsNotEmpty()
  @Field(() => String)
  password!: string;

  @IsNotEmpty()
  @Field(() => String)
  type!: string;

  @IsNotEmpty()
  @Field(() => [String])
  roles!: string[];

  @Length(0, 60)
  @Field()
  firstName: string = "";

  @Length(0, 60)
  @Field()
  lastName: string = "";

  @Length(0, 60)
  @Field()
  middleName: string = "";
}

@InputType()
export class UpdateUserInput {
  @IsNotEmpty()
  @Field(() => String, { defaultValue: "" })
  id!: string;

  @Field()
  avatar: string = "";

  @Length(0, 60)
  @Field()
  firstName: string = "";

  @Length(0, 60)
  @Field()
  lastName: string = "";

  @Length(0, 60)
  @Field()
  middleName: string = "";

  @Field()
  phoneNumber: string = "";
}

@InputType()
export class UserCheckEmailInput {
  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  email!: string;
}

@InputType()
export class UserByTypeInput {
  @IsNotEmpty()
  @Field(() => String, { defaultValue: "" })
  type!: string;
}

@InputType()
export class UserInput {
  @IsNotEmpty()
  @Field(() => String, { defaultValue: "" })
  id!: string;
}

@InputType()
export class UserDeleteInput {
  @Field(() => [String])
  ids!: string[];
}
