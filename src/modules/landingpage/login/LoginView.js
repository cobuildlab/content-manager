import React, {Fragment, useState, useEffect} from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import EmailLoginForm from './components/emailLoginForm';
import PasswordLoginForm from './components/passwordLoginForm';


const LoginView = () => {
  const [stepForm, setStepForm] = useState({step: 1, content: ''});
  const [singinData, setData] = useState({email:'', password:''});

  const onChangeInput = (e) => {
    const {name, value} = e.target;
    setData(
      {...singinData,
        [name]: value
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(singinData);
  };

  const {
    email,
    password
  } = singinData;

  const onChangeStepForm = (step) => {
    setStepForm({
      ...stepForm,
      step,
    });
  };

  useEffect(() => {
    switch (stepForm.step) {
    case 1: {
      setStepForm({
        ...stepForm,
        content: <EmailLoginForm value={email} onChange={onChangeInput}  onClick ={onChangeStepForm}/>
      });
      break;
    };
    case 2: {
      setStepForm({
        ...stepForm,
        content: <PasswordLoginForm value={password} onChange={onChangeInput} onSubmit={onSubmitForm}  onClick ={onChangeStepForm}/>
      });
      break;
    };

    default:
      setStepForm({
        ...stepForm,
        content: <EmailLoginForm value={email} onChange={onChangeInput}  onClick ={onChangeStepForm}/>
      });
    }
  },[stepForm, email, password, onChangeInput, onSubmitForm, onChangeStepForm]);

  const {content} = stepForm;
  return(
    <Fragment>
      <Header>
        <div  style={{  paddingTop: '10%', paddingLeft: '5%'}}>
          <Row className='justify-content-center align-items-center  pt-2 pb-2'>
            <Col xs={12} md={6}>
              <p  className='h2' style={{color: '#B8C5D3'}}>Sign in</p>
              {content}
              <Link to='/forgotPassword'><span  style={{color: '#B8C5D3', paddingTop: '2%'}}>Did you forget password?</span></Link>
            </Col>
          </Row>
        </div>
      </Header>
      <Footer />
    </Fragment>
  );
};
export default LoginView;
