import React from "react";
import { Card, Button } from "semantic-ui-react";

export default function Friend({ friend }) {
  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>{friend.name}</Card.Header>
          <Card.Meta>{friend.age}</Card.Meta>
          <Card.Description>{friend.email}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="yellow" floated="left">
            Edit
          </Button>
          <Button basic color="red" floated="right">
            Delete
          </Button>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
}
