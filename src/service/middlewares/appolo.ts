import { ApolloServer } from "apollo-server-express";
import { createGraphqlSchema, GraphqlContext } from "../graphql";

export const createApolloServer = async () => {
  const apollo = new ApolloServer({
    plugins: [],
    schema: await createGraphqlSchema(),
    context: ({ req, res }): GraphqlContext => {
      const { user } = <any>req;

      return {
        req,
        res,
        user,
      };
    },
  });

  await apollo.start();

  return apollo;
};
