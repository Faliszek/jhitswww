//@flow

import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import { Guardian } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

import PictureList from "./views/Picture/List";
import PictureDetails from "./views/Picture/Details";
import Canvas from "./views/Canvas";
import Login from "./views/Login";

import theme from "./theme";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Guardian
                render={() => (
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/pictures" />}
                    />
                    <Route exact path="/" component={PictureList} />
                    <Route exact path="/pictures" component={PictureList} />
                    <Route
                      exact
                      path="/pictures/:id"
                      component={PictureDetails}
                    />

                    <Route exact path="/canvas" component={Canvas} />
                  </Switch>
                )}
              />
            </Switch>
          </HashRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
