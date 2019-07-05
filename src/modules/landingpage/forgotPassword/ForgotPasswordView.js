import React, {Fragment, useState} from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Col, Row} from 'reactstrap';
import EmailForgotPasswordForm from './components/emailForgotPasswordForm';
import CodeValidationForgotPasswordForm from './components/codeValidationForgotPasswordForm';
import NewPasswordForgotPasswordForm from './components/newPasswordForgotPasswordForm';
import SuccessForgotPasswordForm from './components/successForgotPasswordForm';


const ForgotPasswordView = () => {
  const [stepForm, setStepForm] = useState({step: 1, content: ''});
  const [forgotPasswordData, setData] = useState({email:'', codevalidation:'',password:'', passwordConfirm:''});

  const onChangeInput = (e) => {
    const {name, value} = e.target;
    setData(
      {...forgotPasswordData,
        [name]: value
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(forgotPasswordData);
    onChangeStepForm(4);
  };

  const onChangeStepForm = (step) => {
    setStepForm({
      ...stepForm,
      step,
    });
  };

  const {
    email,
    codevalidation,
    password,
    passwordConfirm
  } = forgotPasswordData;

  const onSubmitEmail = (e) => {
    e.preventDefault();
    console.log(email);
    onChangeStepForm(2);
  };

  const onSubmitCodeVerification = (e) => {
    e.preventDefault();
    console.log(codevalidation);
    onChangeStepForm(3);
  };
  let content;

  switch (stepForm.step) {
  case 1:
    content=  <EmailForgotPasswordForm value={email} onChange={onChangeInput}  onClick ={onSubmitEmail}/>;
    break;
  case 2:
    content= <CodeValidationForgotPasswordForm value={codevalidation} onChange={onChangeInput} onClick={onChangeStepForm} onSubmit={onSubmitCodeVerification} />;
    break;
  case 3:
    content= <NewPasswordForgotPasswordForm value={{password, passwordConfirm}} onChange={onChangeInput}  onClick ={onChangeStepForm} onSubmit={onSubmitForm}/>;
    break;
  case 4:
    content= <SuccessForgotPasswordForm/>;
    break;
  default:
    content=  <EmailForgotPasswordForm value={email} onChange={onChangeInput}  onClick ={onSubmitEmail}/>;
  }

  return(
    <Fragment>
      <Header>
        <div  style={{  paddingTop: '10%', paddingLeft: '5%'}}>
          <Row className='justify-content-center align-items-center  pt-2 pb-2'>
            <Col xs={12} md={6}>
              <p  className='h2' style={{color: '#B8C5D3'}}>Forgotten password</p>
              {content}
            </Col>
          </Row>
        </div>
      </Header>
      <Footer />
    </Fragment>
  );
};
export default ForgotPasswordView;
