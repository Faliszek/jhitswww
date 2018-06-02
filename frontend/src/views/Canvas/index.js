//@flow
import React, { Component } from "react";
import styled from "styled-components";
import theme from "../../theme";

class Canvas extends Component {
  state = {
    y: 0,
    x: 0,
    r: 40
  };
  componentDidMount() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

    setInterval(() => {
      const { x, y, r } = this.state;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      ctx.arc(x + r / 2, y - 2 * r, r, 0, 2 * Math.PI);
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 10;
      ctx.stroke();
    }, 10);
  }

  calculateY = () => {
    this.setState(state => {
      const { y, direction } = state;

      return {
        ...this.changeDirection(y, direction),
        y: direction === "up" ? y - 10 : y + 10
      };
    });
  };

  changeDirection = (y, direction) => {
    if (window.innerHeight > this.state.radius && direction === "down") {
      return {
        direction: "up"
      };
    } else {
      return {
        direction: "down"
      };
    }
  };

  onMouseMove = e => {
    this.setState({
      x: e.screenX,
      y: e.screenY
    });
  };
  render() {
    return (
      <CanvasStyled>
        <h1>Proszę poruszać kursorem po ekranie</h1>

        <canvas
          onMouseMove={this.onMouseMove}
          id="myCanvas"
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <Info className="shadow-1">
          Kursor znajduję się w X: {this.state.x}px i Y:{this.state.y}px
        </Info>
      </CanvasStyled>
    );
  }
}

const CanvasStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.secondary};
  canvas {
    position: relative;
    z-index: 10;
  }
  h1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  background: ${theme.blockBackground};
  width: 340px;
  border-radius: 8px;
`;

export default Canvas;
