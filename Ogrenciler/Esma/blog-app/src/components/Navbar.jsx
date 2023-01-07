import styled from "styled-components";
import NavbarBrand from "./NavbarBrand";
import logo from"../img/elma.jpg";
import NavbarItem from "./NavbarItem";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
    const Navbar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
background: #f0f0f0;
box-shadow: 0 0 8px 1px #3c3c3c;
`;

return (
    <Navbar>
        <NavbarBrand>
            <img src={logo} alt={logo} width="100px" />
            Blog-App
        </NavbarBrand>
        <NavbarItem>
            <NavbarLink href="#">New Post</NavbarLink>
        </NavbarItem>
    </Navbar>
);

};
export default Navbar;

