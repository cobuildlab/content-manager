import React, { Fragment } from "react";
import { Button, Form, FormGroup, Row, Col } from "reactstrap";
import { PropTypes } from "prop-types";

const PasswordLoginForm = ({ value, onChange, onClick, onSubmit }) => {
  return (
    <Fragment>
      <p style={{ color: "#B8C5D3" }}>
        <b>
          <strong>with your password</strong>
        </b>
      </p>
      <Form>
        <Row>
          <Col xs="8" sm="8">
            <FormGroup>
              <input
                className="inputTransparente"
                onChange={onChange}
                type="password"
                value={value}
                name="password"
                placeholder="Your password"
              />
            </FormGroup>
            <Row className="w-100">
              <Col xs="6" sm="3">
                <FormGroup>
                  <Button
                    onClick={() => {
                      onClick(1);
                    }}
                    className="pl-3 pr-3 pt-2 pb-2"
                    style={{
                      borderColor: "#B8C5D3",
                      backgroundColor: "transparent"
                    }}
                  >
                    <span>
                      <b>BACK</b>
                    </span>
                  </Button>
                </FormGroup>
              </Col>
              <Col xs="6" sm="3">
                <FormGroup>
                  <Button
                    onClick={onSubmit}
                    className="pl-3 pr-3 pt-2 pb-2"
                    style={{ backgroundColor: "#B8C5D3", border: "none" }}
                  >
                    <span>
                      <b>NEXT</b>
                    </span>
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

PasswordLoginForm.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PasswordLoginForm;
