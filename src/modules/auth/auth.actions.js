import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';
import Auth0 from 'auth0-js';


const {
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
  responseType: 'token id_token',
  redirectUri: `${window.location.origin}/auth/callback`,
});

const databaseConnection = REACT_APP_AUTH_DATABASE;

export const AuthLoginWithGoogle =() => {
  auth0.authorize({
    connection: 'googole-oauth2',
  });
};

export const AuthLogin = (email, password) => {
  console.log(auth0);
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
    }));
  } catch (e) {
    console.log(e.message);
  }
};

export const AuthSingUp = (username, email, password) => {
  console.log(auth0.signup);
  try {
    auth0.signup({
      client_id: REACT_APP_CLIENT_ID,
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

export const SendCodeForgotPassword = (email) => {
  try {
    console.log(auth0.passwordlessStart);
    auth0.passwordlessStart({
      connection: databaseConnection,
      email: email,
      send: 'code',
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
