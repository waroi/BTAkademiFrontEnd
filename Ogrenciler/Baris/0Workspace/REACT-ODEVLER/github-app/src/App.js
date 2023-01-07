import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import NavbarBrand from "./components/NavbarBrand";
import logo from "./img/logo.png";
import Github from "./components/Github";
import { useState } from "react";
import SearchUserInput from "./components/SearchUserInput";

function App() {
  const [search, setSearch] = useState(null);
  function getUser(e) {
    setSearch(e.target.firstElementChild.value);
    e.preventDefault();
  }
  return (
    <div className="App">
      <Container>
        <Navbar>
          <NavbarBrand href="#">
            <Image src={logo} width="50" />
            Github (ReactJS)
          </NavbarBrand>
          <SearchUserInput props={getUser} />
        </Navbar>
        {search && <Github user={search} />}
      </Container>
    </div>
  );
}

export default App;
