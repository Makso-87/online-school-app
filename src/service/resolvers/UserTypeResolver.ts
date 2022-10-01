import { Query } from "type-graphql";
import { db } from "../middlewares/db";
import { UserType } from "../entities/UserType";

export class UserTypeResolver {
  @Query(() => [UserType])
  async userTypes() {
    return db.manager.find(UserType);
  }
}
