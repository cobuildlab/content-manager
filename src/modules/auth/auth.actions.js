import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';
import Auth0 from 'auth0-js';


const {
  REACT_APP_AUTH_PROVIDER_ID,
  REACT_APP_8BASE_API_ENDPOINT,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  REACT_APP_AUTH_DATABASE,
} = process.env;


export const auth0WebClient = new WebAuth0AuthClient({
  domain: REACT_APP_DOMAIN,
  clientId: REACT_APP_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/home`,
});

const auth0 = new Auth0.WebAuth({
  clientID: REACT_APP_CLIENT_ID,
  domain: REACT_APP_DOMAIN,
  auth: {
      responseType: 'id_token',
      redirectUrl: `${window.location.origin}/home`,
    },
    theme: {
      logo: `${window.location.origin}/favicon.png`,
      primaryColor: '#3eb7f9',
    },
  })

const databaseConnection = REACT_APP_AUTH_DATABASE;
export const AuthLogin = (email, password) => {
  console.log(auth0);
  console.log(auth0.client);
  try {
      auth0.client.login({
        realm: databaseConnection,
        username: email,
        password: password,
      },
    ((err, authResult) => {
      if(err){
        console.log(err);
      } else {
        console.log(authResult);
      }
    })
  } catch (e) {
    console.log(e.message);
  }
}
