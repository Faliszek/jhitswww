//@flow

import React, { Component } from "react";
import { getImages } from "../../api";

type State = {
  pictures: Array<*>
};
class Pictures extends Component<{}, State> {
  state = {
    pictures: [],
    loading: false
  };
  componentDidMount() {
    this.setState({ loading: true });
    getImages().then(
      pictures =>
        console.log(pictures) || this.setState({ loading: false, pictures })
    );
  }
  render() {
    console.log(this.state);
    return (
      <div>
        Galeria zdjęć
        {!this.state.loading &&
          this.state.pictures.map(p => <img src={p.url} alt={p.title} />)}
      </div>
    );
  }
}
export default Pictures;
