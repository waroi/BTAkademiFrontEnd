import Input from "./Input";
const SearchUserInput = ({ props }) => {
  return (
    <form onSubmit={props}>
      <Input type="search" placeholder="Search User(ör: bbssyl)" />
    </form>
  );
};

export default SearchUserInput;
