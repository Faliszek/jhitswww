//@flow

import React from "react";
import styled from "styled-components";
import { Grid, Row } from "react-styled-flexboxgrid";

type Props = {
  title: React$Node
};

const Page = (props: Props) => {
  return (
    <Grid fluid>
      <Row>
        <Title>{props.title}</Title>
      </Row>
      <Row>
        <Content>{props.children}</Content>
      </Row>
    </Grid>
  );
};

const Content = styled.div``;
const Title = styled.h1`
  text-indent: 2rem;
`;

export default Page;
