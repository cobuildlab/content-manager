import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';
import Auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';


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

const options = {
  loginAfterSignUp: false,
  responseType: 'id_token',
};

const auth0lock = new Auth0Lock(REACT_APP_CLIENT_ID, REACT_APP_DOMAIN, options);
const auth0 = new Auth0.WebAuth({
  clientID: REACT_APP_CLIENT_ID,
  domain: REACT_APP_DOMAIN
});

const databaseConnection = REACT_APP_AUTH_DATABASE;
export const AuthLogin = (email, password) => {
  console.log(auth0);
  console.log(auth0.login);
  try {
    auth0.login({
      rml: databaseConnection,
      username: email,
      password: password,
    },
    ((err, authResult) => {
      if(err){
        console.log(err);
      } else {
        console.log(authResult);
      }
    }));
  } catch (e) {
    console.log(e.message);
  }
};

export const AuthSingUp = (username, email, password) => {
  console.log(auth0.signup);
  console.log(auth0lock);
  try {
    auth0.signup({
      connection: databaseConnection,
      email: email,
      password: password,
      username: username
    },
    ((err) => {
      if(err){
        console.log(err);
      } else {
        console.log('funciono');
      }
    }));
  } catch (e) {
    console.log(e.message);
  }
};
