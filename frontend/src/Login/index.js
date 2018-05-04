//@flow

import React, { Component } from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import styled from "styled-components";
import { Icon, Input, Button } from "../components";
import loginBackground from "../assets/login-bg.jpg";

import theme from "../theme";

class Login extends Component {
  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <LoginStyled fluid>
        <Row center="xs">
          <Col xs={24} md={12} lg={8}>
            <LoginWrap>
              <LoginForm onSubmit={this.onSubmit}>
                <Icon shadow={1}>lock</Icon>
                <FormInputs>
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Hasło" />
                </FormInputs>
                <Button>Zaloguj się</Button>
              </LoginForm>
            </LoginWrap>
          </Col>
        </Row>
      </LoginStyled>
    );
  }
}

const LoginStyled = styled(Grid)`
  position: relative;
  z-index: 1;
  background: #585858;

  &::after {
    content: "";
    background-image: url(${loginBackground});
    background-size: cover;
    background-repeat: no-repeat;

    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 2;
  }
`;

const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  z-index: 3;
  width: 100%;
`;

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  padding: 2rem 2.5rem;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.2);
  i {
    background: ${theme.blue};
    color: #fff;
    font-size: 4rem;
    border-radius: 50%;
    padding: 1rem;
    margin: 0 auto;
    text-align: center;
  }
`;

const FormInputs = styled.div`
  margin: 2rem 0 1.25rem;
`;

export default Login;
