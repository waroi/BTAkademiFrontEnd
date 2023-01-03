import { useEffect, useState } from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import List from "./List";
import ListItem from "./ListItem";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Badge from "./Badge";
import Row from "./Row";
import Column from "./Column";

const GithubUserInfo = ({ username }) => {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    // const option = {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Token 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",
    //   },
    // };
    fetch(`http://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setUserInfo(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [username]);
  return (
    <Card key={userInfo.id}>
      <CardHeader>
        @{userInfo.login} - {userInfo.name}
      </CardHeader>
      <CardBody>
        <Row>
          <Column>
            <CardImage src={userInfo.avatar_url} />
            <ButtonGroup>
              <Button secondary>
                <i className="fa-solid fa-users text-info"></i>
                Followers
                <Badge>{userInfo.followers}</Badge>
              </Button>

              <Button primary>
                <i className="fa-solid fa-user-check text-info"></i>
                Following
                <Badge>{userInfo.following}</Badge>
              </Button>

              <Button href={userInfo.html_url} target="_blank">
                <i className="fa-brands fa-github"></i>
                Github
              </Button>
            </ButtonGroup>
          </Column>
          <Column>
            <List>
              <ListItem>
                <i className="fa-solid fa-book-bookmark"></i>
                <strong> Public Repositories:</strong> {userInfo.public_repos}
              </ListItem>
              <ListItem>
                <i className="fa-regular fa-calendar-check"></i>
                <strong> Created At:</strong> {userInfo.created_at}
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-blog"></i>
                <strong> Bio:</strong> {userInfo.bio}
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-building"></i>
                <strong> Company:</strong> {userInfo.company}
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-location"></i>
                <strong> Location:</strong> {userInfo.location}
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-envelope"></i>
                <strong> Mail:</strong>
                {userInfo.email}
              </ListItem>
              <ListItem>
                <i className="fa-brands fa-twitter"></i>
                <strong> Twitter:</strong>
                {userInfo.twitter}
              </ListItem>
            </List>
          </Column>
        </Row>
      </CardBody>
    </Card>
  );
};

export default GithubUserInfo;
