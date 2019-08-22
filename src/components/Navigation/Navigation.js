// eslint-disable
import React from "react";
import { Menu, Icon } from "semantic-ui-react";

export default function Navigation() {
  const signOut = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(true);
    console.log("%cLogout Successful!", "color: green; font-weight: bold;");
  };
  return (
    <React.Fragment>
      <Menu>
        <Menu.Item href="/">
          <Icon name="users" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={signOut} href="/login">
            <Icon name="sign-in" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </React.Fragment>
  );
}
