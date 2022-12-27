import Column from "./Column";
import GithubUserInfo from "./GithubUserInfo";
import GithubUserRepoList from "./GithubUserRepoList";
const Github = ({ user }) => {
  return (
    <Column>
      <GithubUserInfo username={user} />
      <GithubUserRepoList username={user} />
    </Column>
  );
};

export default Github;
