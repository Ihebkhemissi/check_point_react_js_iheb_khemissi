import './App.css';
import React from 'react';
import { Button ,  Form , Navbar ,  NavDropdown , Nav } from 'react-bootstrap';
import { FacebookLoginButton , GithubLoginButton } from "react-social-login-buttons";


function App() {
  return (
   <div className="All">
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">News</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
     
   <Form  className='login_form'>
     <Form.Group controlId="formBasicName">
    <Form.Label className="fl">Name</Form.Label>
    <Form.Control type="Text" placeholder="YourName" />
  </Form.Group>
  <Form.Group controlId="formBasicLastName">
    <Form.Label className="fl">LastName</Form.Label>
    <Form.Control type="Text" placeholder="LastName" />
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label className="fl">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="fl">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check className="fl" type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="btn-lg btn-dark btn-block">
    Sign Up
  </Button>
  <FacebookLoginButton/>
  <div className="text-center">
    <a href="/sign-up">Sign Up</a>
    <span className="p2">|</span>
    <a href="/sign-up">Forgot Password</a>
  </div>
  <GithubLoginButton/>
</Form>
    </div>
  );
}

export default App;
