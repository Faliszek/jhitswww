//@flow

import React, { Component, Fragment } from "react";
import _ from "lodash/fp";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import { Loader } from "../../components";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";
import theme from "../../theme";
import moment from "moment";
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
    Api.getComments(id).then(comments =>
      this.setState({
        comments: comments.map(c => ({
          ...c,
          description: unescape(encodeURIComponent(c.description))
        })),
        loadingComments: false
      })
    );
  };

  onSubmit = ({ author, text, created }) => {
    const { id } = this.props.match.params;
    Api.addComment(id, author, text, created)
      .then(res => {
        this.setState({ loadingComments: false, error: false });
        this.fetchComments();
      })
      .catch(err => {
        this.setState({ loadingComments: false, error: true });
      });
  };

  render() {
    if (this.state.loading) return <Loader loading={this.state.loading} full />;

    if (!this.state.img) return null;
    if (_.isEmpty(this.state.img)) {
      return (
        <NotFound>
          <h1>
            Podany wpis nie istnieje<span role="img" aria-label="sad">
              ☹️
            </span>
          </h1>
        </NotFound>
      );
    }
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
                  <Wrap>
                    <h2 className="label">
                      <span role="img" aria-label="calendar">
                        📆
                      </span>
                      DATA DODANIA{" "}
                    </h2>
                    <p>
                      {moment(this.state.img.created * 1000).format(
                        "DD.MM.YYYY HH:mm"
                      )}
                    </p>
                    <h2 className="label">
                      <span role="img" aria-label="calendar">
                        📖
                      </span>
                      OPIS
                    </h2>

                    <p>{this.state.img.description}</p>
                  </Wrap>
                </Col>

                <Col xs={24} md={11} className="right-col">
                  <h2>Komentarze</h2>
                  <Comments
                    comments={this.state.comments}
                    loading={this.state.loadingComments}
                  />

                  <AddComment handleSubmit={this.onSubmit} />
                </Col>
              </Fragment>
            </Row>
          </Col>
        </Row>
      </PictureDetailsStyled>
    );
  }
}
const Wrap = styled.div`
  background: ${theme.blockBackground};
  padding: 16px;
  border-radius: 8px;
`;

const NotFound = styled.div`
  padding-top: 150px;

  h1 {
    span {
      padding-left: 15px;
    }
    text-align: center;
  }
`;
const PictureDetailsStyled = styled(Grid)`
  min-height: 90vh;
  overflow-y: scroll;
  padding-bottom: 10vh;
  color: ${theme.color.text};
  padding-top: 80px;
  background: ${theme.secondary};
  .label {
    opacity: 0.75;
    font-weight: 400;
    > span {
      padding-right: 1rem;
    }
  }

  h1 {
    padding-top: 5rem;
    text-transform: uppercase;
    padding: 25px 0;
    text-align: left;
  }
  h2 {
    text-align: left;
    margin-bottom: 24px;
  }
  p {
    text-align: left;
    margin-bottom: 1rem;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    padding-bottom: 2.5rem;
  }
  .right-col {
    background: ${theme.blockBackground};
    border-radius: 8px;
    padding: 1rem;
  }
`;

export default PictureDetails;
