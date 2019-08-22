// eslint-disable
import React from "react";
import { axiosWithAuth } from "../../helpers/AxiosWithAuth";
import { Card, Button, Form } from "semantic-ui-react";

export default function Friend({ friend }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [email, setEmail] = React.useState();

  const updatedFriend = {
    name: name,
    age: age,
    email: email
  };

  const handleClick = e => {
    if (isEditing === false) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  const deleteFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${friend.id}`)
      .then(res => {
        window.location.reload(true);
        console.log(
          "%cDELETE Request Was Successful!",
          "color: green; font-weight: bold;"
        );
      })
      .catch(err => console.log("Error", err.response));
  };

  const updateFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${friend.id}`, updatedFriend)
      .then(res => {
        window.location.reload(true);
        console.log(
          "%cDELETE Request Was Successful!",
          "color: green; font-weight: bold;"
        );
      })
      .catch(err => console.log("Error", err.response));
  };

  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          {isEditing ? (
            <Form>
              <Form.Field>
                <input
                  placeholder={friend.name}
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder={friend.age}
                  type="text"
                  name="age"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder={friend.email}
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Field>
            </Form>
          ) : (
            <>
              <Card.Header>{friend.name}</Card.Header>
              <Card.Description>{friend.age}</Card.Description>
              <Card.Description>{friend.email}</Card.Description>
            </>
          )}
        </Card.Content>
        <Card.Content extra>
          {isEditing ? (
            <Button
              compact
              basic
              color="red"
              floated="left"
              onClick={handleClick}
            >
              Cancel
            </Button>
          ) : (
            <Button
              compact
              basic
              color="grey"
              floated="left"
              onClick={handleClick}
            >
              Edit
            </Button>
          )}

          {isEditing ? (
            <Button
              compact
              basic
              color="green"
              floated="right"
              onClick={updateFriend}
            >
              Save
            </Button>
          ) : (
            <Button
              compact
              basic
              color="red"
              floated="right"
              onClick={deleteFriend}
            >
              Delete
            </Button>
          )}
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}
