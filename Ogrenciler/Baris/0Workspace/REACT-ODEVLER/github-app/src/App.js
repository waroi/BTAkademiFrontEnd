import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import NavbarBrand from "./components/NavbarBrand";
import logo from "./img/logo.png";
import Github from "./components/Github";
import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [search, setSearch] = useState(null);
  function getUser(e) {
    e.preventDefault();
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
          {/* 
            form kullanarak onSubmit yapıldığında kayıt gelmiyor aynı zamanda form sayfayı renderlıyor 
            onChange yaptığımda hiçbir şey yazmadığımda sayfa hata veriyor ve Componentler gidiyor
            ÇÖZÜM ? ? ? 
           */}
          <Input type="search" placeholder="ör: bbssyl" onChange={getUser} />
        </Navbar>
        {console.log(search)}
        {/* <Github user={search == null ? "bbssyl" : search} /> */}
      </Container>
    </div>
  );
}

export default App;
