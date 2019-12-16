import { WebAuth0AuthClient } from "@8base/web-auth0-auth-client";
import Auth0 from "auth0-js";
import Auth0Lock from "auth0-lock";
import { error, log } from "pure-logger";
import ModalSuccess from "../../components/modalAlerts/modalSuccess";
import ModalError from "../../components/modalAlerts/modalError";
import * as jwtToken from "jwt-decode";
import {
  authStore,
  ON_APOLLO_CLIENT,
  On_ERROR_USER,
  On_CREATE_USER
} from "./authStore";
import { CURRENT_USER_QUERY, USER_SIGN_UP_MUTATION } from "./querys";
import Flux from "@cobuildlab/flux-state";
import { Client } from "@8base/api-client";

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  REACT_APP_AUTH_DATABASE,
  REACT_APP_8BASE_API_ENDPOINT,
  REACT_APP_AUTH_PROVIDER_ID
} = process.env;

const client = new Client(REACT_APP_8BASE_API_ENDPOINT);

export const auth0WebClient = new WebAuth0AuthClient({
  domain: REACT_APP_DOMAIN,
  clientId: REACT_APP_CLIENT_ID,
  redirectUri: `${window.location.origin}/auth/callback`,
  logoutRedirectUri: `${window.location.origin}/home`
});

const options = {
  loginAfterSignUp: false,
  auth: {
    redirectUrl: `${window.location.origin}/auth/callback`,
    responseType: "token id_token"
  },
  params: {
    scope: "openid email"
  }
};

const auth0lock = new Auth0Lock(REACT_APP_CLIENT_ID, REACT_APP_DOMAIN, options);

const auth0 = new Auth0.WebAuth({
  clientID: REACT_APP_CLIENT_ID,
  domain: REACT_APP_DOMAIN,
  responseType: "token id_token",
  redirectUri: `${window.location.origin}/auth/callback`
});

const databaseConnection = REACT_APP_AUTH_DATABASE;

export const AuthLoginWithGoogle = () => {
  auth0.authorize({
    connection: "googole-oauth2"
  });
};

export const AuthLogin = () => {
  try {
    auth0lock.show({
      initialScreen: "login"
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const AuthSingUp = async (username, email, password) => {
  try {
    await auth0.signup(
      {
        connection: databaseConnection,
        email: email,
        password: password,
        nickname: username
      },
      err => {
        if (err) {
          error(" error in the signup: ", err);
          ModalError(err.description);
        } else {
          log("funciono");
          ModalSuccess("User created successfully", "/home", "");
        }
      }
    );
  } catch (e) {
    console.log(e.message);
  }
};

export const ForgotPassword = email => {
  try {
    console.log(auth0.passwordlessStart);
    auth0.changePassword(
      {
        connection: databaseConnection,
        email: email
      },
      (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          console.log(resp);
        }
      }
    );
  } catch (e) {
    console.log(e.message);
  }
};

export const createUserWithToken = async ({ token, idToken }) => {
  console.log("TOKEN: fron create user", token);
  const { email } = jwtToken(token);
  console.log("EMAIL fron create user", email);

  client.setIdToken(idToken);
  /**
   * Check if user exists in 8base.
   */
  try {
    await client.request(CURRENT_USER_QUERY);
  } catch {
    /**
     * If user doesn't exist, an error will be
     * thrown, which then the new user can be
     * created using the authResult values.
     */
    await client.request(USER_SIGN_UP_MUTATION, {
      user: { email: email },
      authProfileId: REACT_APP_AUTH_PROVIDER_ID
    });
  }
};
