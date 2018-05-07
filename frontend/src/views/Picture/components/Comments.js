//@flow

import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";
import { Row, Col } from "react-styled-flexboxgrid";

import { Loader } from "../../../components";

class Comments extends Component {
  render() {
    if (this.props.loading) return <Loader loading={this.props.loading} />;

    if (!this.props.comments) return null;
    return (
      <Row>
        {this.props.comments.map(c => (
          <Col xs={24} key={c.id}>
            <Comment>
              <Row start="xs">
                <Col xs={12}>
                  <strong>Autor:</strong> {c.author}
                </Col>
                <Col xs={12}>
                  <strong>Data utworzenia: </strong>
                  {moment(c.created).format("DD.MM.YYYY HH:mm")}
                </Col>
                <Col xs={24}>
                  <div className="text">
                    <strong>Teskst:</strong> <p>{c.text}</p>
                  </div>
                </Col>
              </Row>
            </Comment>
          </Col>
        ))}
      </Row>
    );
  }
}

const Comment = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem 2.5rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  .text {
    margin: 2rem 0;
  }
`;
export default Comments;
