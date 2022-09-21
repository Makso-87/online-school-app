import { gql } from "@apollo/client";

export const getMe = gql`
  query getMe {
    me {
      id
      email
      firstName
      middleName
      lastName
      avatar
      phoneNumber
      type
    }
  }
`;
