import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import colors from '../../styles/colors';
import { BiLogoDiscordAlt, BiSolidHome, BiSolidGroup, BiSolidDonateHeart, BiTask, BiSolidDownArrow } from 'react-icons/bi';
import "./header.scss"

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: colors.light, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)"}} fixed="top">
      <Container className="justify-content-start">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>
              <img
                src="/img/ClairifyLogo.png"
                height="35"
                className="d-inline-block align-top"
                alt="Clarify logo"
              />
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
      <Container className="justify-content-center">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>
              NOTES
              <BiSolidDownArrow />
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
      <Container className="justify-content-end">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>
              <BiSolidHome />
              HOME
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/team">
            <Nav.Link>
              <BiSolidGroup />
              TEAM
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/apply">
            <Nav.Link>
              <BiTask />
              APPLY
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/donate">
            <Nav.Link>
              <BiSolidDonateHeart />
              DONATE
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/discord">
            <Nav.Link>
              <BiLogoDiscordAlt />
              DISCORD
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
