import { GraphQLClient } from "graphql-request";
import { getCookie } from "./cookies";

export const graphQLClient = new GraphQLClient("http://localhost:5000", {
  headers: {
    get authorization() {
      return getCookie("authorization");
    },
  },
});
