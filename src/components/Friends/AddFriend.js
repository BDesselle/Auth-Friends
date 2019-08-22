import React from "react";
import { axiosWithAuth } from "../../helpers/AxiosWithAuth";
import { Divider, Form, Button } from "semantic-ui-react";

export default function AddFriend() {
  const [isClicked, setIsClicked] = React.useState(false);
  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [email, setEmail] = React.useState();

  const newFriend = {
    name: name,
    age: age,
    email: email
  };

  const handleClick = e => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then(res => {
        window.location.reload(true);
        console.log(
          "%cPOST Request Was Successful!",
          "color: green; font-weight: bold;"
        );
      })
      .catch(err => console.log("Error", err.response));
  };

  return (
    <React.Fragment>
      {isClicked ? (
        <Form onSubmit={addFriend}>
          <Button
            compact
            basic
            circular
            icon="cancel"
            color="red"
            onClick={handleClick}
            floated="right"
          />
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="name"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input
              placeholder="age"
              type="text"
              name="age"
              value={age}
              onChange={e => setAge(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Field>
          <Button compact basic color="green" type="submit">
            Add Friend
          </Button>
        </Form>
      ) : (
        <Button compact basic color="green" onClick={handleClick}>
          Create Friend
        </Button>
      )}
      <Divider />
    </React.Fragment>
  );
}
