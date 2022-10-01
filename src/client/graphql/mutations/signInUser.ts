import { gql } from "@apollo/client";

export const signInUser = gql`
  mutation signInUser($input: UserSignInInput!) {
    signIn(input: $input) {
      id
      token {
        hash
      }
    }
  }
`;
