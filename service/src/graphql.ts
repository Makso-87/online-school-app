import { UserResolver } from "./resolvers/UserResolver";
import { User } from "./entities/User";
import express from "express";
import { AuthChecker, buildSchema } from "type-graphql";
import { UserTypeResolver } from "./resolvers/UserTypeResolver";
import { TokenResolver } from "./resolvers/TokenResolver";

const authChecker: AuthChecker<GraphqlContext> = ({ context }, roles) => {
  if (!context.user) {
    return false;
  }

  if (!roles.length) {
    return true; // No roles specified
  }

  return context.user.roles.some((role) => roles.includes(role.code));
};

export const createGraphqlSchema = async () =>
  buildSchema({
    resolvers: [UserResolver, UserTypeResolver, TokenResolver],
    authChecker,
  });

export type GraphqlContext = {
  req: express.Request;
  res: express.Response;
  // user that made request (null if not authorized)
  user?: User;
};
