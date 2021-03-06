//@flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../core/auth/actions";
import { withRouter } from "react-router-dom";
import { Grid, Col, Row } from "react-styled-flexboxgrid";

import styled from "styled-components";
import { Icon, Input, Button, Loader } from "../../components";

import * as Api from "../../api";
import theme from "../../theme";

type Props = {};
type State = {
  email: string,
  password: string,
  loading: boolean,
  error: boolean,
  errorText: ""
};

class Login extends Component<Props, State> {
  state = {
    email: "admin@up.krakow.pl",
    password: "admin",
    loading: false,
    error: false,
    errorText: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading: true });
    Api.logIn(email, password)
      .then(accessData => {
        this.setState({ loading: false, error: false });
        this.props.signIn(accessData);
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true,
          errorText: "Niepoprawne dane logowania"
        });
      });
  };

  onChange = (e: InputEvent, type: "email" | "password") => {
    const { value } = e.target;
    this.setState({ [type]: value });
  };

  render() {
    return (
      <LoginStyled fluid>
        <Row center="xs">
          <Col xs={24} md={12} lg={8}>
            <LoginWrap>
              <LoginForm onSubmit={this.onSubmit}>
                <Icon shadow={1} type="lock" />
                <FormInputs>
                  <Input
                    type="email"
                    value={this.state.email}
                    onChange={e => this.onChange(e, "email")}
                    placeholder="Email"
                  />
                  <Input
                    type="password"
                    value={this.state.password}
                    onChange={e => this.onChange(e, "password")}
                    placeholder="Hasło"
                  />
                </FormInputs>
                <InfoWrap>
                  {this.state.loading ? (
                    <Loader loading={this.state.loading} />
                  ) : (
                    <Error error={this.state.error}>
                      {this.state.errorText}
                    </Error>
                  )}
                </InfoWrap>

                <Button
                  className="shadow-1"
                  loading={this.state.loading}
                  onClick={this.onSubmit}
                >
                  Zaloguj się
                </Button>
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
  &::after {
    content: "";
    background-color: ${theme.secondary};
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 2;
  }
`;
const InfoWrap = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Error = styled.div`
  color: red;
  opacity: 0.7;
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
  border-radius: 8px;
  background: ${theme.blockBackground};
  i {
    background: ${theme.primary};
    color: ${theme.color.text};
    font-size: 4rem;
    border-radius: 50%;
    padding: 1rem;
    margin: 0 auto;
    text-align: center;
    opacity: 0.85;
  }

  button {
    opacity: 0.85;
  }
`;

const FormInputs = styled.div`
  margin: 2rem 0 0;
`;

export default withRouter(connect(null, { signIn })(Login));
