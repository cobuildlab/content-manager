import React, {Fragment} from 'react';
import {Button, Form, FormGroup, Row, Col} from 'reactstrap';
import { PropTypes } from 'prop-types';


const EmailForgotPasswordForm = ({value, onChange, onClick})  =>{

  return(
    <Fragment>
      <p  style={{color: '#B8C5D3'}}><b><strong>Enter your email needed for recovery.</strong></b></p>
      <Form>
        <Row>
          <Col xs='8' sm='8'>
            <FormGroup>
              <input className='inputTransparente' onChange={onChange}  type='email' value={value} name='email' placeholder='Your email'/>
            </FormGroup>
            <FormGroup>
              <Button onClick={onClick} className='pl-3 pr-3 pt-2 pb-2' style={{backgroundColor: '#B8C5D3', border: 'none'}}><span><b>NEXT</b></span></Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

EmailForgotPasswordForm.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EmailForgotPasswordForm;
