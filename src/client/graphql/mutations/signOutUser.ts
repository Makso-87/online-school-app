import { gql } from "@apollo/client";

export const signOutUser = gql`
  mutation signOutUser {
    signOut
  }
`;
