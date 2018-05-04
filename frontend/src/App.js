//@flow

import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import { Provider } from "react-redux";
import { store, history } from "./store";

import HomePage from "./Homepage/index";
import Login from "./Login/index";

import theme from "./theme";

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={Login} />
            </Switch>
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
