import React from 'react';
import { Logo } from '.';
import { SideMenu } from '../Menu/SideMenu';
import '../../Stylesheets/NavBar.css';
import '../../Stylesheets/Queries/MQNavBar.css';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Logo />
      <SideMenu />
    </nav>
  );
};
