import React, {Fragment, useState} from 'react';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {Button, Col, Row, Form, FormGroup} from 'reactstrap';

const SingUpView = () => {
  const [singupData, setData] = useState({usermane:'', email:'', password:'', terms:false});

  const onChangeInput = (e) => {
    const {name, value} = e.target;
    setData(
      {...singupData,
        [name]: value
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(singupData);
  };

  const {
    usermane,
    email,
    password,
    terms
  } = singupData;
  return(
    <Fragment>
      <Header>
        <div  style={{  paddingTop: '10%', paddingLeft: '5%'}}>
          <Row className='justify-content-center align-items-center  pt-2 pb-2'>
            <Col xs={12} md={6}>
              <p  style={{color: '#B8C5D3'}}><span className='h2'>Sign up</span><br />
                <br />
                <b><strong>one month for free</strong></b></p>
              <Form onSubmit={onSubmitForm}>
                <Row>
                  <Col xs='8' sm='8'>
                    <FormGroup>
                      <input className='inputTransparente' onChange={onChangeInput} type='text' value={usermane} name='usermane' placeholder='User Name'/>
                    </FormGroup>
                    <FormGroup>
                      <input className='inputTransparente' onChange={onChangeInput}  type='email' value={email} name='email' placeholder='Your email'/>
                    </FormGroup>
                    <FormGroup>
                      <input className='inputTransparente' onChange={onChangeInput} type='password' value={password} name='password' placeholder='Password'/>
                    </FormGroup>
                    <FormGroup>
                      <input  type='checkbox' onChange={onChangeInput} checked={terms} name='terms'/> <label style={{color: '#B8C5D3'}}> I accept terms and conditions</label>
                    </FormGroup>
                    <FormGroup>
                      <Button className='pl-3 pr-3 pt-2' style={{backgroundColor: '#B8C5D3', border: 'none'}}><span><b>LET'S START</b></span></Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Header>
      <Footer />
    </Fragment>
  );
};
export default SingUpView;
