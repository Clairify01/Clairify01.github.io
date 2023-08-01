import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Clairify</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/apply'>
              <Nav.Link>
                <FaSignInAlt /> Sign In
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/donate'>
              <Nav.Link>
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header
