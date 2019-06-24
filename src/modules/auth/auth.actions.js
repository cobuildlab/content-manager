import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';
import Auth0Lock from 'auth0-lock';


const {
  REACT_APP_AUTH_PROVIDER_ID,
  REACT_APP_8BASE_API_ENDPOINT,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
} = process.env;


export const auth0WebClient = new WebAuth0AuthClient({
  domain: REACT_APP_DOMAIN,
  clientId: REACT_APP_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/home`,
});
