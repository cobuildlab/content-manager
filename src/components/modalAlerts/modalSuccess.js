import React, {Fragment} from 'react';
import Modal from './modal';
import {handleRedirect} from '../../shared/redirectPage'

const ModalSuccess = (content, route, state) => {
  return Modal.fire({
    width: 'auto',
    text: content,
    type: 'success',
    onClose: () =>
    {
        handleRedirect(route, state)
    }
  })
};

export default ModalSuccess
