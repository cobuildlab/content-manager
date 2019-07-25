import {
  CREATE_USER_QUERY,
} from './queries';
import { WebAuth0AuthClient } from '@8base/web-auth0-auth-client';
import Auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import ApolloClient from 'apollo-boost';
import {error, log} from 'pure-logger';
import ModalSuccess from '../../components/modalAlerts/modalSuccess';
import ModalError from '../../components/modalAlerts/modalError';

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  REACT_APP_AUTH_DATABASE,
  REACT_APP_AUTH_PROVIDER_ID,
  REACT_APP_8BASE_API_ENDPOINT,
} = process.env;

//conect 8base authenticated
export const auth0WebClient = new WebAuth0AuthClient({
  domain: REACT_APP_DOMAIN,
  clientId: REACT_APP_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/home`,
});

const options = {
  loginAfterSignUp: false,
  auth: {
    redirectUrl: `${window.location.origin}/auth/callback`,
    responseType: 'token id_token'
  },
  params: {
    scope: 'openid email'
  }
};

//conect auth0-lock
const auth0lock = new Auth0Lock(REACT_APP_CLIENT_ID, REACT_APP_DOMAIN, options);

//conect auth0 js sdk
const auth0 = new Auth0.WebAuth({
  clientID: REACT_APP_CLIENT_ID,
  domain: REACT_APP_DOMAIN,
  responseType: 'token id_token',
  redirectUri: `${window.location.origin}/auth/callback`,
});

const databaseConnection = REACT_APP_AUTH_DATABASE;

// log in with google
export const AuthLoginWithGoogle =() => {
  auth0.authorize({
    connection: 'google-oauth2',
  });
};

// show screen of login
export const AuthLogin = () => {
  try {
    auth0lock.show({
      initialScreen: 'login'
    });
  } catch (e) {
    console.log(e.message);
  }
};


// call function of signup of auth0 js
export const AuthSingUp = async(username, email, password) => {
  try {
    await auth0.signup({
      connection: databaseConnection,
      email: email,
      password: password,
      nickname: username
    },
    (async (err) => {
      if(err){
        error(' error in the signup: ', err);
        ModalError(err.description);
      } else {
        log('funciono');
        await CreateUser(email, password);
        ModalSuccess('User created successfully', '/home', '');
      }
    }));
  } catch (e) {
    console.log(e.message);
  }
};


// send email for the change of password by auth0 js sdk
export const ForgotPassword = (email) => {
  try {
    console.log(auth0.passwordlessStart);
    auth0.changePassword({
      connection: databaseConnection,
      email: email,
    },
    ((err, resp) => {
      if(err){
        console.log(err);
      } else {
        console.log(resp);
      }
    }));
  } catch (e) {
    console.log(e.message);
  }
};

//create user for 8base
export const CreateUser = async(email, password) => {
  const client = new ApolloClient({
    uri: REACT_APP_8BASE_API_ENDPOINT,
  });

  const data = {
    user: { email },
    password,
    authId: REACT_APP_AUTH_PROVIDER_ID,
  };
  let response;
  try {
    response = await client.mutate({
      mutation: CREATE_USER_QUERY,
      variables: data,
    });
  } catch (e) {
    error('createUser', e);
  }
  log('createUser', response);
};
