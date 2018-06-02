//@flow

import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Button = props => {
  return (
    <ButtonStyled
      maxWidth={props.maxWidth}
      boxShadow={props.boxShadow}
      loading={props.loading}
      type={props.htmlType}
      {...props}
    />
  );
};

Button.defaultProps = {
  boxShadow: theme.shadow.small,
  maxWidth: "320px",
  center: true,
  loading: false,
  htmlType: "button"
};

const ButtonStyled = styled.button`
  outline: none;
  font-size: 0.85rem;
  padding: 0 1rem;
  border-radius: 4px;
  background: ${theme.primary};
  color: ${theme.color.text};
  border: none;
  height: 2.5rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: ${theme.transition};
  max-width: ${props => props.maxWidth};
  display: block;
  margin: ${props => (props.center ? "0 auto" : "initial")};

  &:hover {
    background-color: #e61a30;
  }
  &:active {
    border: none;
  }
`;

export default Button;
