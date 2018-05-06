//@flow

import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../core/auth/actions";

import Layout from "./Layout";

const Guardian = ({ render, ...props }) => {
  const hasAccess = !!props.auth.accessToken;

  if (!hasAccess) {
    props.signOut();
    return null;
  }

  return <Route {...props} render={() => <Layout>{render()}</Layout>} />;
};

export default connect(state => ({ auth: state.auth }), {
  signOut
})(Guardian);
