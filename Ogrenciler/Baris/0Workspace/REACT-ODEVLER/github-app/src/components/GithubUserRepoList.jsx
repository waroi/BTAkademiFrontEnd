import { useState, useEffect } from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import List from "./List";
import ListItem from "./ListItem";
const GithubUserRepoList = ({ username }) => {
  const [userRepos, setUserRepos] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then(
        (result) => {
          setUserRepos(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [username]);
  return (
    <Card>
      <CardHeader>Repositories</CardHeader>
      <CardBody>
        <List>
          {userRepos.map((repo) => {
            return <ListItem key={repo.id}>{repo.name}</ListItem>;
          })}
        </List>
      </CardBody>
    </Card>
  );
};

export default GithubUserRepoList;
