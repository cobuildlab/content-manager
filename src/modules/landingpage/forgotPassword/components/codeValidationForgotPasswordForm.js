import React, {Fragment} from 'react';
import {Button, Form, FormGroup, Row, Col} from 'reactstrap';


const CodeValidationForgotPasswordForm = ({value, onChange, onClick, onSubmit})  =>{

  return(
    <Fragment>
      <p  style={{color: '#B8C5D3'}}><b><strong>We've send you an email with the verification code.</strong></b></p>
      <Form>
        <Row>
          <Col xs='8' sm='8'>
            <FormGroup>
              <input className='inputTransparente' onChange={onChange}  type='text' value={value} name='codevalidation' placeholder='Enter verification code'/>
            </FormGroup>
            <Row className='w-100'>
              <Col xs='6' sm='3'>
                <FormGroup>
                  <Button onClick={()=>{onClick(1);}} className='pl-3 pr-3 pt-2 pb-2' style={{borderColor: '#B8C5D3', backgroundColor: 'transparent'}}><span><b>BACK</b></span></Button>
                </FormGroup>
              </Col>
              <Col xs='6' sm='3'>
                <FormGroup>
                  <Button onClick={onSubmit} className='pl-3 pr-3 pt-2 pb-2' style={{backgroundColor: '#B8C5D3', border: 'none'}}><span><b>NEXT</b></span></Button>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default CodeValidationForgotPasswordForm;
