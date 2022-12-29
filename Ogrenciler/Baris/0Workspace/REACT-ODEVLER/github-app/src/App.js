import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import NavbarBrand from "./components/NavbarBrand";
import logo from "./img/logo.png";
import Github from "./components/Github";
import { useState } from "react";
import SearchUser from "./components/SearchUser";

function App() {
  const [search, setSearch] = useState(null);
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
          <SearchUser props={getUser} />
        </Navbar>
        {/* <Github user={search == null ? "bbssyl" : search} /> */}
      </Container>
    </div>
  );
}

export default App;
