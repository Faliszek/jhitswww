//@flow

import React from "react";
import styled from "styled-components";
import theme from "../theme";

type Props = {
  loading: boolean
};

const Loader = (props: Props) => {
  return (
    <LoaderStyled {...props}>
      {props.loading && (
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
    </LoaderStyled>
  );
};

const LoaderStyled = styled.div`
  width: 100%;
  height: ${props => (props.full ? "100vh" : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${theme.primary};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${theme.primary} transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
