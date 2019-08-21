import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Segment, Menu, Icon } from "semantic-ui-react";
import "./App.css";
// Components
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import FriendList from "./components/Friends/FriendList";
import { PrivateRoute } from "./helpers/PrivateRoute";

export default function App() {
  const [state, setState] = React.useState({ activeItem: "home" });

  const handleActive = (e, { name }) => setState({ activeItem: name });
  return (
    <React.Fragment>
      <Segment raised>
        <Router>
          <Menu pointing>
            <Link to="/">
              <Menu.Item
                name="home"
                active={state.activeItem === "home"}
                onClick={handleActive}
              >
                <Icon name="home" />
              </Menu.Item>
            </Link>
            <Link to="/friends">
              <Menu.Item
                name="friends"
                active={state.activeItem === "friends"}
                onClick={handleActive}
              >
                <Icon name="users" />
              </Menu.Item>
            </Link>
            <Menu.Menu position="right">
              <Link to="/login">
                <Menu.Item
                  name="login"
                  active={state.activeItem === "login"}
                  onClick={handleActive}
                >
                  <Icon name="sign-in" />
                </Menu.Item>
              </Link>
            </Menu.Menu>
          </Menu>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={FriendList} />
        </Router>
      </Segment>
    </React.Fragment>
  );
}
