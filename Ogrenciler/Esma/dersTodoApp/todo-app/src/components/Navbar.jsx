import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <Navbar className='navbar'>
      <img className='navbarlogo' src='./svg/main.svg' alt='' />
      <h1 className='navbarisim'>Todo App</h1>
    </Navbar>
  );
};
export default Navbar
