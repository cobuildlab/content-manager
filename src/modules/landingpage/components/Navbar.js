import React from 'react';
import { Row, Button } from '@8base/boost';

const NavBar = () => {
  return(
    <div>
      <nav>
        <div>
          <Row justifyContent="start">
            <Row style={{width: '100%'}}>
              <Row>
                <span>LOGIN</span>
                <Button>SING UP </Button>
              </Row>
            </Row>
          </Row>
        </div>
      </nav>
    </div>
  );
};

export {NavBar};
