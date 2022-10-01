import { gql } from "@apollo/client";

export const createUser = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      type
    }
  }
`;
