/*
 * Check out the article explaining this code in detail
 * at https://medium.com/@stephen.cook/animations-with-react-router-8e97222e25e1
 */

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Link, Route, Redirect } from "react-router-dom";
import SwitchWithSlide from "./SwitchWithSlide";
import SwitchObnoxious from "./SwitchObnoxious";

import "./styles.css";

class Container extends React.Component {
  state = {
    animate: false
  };

  render() {
    const SwitchComponent = this.state.animate
      ? SwitchObnoxious
      : SwitchWithSlide;

    return (
      <React.Fragment>
        <div className="container">
          <SwitchComponent>
            <Route
              path="/penguin"
              render={() => (
                <Link className="link" to="/lion">
                  🐧→🦁
                </Link>
              )}
            />
            <Route
              path="/lion"
              render={() => (
                <Link className="link" to="/chimp">
                  🦁→🐵
                </Link>
              )}
            />
            <Route
              path="/chimp"
              render={() => (
                <Link className="link" to="/finch">
                  🐵→🐤
                </Link>
              )}
            />
            <Route
              path="/finch"
              render={() => (
                <Link className="link" to="/bee">
                  🐤→🐝
                </Link>
              )}
            />
            <Route
              path="/bee"
              render={() => (
                <Link className="link" to="/penguin">
                  🐝→🐧
                </Link>
              )}
            />
            <Route
              path="/"
              render={() => (
                <Link className="link white" to="/penguin">
                  <img
                    src="https://pbs.twimg.com/profile_images/702439715270729728/vMmnId56_400x400.jpg"
                    width="96px"
                    height="96px"
                  />
                </Link>
              )}
            />
          </SwitchComponent>
        </div>

        <label className="animate-option">
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={e => this.setState({ animate: e.target.checked })}
          />
          Animate obnoxiously?
        </label>
      </React.Fragment>
    );
  }
}

const App = () => (
  <HashRouter>
    <Container />
  </HashRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
