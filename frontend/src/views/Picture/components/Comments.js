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
      <Row style={{ paddingBottom: "2rem" }}>
        {this.props.comments.map(c => (
          <Col xs={24} key={c.id}>
            <Comment>
              <Row start="xs">
                <Col xs={12}>
                  <strong>Autor:</strong> {c.author}
                </Col>
                <Col xs={12}>
                  <strong>Data utworzenia: </strong>
                  {moment(parseInt(c.created, 10)).format("DD.MM.YYYY HH:mm")}
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
  border-radius: 2rem;
  width: 90%;
  margin: 0 auto 1rem;
  padding: 1rem;
  .text {
    margin: 2rem 0;
    @media screen and (max-width: 992px) {
      margin: 1rem 0;
    }
  }
`;
export default Comments;
