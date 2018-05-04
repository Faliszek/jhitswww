//@flow
import React from "react";
import styled from "styled-components";
import theme from "../theme";

type Props = {
  type: "email" | "password"
};

const Input = (props: Props) => {
  return (
    <InputStyled>
      <div className="input-wrap">
        <input {...props} />
        <span className="bar" />
      </div>
    </InputStyled>
  );
};

Input.defaultProps = {
  spellCheck: false
};

const InputStyled = styled.div`
  padding-bottom: 1rem;

  .input-wrap {
    position: relative;

    input {
      outline: none;
      border-top: 0;
      border-left: 0;
      border-right: 0;
      border-color: ${theme.gray};
      border-width: 1px;
      font-size: 0.85rem;
      background: rgba(255, 255, 255, 0.1);
      color:#fff;
      padding: 0.75rem 0.5rem;
      width: 100%;
      border-top-right-radius: 0.8rem;
      border-top-left-radius: 0.8rem;
      border-bottom-left-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;
      transition: 0.3s background ease;
      &:focus {
        background: rgba(255, 255, 255, 0.35);

      }

      &::placeholder{
        color:#eaeaea;
      }

    }
    /* .bar {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: ${theme.blue};
    } */
    &:after {
      content: "";
    }
  }
`;

export default Input;
