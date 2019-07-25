import Modal from './modal';

const ModalError = (content) => {
  return Modal.fire({
    width: 'auto',
    text: content,
    type: 'error',
  });
};

export default ModalError;
