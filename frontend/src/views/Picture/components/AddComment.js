//@flow

import React, { Component } from "react";
import styled from "styled-components";

import { Input, Button } from "../../../components";

class AddComment extends Component {
  state = {
    text: "",
    author: "",
    created: 0
  };

  onChange = (e: InputEvent, type: "author" | "text") => {
    const { value } = e.target;
    this.setState({ [type]: value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.handleSubmit({ ...this.state, created: Date.now() });
    this.setState({ text: "", author: "" });
  };

  render() {
    return (
      <AddCommentStyled onSubmit={this.onSubmit}>
        <FormInputs>
          <Input
            type="text"
            value={this.state.author}
            onChange={e => this.onChange(e, "author")}
            placeholder="Autor"
          />
          <Input
            type="textarea"
            value={this.state.text}
            onChange={e => this.onChange(e, "text")}
            placeholder="Treść komentarza"
          />
        </FormInputs>
        <Button
          className="shadow-1"
          loading={this.state.loading}
          onClick={this.onSubmit}
        >
          Dodaj komentarz
        </Button>
      </AddCommentStyled>
    );
  }
}

const AddCommentStyled = styled.form``;

const FormInputs = styled.div`
  margin: 2rem 0 1.25rem;
`;

export default AddComment;
