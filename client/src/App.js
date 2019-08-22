// eslint-disable
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import "./App.css";
// Components
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";
import FriendList from "./components/Friends/FriendList";
import { PrivateRoute } from "./helpers/PrivateRoute";

export default function App() {
  return (
    <React.Fragment>
      <Segment raised>
        <Router>
          <Navigation />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={FriendList} />
        </Router>
      </Segment>
    </React.Fragment>
  );
}
