import { gql } from "@apollo/client";

export const GET_REGISTRATIONS = gql`
  query {
    registrations {
      parentFirstName
      parentLastName
      parentEmail
      address
      city
      homeChurch
    }
  }
`;

export const REGISTRATION_TOURNAMENT = gql`
  mutation RegisterTournament($input: RegisterTournamentInput!) {
    registerTournament(registerTournamentInput: $input) {
      id
      payPlan
      homeChurch
    }
  }
`;
