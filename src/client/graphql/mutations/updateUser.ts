import { gql } from "@apollo/client";

export const updateUser = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      firstName
      middleName
      lastName
      avatar
      phoneNumber
    }
  }
`;
