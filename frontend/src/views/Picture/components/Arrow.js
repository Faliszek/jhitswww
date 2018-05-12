//@flow

import React from "react";
import styled from "styled-components";

import { Icon } from "../../../components";
import theme from "../../../theme";

type Props = {
  onClick: () => void,
  side: "right" | "left"
};

const Arrow = (props: Props) => {
  return (
    <ArrowStyled {...props} onClick={props.onClick}>
      <Icon type={`chevron_${props.side}`} />
    </ArrowStyled>
  );
};

export const ArrowStyled = styled.div`
  display: block;
  height: 8rem;
  width: 8rem;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: ${theme.transition};
  transform: scale(1);
  ${props => (props.side === "left" ? "left: 0" : "right:0")};
  z-index: 100;

  @media screen and (max-width: 600px) {
    top: unset;
    bottom: 10%;
  }

  &:hover {
    transform: scale(1.15);
  }
  i {
    font-size: 8rem;
    line-height: 8rem;
    color: "#fff";
    opacity: ${props => (props.disabled ? "0.3" : "1")};
  }
`;

export default Arrow;
