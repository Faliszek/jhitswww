//@flow

import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { Switch, Route, HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import HomePage from "./views/Homepage/index";
import Login from "./views/Login/index";

import theme from "./theme";
// import "antd/dist/antd.css";
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={Login} />
            </Switch>
          </HashRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
