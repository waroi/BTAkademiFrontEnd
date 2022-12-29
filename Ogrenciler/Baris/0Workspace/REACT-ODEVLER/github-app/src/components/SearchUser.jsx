import Button from "./Button";
import Input from "./Input";
const SearchUser = ({ props }) => {
  return (
    <form onSubmit={props}>
      <Input type="search" placeholder="ör: bbssyl" />
      <Button primary>Search</Button>
    </form>
  );
};

export default SearchUser;
