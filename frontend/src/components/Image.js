//@flow

import React, { Component } from "react";

import styled from "styled-components";

import Button from "./Button";

type Props = {
  src: string,
  title: string
};

type State = {};

class ImageWrap extends Component<Props, State> {
  render() {
    return (
      <ImgWrap className="img-wrap" {...this.props}>
        <ImgCover url={this.props.src}>
          <img src={this.props.src} alt={this.props.title} />
          <Content>
            <h1>{this.props.title}</h1>
            <p>{this.props.desc}</p>
            <Button
              className="shadow-2"
              onClick={() => this.props.action(this.props.id)}
            >
              Przejdź do komentarzy
            </Button>
          </Content>
        </ImgCover>
      </ImgWrap>
    );
  }
}

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.height};
  height: 100vh;
  width: 100vw;
`;

const ImgCover = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    display: block;
    min-height: 100vh;
    top: 0;
    left: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 4rem;
    color: #fff;
    width: 75%;
    text-align: center;
    margin: 2rem 0;
    @media screen and (max-width: 992px) {
      width: 90%;
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    width: 60%;
    text-align: center;
    @media screen and (max-width: 992px) {
      width: 90%;
      font-size: 0.9rem;
    }
  }

  button {
    margin: 2rem 0;
  }
`;
export default ImageWrap;
