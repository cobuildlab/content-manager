import gql from 'graphql-tag';

export const CREATE_USER_QUERY = gql`
  mutation($user: UserCreateInput!, $password: String!, $authId: ID!) {
    userSignUpWithPassword(user: $user, password: $password, authProfileId: $authId) {
      id
      email
    }
  }
`;
