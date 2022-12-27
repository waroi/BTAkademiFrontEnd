import { useState } from "react";
import styled from "styled-components";
import Github from "./Github";
import Input from "./Input";
const SearchUser = () => {
  const SearchInput = styled(Input);
  const [value, setValue] = useState("");
  function getUser(e) {
    setValue(e.target.value);
  }
  return (
    <SearchInput type="search" placeholder="örn:@bbssyl" onSubmit={getUser} />
  );
};

export default SearchUser;
