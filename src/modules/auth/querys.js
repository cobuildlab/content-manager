import gql from "graphql-tag";

export const CREATE_USER_QUERY = gql`
  mutation($user: UserCreateInput!, $authId: ID!) {
    userSignUpWithToken(user: $user, authProfileId: $authId) {
      id
      email
    }
  }
`;
