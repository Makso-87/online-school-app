import { gql } from "@apollo/client";

export const usersByType = gql`
  query usersByType($input: UserByTypeInput!) {
    usersByType(input: $input) {
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
