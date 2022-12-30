import Input from "./Input";
const SearchUserInput = ({ props }) => {
  return (
    <form onSubmit={props}>
      <Input type="search" placeholder="ör: bbssyl" />
    </form>
  );
};

export default SearchUserInput;
