import { gql } from "@apollo/client";

export const updateUserPassword = gql`
  mutation updateUserPassword($input: UpdateUserPasswordInput!) {
    updateUserPassword(input: $input) {
      id
      email
    }
  }
`;
