import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';

const NavBar = () => {
    

    return (
        <div>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  href="/#/">e-comer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/">Inicio</Nav.Link>

            <Nav.Link href='/#/favorite'>Favoritos</Nav.Link>
            <Nav.Link href='/#/login'>Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default NavBar;