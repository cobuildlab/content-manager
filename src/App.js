import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { EightBaseAppProvider } from '@8base/app-provider';
import { AsyncContent, EightBaseBoostProvider } from '@8base/boost';
import { ToastContainer, toast } from 'react-toastify';
import { auth0WebClient } from './modules/auth/auth.actions';
import { TOAST_SUCCESS_MESSAGE } from './shared/constants';
import LandingView from './modules/landingpage/LandingView';
import ForgotPasswordView from './modules/landingpage/forgotPassword/ForgotPasswordView';
import LoginView from './modules/landingpage/login/LoginView';
import SingUpView from './modules/landingpage/singup/SingUpView';


const { REACT_APP_8BASE_API_ENDPOINT } = process.env;

const renderContent = () => {
  return(
    <AsyncContent stretch>
      <Switch>
        <Route exact path='/home' component={LandingView} />
        <Route path='/forgotPassword' component={ForgotPasswordView} />
        <Route path='/login' component={LoginView} />
        <Route path='/singup' component={SingUpView} />
      </Switch>
    </AsyncContent>
  );
};

const onRequestSuccess = ({ operation }) => {
  const message = operation.getContext()[TOAST_SUCCESS_MESSAGE];

  if (message) {
    toast.success(message);
  }
};

const App = () => {
  return (
    <Router>
      <EightBaseBoostProvider>
        <EightBaseAppProvider
          uri={REACT_APP_8BASE_API_ENDPOINT}
          authClient={auth0WebClient}
          onRequestSuccess={onRequestSuccess}>
          {renderContent}
        </EightBaseAppProvider>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </EightBaseBoostProvider>
    </Router>
  );
};

export { App };
