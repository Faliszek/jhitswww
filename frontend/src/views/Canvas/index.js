//@flow
import React, { Component } from "react";

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
    console.log(window.innerHeight, y);
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
      <canvas
        onMouseMove={this.onMouseMove}
        id="myCanvas"
        width={window.innerWidth}
        height={window.innerHeight}
      >
        asd
      </canvas>
    );
  }
}

export default Canvas;
