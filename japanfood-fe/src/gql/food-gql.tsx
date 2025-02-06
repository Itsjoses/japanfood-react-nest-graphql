import { gql } from "@apollo/client";

export const GET_FOODS = gql`
  query {
    findAllFood {
      name
      price
      image
      foodType {
        name
      }
    }
  }
`;
