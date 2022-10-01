import { gql } from "@apollo/client";

export const users = gql`
  query users {
    users {
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
