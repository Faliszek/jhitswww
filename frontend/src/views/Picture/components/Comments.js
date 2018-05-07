//@flow

import React, { Component } from "react";
import { Row, Col } from "react-styled-flexboxgrid";

class Comments extends Component {
  render() {
    return (
      <Row>
        {this.props.comments.map(c => (
          <Col xs={24}>
            <div />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Comments;
