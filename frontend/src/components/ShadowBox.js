//@flow

import styled from "styled-components";
import theme from "../theme";

const ShadowBox = styled.div`
  box-shadow: ${props => (props.shadow ? theme.shadow[props.shadow] : "")};
  padding: 2rem 1rem;
  border-radius: 8px;
`;

export default ShadowBox;
