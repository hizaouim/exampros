import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
    return (
   
           <header>
            <Navbar bg="light" expand="lg">
                <Container>
        <LinkContainer to="/">
  <Navbar.Brand >ExamPROS</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/">

      <Nav.Link href="#home">Home</Nav.Link>
      </LinkContainer >

      <NavDropdown title="Topics" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Devops</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Database</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Cloud</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Development</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">All Providers</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Providers" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Microsoft</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Oracle</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Cisco</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">All Providers</NavDropdown.Item>
      </NavDropdown>
      <LinkContainer to="/questions/add">

<Nav.Link href="">Add a question</Nav.Link>
</LinkContainer >
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    <Nav>
    <LinkContainer to="/login">

    <Nav.Link >Sign In <i className='fas fa-user' ></i> </Nav.Link>
    </LinkContainer>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    
   
     );
};

export default Header;