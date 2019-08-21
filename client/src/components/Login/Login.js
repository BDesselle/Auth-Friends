import React from "react";
import axios from "axios";
import { Header, Form, Button } from "semantic-ui-react";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const credentials = {
    username: username,
    password: password
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log(
          "%cToken Has Been Set To localStorage!",
          "color: green; font-weight: bold;"
        );
      })
      .catch(err => console.log("Error", err.response));
  };

  return (
    <React.Fragment>
      <Header dividing as="h1" textAlign="center">
        Login
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="password"
            type="text"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
      {/* <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="text"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" value="Log in" />
      </form> */}
    </React.Fragment>
  );
}
