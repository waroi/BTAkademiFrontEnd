import styled from "styled-components";

const NavbarLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  color: #fff;
  transition: 0.4s ease-in-out;
  background: linear-gradient(to bottom right, #227884, #002b5b);
  :hover {
    box-shadow: 0 0 8px 1px #3c3c3c;
    opacity: 0.8;
  }
`;

export default NavbarLink;
