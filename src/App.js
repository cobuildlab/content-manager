import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { EightBaseAppProvider } from '@8base/app-provider';
import { AsyncContent, EightBaseBoostProvider } from '@8base/boost';
import { ToastContainer, toast } from 'react-toastify';
import { auth0WebClient } from './modules/auth/auth.actions';
import { TOAST_SUCCESS_MESSAGE } from 'shared/constants';


const { REACT_APP_8BASE_API_ENDPOINT } = process.env;

const onRequestSuccess = ({ operation}) => {
  const message = operation.getContext()[TOAST_SUCCESS_MESSAGE];

  if (message) {
    toast.success(message);
  }
};

function Main() {
  return (
    <BrowserRouter>
      <EightBaseBoostProvider>
        <EightBaseAppProvider
          uri={REACT_APP_8BASE_API_ENDPOINT}
          authClient={auth0WebClient}
          onRequestSuccess={onRequestSuccess}
        >
        </EightBaseAppProvider>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </EightBaseBoostProvider>
    </BrowserRouter>
  );
}

export default Main;
