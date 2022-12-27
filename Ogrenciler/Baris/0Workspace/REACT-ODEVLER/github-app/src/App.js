import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import NavbarBrand from "./components/NavbarBrand";
import logo from "./img/logo.png";
import Github from "./components/Github";
import SearchUser from "./components/SearchUser";

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar>
          <NavbarBrand href="#">
            <Image src={logo} width="50" />
            Github (ReactJS)
          </NavbarBrand>
          {/* <SearchUser /> */}
        </Navbar>
        <Github user="waroi" />
      </Container>
    </div>
  );
}

export default App;
