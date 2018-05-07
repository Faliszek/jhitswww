//@flow

import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import { Loader } from "../../components";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";

import * as Api from "../../api";

type Props = {};

class PictureDetails extends Component<Props, State> {
  state = {
    img: undefined,
    loading: false,
    loadingComments: false,
    comments: []
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ loading: true });
    Api.getImage(id).then(img => this.setState({ img, loading: false }));
    Api.getComments(id).then(comments =>
      this.setState({ comments, loadingComments: false })
    );
  }
  render() {
    if (this.state.loading) return <Loader loading={this.state.loading} full />;

    if (!this.state.img) return null;

    return (
      <PictureDetailsStyled>
        <Row>
          {" "}
          <Col xs={24}>
            <h1>{this.state.img.title}</h1>
          </Col>
        </Row>
        <Row>
          <Fragment>
            <Col xs={24} md={12}>
              <img src={this.state.img.url} alt={this.state.img.title} />
            </Col>

            <Col xs={24} md={12}>
              <h2>Komentarze</h2>
              <Comments comments={this.state.comments} />
            </Col>
          </Fragment>
        </Row>
      </PictureDetailsStyled>
    );
  }
}

const PictureDetailsStyled = styled(Grid)`
  padding-top: 64px;
  color: rgba(0, 0, 0, 0.75);
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export default PictureDetails;
