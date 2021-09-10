// must run <yarn add styled-components> in terminal to use styled components

import React from "react";
import { FaBars } from "react-icons/fa"; // Run <yarn add react-icons> in terminal to add React icons
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">James L. Jenks</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="skills">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resume">Resume</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  );
};

export default Navbar;
