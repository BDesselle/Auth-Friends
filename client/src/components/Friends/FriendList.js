import React from "react";
import { axiosWithAuth } from "../../helpers/AxiosWithAuth";
import { Card, Header } from "semantic-ui-react";
// Components
import Friend from "./Friend";

export default function FriendList() {
  const [state, setState] = React.useState({
    friends: []
  });

  const getFriends = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        const data = res.data;
        setState({ friends: data });
        console.log(
          "%cGET Request Was Successful!",
          "color: green; font-weight: bold;"
        );
      })
      .catch(err => console.log("Error", err));
  };

  React.useEffect(() => {
    getFriends();
  }, []);

  console.log("State: ", state);

  return (
    <React.Fragment>
      <Header dividing as="h1" textAlign="center">
        Friends List
      </Header>
      <Card.Group centered itemsPerRow={3}>
        {state.friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </Card.Group>
    </React.Fragment>
  );
}
/*
{
  friends.map(friend => {
    return <Friend data={follower} />;
  })
}
  */
