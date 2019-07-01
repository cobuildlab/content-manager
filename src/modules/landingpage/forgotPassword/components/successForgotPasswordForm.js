import React, {Fragment} from 'react';
import {Button, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';


const SuccessForgotPasswordForm = ()  =>{

  return(
    <Fragment>
      <p  style={{color: '#B8C5D3'}}><b><strong>New password was successfully set. <br /> Please log in.</strong></b></p>
      <Row>
        <Col xs='8' sm='8'>
          <Button className='pl-3 pr-3 pt-2 pb-2' style={{backgroundColor: '#B8C5D3', border: 'none'}}><Link to='login'><span><b>LOGIN</b></span></Link></Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SuccessForgotPasswordForm;
