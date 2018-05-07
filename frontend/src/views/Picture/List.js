//@flow

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import styled from "styled-components";
import { Grid } from "react-styled-flexboxgrid";
import { Image as Slide, Loader } from "../../components";
import Arrow from "./components/Arrow";
import { getImages } from "../../api";

import theme from "../../theme";

type State = {
  pictures: Array<*>
};
class Pictures extends Component<{}, State> {
  state = {
    index: 0,
    pictures: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    getImages().then(pictures => {
      this.setState({
        pictures,
        loading: false
      });
    });
  }

  onNextClick = () => {
    this.setState(state => {
      if (this.rightArrowDisabled()) return null;
      return {
        ...state,
        index: state.index + 1
      };
    });
  };

  rightArrowDisabled = () =>
    this.state.index + 1 === this.state.pictures.length;

  onPrevClick = () => {
    this.setState(state => {
      if (this.leftArrowDisabled()) return null;
      return {
        ...state,
        index: state.index - 1
      };
    });
  };

  leftArrowDisabled = () => this.state.index === 0;

  calculatePosition = index => {
    return (this.state.index - index) * window.innerWidth;
  };

  goToImage = id => this.props.push(`/pictures/${id}`);

  render() {
    return (
      <PicturesStyled fluid>
        <Arrow
          onClick={this.onPrevClick}
          side="left"
          disabled={this.leftArrowDisabled()}
        />
        <Slider>
          {this.state.loading ? (
            <Loader loading={this.state.loading} />
          ) : (
            <Fragment>
              {this.state.pictures.map((p, index) => {
                return (
                  <SlideWrap
                    key={p.id}
                    index={index}
                    right={this.calculatePosition(index)}
                  >
                    <Slide
                      title={p.title}
                      desc={p.description}
                      src={p.url}
                      alt={p.title}
                      id={p.id}
                      action={this.goToImage}
                    />
                  </SlideWrap>
                );
              })}
            </Fragment>
          )}
        </Slider>
        <Arrow
          onClick={this.onNextClick}
          side="right"
          disabled={this.rightArrowDisabled()}
        />
      </PicturesStyled>
    );
  }
}

const PicturesStyled = styled(Grid)``;

const Slider = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;

const SlideWrap = styled.div`
  position: absolute;
  right: ${props => `${props.right}px`};
  opacity: ${props => props.opacity};
  z-index: ${props => props.index};
  transition: 0.6s all ease;
`;

export default connect(null, { push })(Pictures);
