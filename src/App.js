import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { EightBaseAppProvider } from '@8base/app-provider';
import { AsyncContent, EightBaseBoostProvider } from '@8base/boost';
import { ToastContainer, toast } from 'react-toastify';
import { auth0WebClient } from './modules/auth/auth.actions';
import { TOAST_SUCCESS_MESSAGE } from './shared/constants';
import LandingView from './modules/landingpage/LandingView';


const { REACT_APP_8BASE_API_ENDPOINT } = process.env;

const renderContent = () => {
  return(
    <AsyncContent stretch>
      <Switch>
        <Route path='/home' component={LandingView} />

        <Route render={() => <Redirect to={'/home'} />} />
      </Switch>
    </AsyncContent>
  );
};

const onRequestSuccess = ({ operation }) => {
  console.log(operation);
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
