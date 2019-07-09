import React, {Fragment} from 'react';
import Modal from './modal';
import {handleRedirect} from '../../shared/redirectPage'

const ModalError = (content) => {
  return Modal.fire({
    width: 'auto',
    text: content,
    type: 'error',
  })
};

export default ModalError
