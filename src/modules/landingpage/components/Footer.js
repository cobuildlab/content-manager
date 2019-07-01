import React, {useState} from 'react';
import { Col, Row,Form, FormGroup, Input } from 'reactstrap';

const Tittle = ({ children }) => {
  return(
    <div style={{ marginBottom: '3%', width: 'fit-content', color: 'white', borderBottom: '1px solid white'}}>
      <p className='h5 text-center' style={{color: 'white'}}><b><strong>{children}</strong></b></p>
    </div>
  );

};

const Footer = () => {
  const [data,setData] = useState();

  const onChangeInput = (e) => {
    setData(e.target.value);
  };

  const FooterInfo = (
    <div  className='container-fluid' style={{backgroundColor: '#B8C5D3', paddingTop: '2%', paddingBottom: '2%'}}>
      <Row className='w-100 justify-content-center'>
        <Col  xs={6} sm={3} >
          <Tittle>ABOUT THE BLOG</Tittle>
          <p className='text-left text-break' style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Col>
        <Col xs={6} sm={3}>
          <Tittle>POPULAR POSTS</Tittle>
          <Row className='w-100 justify-content-center'>
            <Col xs={3} sm={3}>
            </Col>
            <Col xs={9} sm={9}>
              <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
            <div className='w-100'></div>
            <br />
            <Col xs={3} sm={3}>
            </Col>
            <Col xs={9} sm={9}>
              <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </Col>
          </Row>
        </Col>
        <Col xs={'auto'} sm={'auto'}>
          <Tittle>SUBSCRIBE TO OUR NEWS LETTER</Tittle>
          <Form>
            <FormGroup>
              <Input type='email' placeholder='Enter you email here' name='email' value={data} onChange={onChangeInput} />
            </FormGroup>
          </Form>
          <Tittle>FOLLOW US ON</Tittle>
        </Col>
      </Row>
    </div>
  );


  const FooterReserved = (
    <div className='container-fluid' style={{backgroundColor: '#2F2F2F'}}>
      <Row className='w-100 align-items-center justify-content-center'>
        <Col  xs={12} sm={10} >
          <p style={{color:   '#B8C5D3'}}>Copyright@loremipsum-2019-AllRights Reserved.</p>
        </Col>
      </Row>
    </div>
  );
  return(
    <div>
      {FooterInfo}
      {FooterReserved}
    </div>
  );
};



export {Footer};
