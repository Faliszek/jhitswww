//@flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import styled from "styled-components";
import { getImages } from "../../api";
import { Button } from "../../components";
import theme from "../../theme";

type Props = {};

type State = {
  pictures: Array<*>
};

class PictureList extends Component<Props, State> {
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

  render() {
    return (
      <Styled>
        <div>
          <h1>WPISY NA BLOGU</h1>

          {this.state.pictures.map((p, index) => (
            <ImgWrap
              key={index}
              className="shadow-1"
              onClick={() => this.props.push(`/articles/${p.id}`)}
            >
              <header>
                <img className="shadow-2" src={p.url} alt={p.title} />
                <h3>{p.title}</h3>
              </header>
              <div className="wrap">
                <p>{p.description}</p>
                <div>
                  <Button
                    className="shadow-2"
                    onClick={() => this.props.push(`/articles/${p.id}`)}
                  >
                    Przejdź do artykułu
                  </Button>
                </div>
              </div>
            </ImgWrap>
          ))}
        </div>
      </Styled>
    );
  }
}

const Styled = styled.div`
  color: ${theme.color.text};
  padding-top: 80px;
  background: ${theme.secondary};

  h1 {
    padding: 25px 0;
  }
  > div {
    width: 90%;
    margin: 0 auto;
    min-height: 90vh;
    padding-bottom: 10vh;
  }

  .wrap {
    font-size: 1rem;
    margin: 2rem 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const ImgWrap = styled.div`
  color: ${theme.color.text};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  padding: 35px 0;
  margin-bottom: 50px;
  border-radius: 8px;
  transition: 0.2s all ease;

  background: ${theme.blockBackground};
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    @media screen and (max-width: 992px) {
      flex-wrap: wrap;
    }
  }
  h3 {
    color: ${theme.color.text};
    margin: 0;
    font-size: 3rem;
    @media screen and (max-width: 992px) {
      display: block;
      width: 100%;
      text-align: center;
      margin-top: 18px;
      margin-bottom: 32px;
    }
  }
  img {
    max-width: 300px;
    max-height: 300px;
    margin-right: 30px;
    border-radius: 8px;
    display: block;
    @media screen and (max-width: 992px) {
      display: block;
      width: 100%;
      margin: 0 auto;
    }
  }
  p {
    max-width: 90%;
    font-size: 1rem;
    padding: 2rem;
    border-radius: 8px;
    background: ${theme.blockBackground};
  }
`;

export default connect(null, { push })(PictureList);
