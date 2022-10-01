import { gql } from "@apollo/client";

export const user = gql`
  query user($input: UserInput!) {
    user(input: $input) {
      id
      type
      email
      phoneNumber
      avatar
      firstName
      middleName
      lastName
    }
  }
`;
