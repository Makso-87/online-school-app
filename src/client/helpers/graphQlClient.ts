import { GraphQLClient } from "graphql-request";
import { getCookie } from "./cookies";
import { SERVICE_HOST } from "../../service/env";

console.log("SERVICE_HOST", SERVICE_HOST);

export const graphQLClient = new GraphQLClient("http://localhost:5000", {
  headers: {
    get authorization() {
      return getCookie("authorization");
    },
  },
});
