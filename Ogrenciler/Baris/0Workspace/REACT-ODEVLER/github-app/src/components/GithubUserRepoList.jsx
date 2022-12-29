import { useState, useEffect } from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import List from "./List";
import ListItem from "./ListItem";
import Link from "./Link";
const GithubUserRepoList = ({ username }) => {
  const [userRepos, setUserRepos] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
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
            return (
              <ListItem key={repo.id}>
                <Link href={repo.html_url} target="_blank">
                  <i className="fa-solid fa-folder"></i> {repo.name}
                </Link>{" "}
                <small>
                  <i class="fa-solid fa-code-fork"></i>Fork: {repo.forks}{" "}
                </small>
                <small>
                  <i class="fa-solid fa-star"></i>Starz: {repo.stargazers_count}
                </small>
              </ListItem>
            );
          })}
        </List>
      </CardBody>
    </Card>
  );
};

export default GithubUserRepoList;
