import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import NavbarBrand from "./components/NavbarBrand";
import logo from "./img/logo.png";
import Github from "./components/Github";
import { useState } from "react";
import Input from "./components/Input";
import SearchUser from "./components/SearchUser";

function App() {
  const [search, setSearch] = useState("");
  function getUser(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <Container>
        <Navbar>
          <NavbarBrand href="#">
            <Image src={logo} width="50" />
            Github (ReactJS)
          </NavbarBrand>
          <Input type="search" placeholder="ör: bbssyl" onChange={getUser} />
          <SearchUser />
        </Navbar>
        <Github user={search !== null ? "bbssyl" : search} />
      </Container>
    </div>
  );
}

export default App;
