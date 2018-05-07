//@flow

import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import { Loader } from "../../components";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";
import theme from "../../theme";
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
    this.fetchComments();
  }

  fetchComments = () => {
    const { id } = this.props.match.params;
    Api.getComments(id).then(
      comments =>
        console.log(comments) ||
        this.setState({ comments, loadingComments: false })
    );
  };

  onSubmit = ({ author, text }) => {
    const { id } = this.props.match.params;
    this.setState({ loading: true });
    Api.addComment(id, author, text)
      .then(res => {
        this.setState({ loading: false, error: false });
        this.fetchComments();
      })
      .catch(err => {
        this.setState({ loading: false, error: true });

        // if (err.status === 422) {
        // this.setState({ errorText: "Niepoprawne dane logowania" });
        // } else {
        // this.setState({ errorText: "Wystąpił nieoczekiwany błąd" });
        // }
      });
  };

  render() {
    if (this.state.loading) return <Loader loading={this.state.loading} full />;

    if (!this.state.img) return null;

    return (
      <PictureDetailsStyled fluid>
        <Row center="xs">
          <Col xs={22}>
            <Row>
              {" "}
              <Col xs={24}>
                <h1>{this.state.img.title}</h1>
              </Col>
            </Row>
            <Row between="xs">
              <Fragment>
                <Col xs={24} md={11}>
                  <img src={this.state.img.url} alt={this.state.img.title} />
                </Col>

                <Col xs={24} md={11} className="right-col">
                  <h2>Komentarze</h2>
                  <Comments
                    comments={this.state.comments}
                    loading={this.state.loadingComments}
                  />

                  <AddComment onSubmit={this.onSubmit} />
                </Col>
              </Fragment>
            </Row>
          </Col>
        </Row>
      </PictureDetailsStyled>
    );
  }
}

const PictureDetailsStyled = styled(Grid)`
  background: ${theme.blue};
  height: 100vh;
  h1 {
    padding-top: 5rem;
    text-align: left;
  }
  h2 {
    text-align: left;
    padding-bottom: 1.5rem;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .right-col {
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem 2rem;
    border-radius: 2rem;
  }
`;

export default PictureDetails;
